'use client'

import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


export default function ProtectedRoute({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const { fetchUser, isAuthenticated, isLoading, tryFetch, setTryFetch } = useAuth()
    const router = useRouter()
    useEffect(() => {

        fetchUser()
        setTryFetch(true)
    }, [])


    useEffect(() => {


        if (isLoading || !tryFetch) {
            return;
        }
        console.log({ isAuthenticated, isLoading, tryFetch })
        if (!isAuthenticated) {
            router.push('/')
            setTryFetch(false)

        }
        setTryFetch(false)
    }, [isAuthenticated, tryFetch, isLoading, router])

    if (isLoading || !isAuthenticated) {
        return <> Cargando Sesion... </>
    }

    return (<>{children}</>)
}
