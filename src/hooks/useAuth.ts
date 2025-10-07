import { apiClientServer } from '@/services/api'
import useAuthStore from '@/store/authStore'
import { format } from 'date-fns'
import { te } from 'date-fns/locale'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const useAuth = () => {

    const { actions, user, isAuthenticated } = useAuthStore()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [tryFetch, setTryFetch] = useState(false)

    const fetchUser = async () => {
        setIsLoading(true)
        setError(null)

        try {
            const { data: respose } = await apiClientServer.get('/users/me')
            const { data, error } = respose
            if (error) {
                setError(`Error al hacer fetch del usuario: ${error}`)
            }

            actions.setUser(data)
        } catch (err) {
            setError(`Error al hacer fetch del usuario: ${err}`)
            actions.clearUser()
        } finally {
            setIsLoading(false)
        }

    }

    const register = async (nombre: string, apellido: string, email: string, password: string, fecha: Date, telefono: string) => {

        setIsLoading(true)
        setError(null)
        try {

            const { data } = await apiClientServer.post('users/register', {
                nombre,
                apellido,
                email,
                password,
                fecha_nacimiento: format(fecha, 'yyyy-MM-dd'),
                telefono
            })

            const { error } = data

            if (error) {
                setError(` ${error}`)
            }

            router.push('/')
        } catch (error: any) {
            const msgError = (!error.response.data.detail.msg) ? error.response.data.detail[0].msg : error.response.data.detail.msg
            setError(`${msgError}`)
            actions.clearUser()
        } finally {
            setIsLoading(false)
        }


    }

    const login = async (email: string, password: string) => {
        setIsLoading(true)
        setError(null)
        try {

            const { data } = await apiClientServer.post('auth/login', {
                email,
                password
            })

            const { error } = data

            if (error) {
                setError(` ${error}`)
            }

            await fetchUser()
            router.push('/home')
        } catch (error: any) {
            setError(` ${error.response.data.detail.msg}`)
            actions.clearUser()
        } finally {
            setIsLoading(false)
        }
    }

    const logout = async () => {
        setIsLoading(true)
        setError(null)

        try {
            await apiClientServer.post('auth/logout')
            actions.clearUser()
        } catch (error) {
            setError(`Error al hacer logout del usuario: ${error}`)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        actions,
        user,
        isAuthenticated,
        isLoading,
        error,
        tryFetch,
        setTryFetch,
        fetchUser,
        login,
        register,
        logout

    }

}
