'use client'
import z from 'zod'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { Chrome, Fingerprint } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

const formSchema = z.object({
    email: z.email(),
    password: z.string().min(5)
})

export default function LoginForm() {
    const { login, error } = useAuth()
    const [isLoading, setisLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    useEffect(() => {
        if (error) console.log(error)
    }, [error])

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setisLoading(true)
        const { email, password } = values
        try {
            await login(email, password)

        } catch (error) {
            console.error(error)
        } finally {
            setisLoading(false)
        }
    }



    return (
        <Card className="bg-[#090d2b] border-[#090d2b]">
            <CardContent >

                {
                    error && <div className='bg-red-400 my-2 p-2 text-red-900 rounded-lg'>
                        Error: {error}
                    </div>
                }

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-white'>Correo Electrónico</FormLabel>
                                    <FormControl>
                                        <Input {...field} type='email' className='bg-white/10 border-white/10 text-white' placeholder='example@example.com' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-white'>Contraseña</FormLabel>
                                    <FormControl>
                                        <Input {...field} className='bg-white/10 border-white/10 text-white' placeholder='********' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='flex justify-end w-full text-white'>
                            <span className='text-sm'>¿Olvidaste tu contraseña?</span>
                        </div>
                        <Button className='bg-white text-black' disabled={isLoading}>{(isLoading) ? 'Cargando...' : 'Iniciar Sesion'}</Button>
                    </form>
                </Form>
                <div className="mt-6">
                    <div className="flex items-center justify-center mb-6">
                        <div className="flex-1 h-px bg-white/20"></div>
                        <span className="px-4 text-white/60 text-sm">o continúa con</span>
                        <div className="flex-1 h-px bg-white/20"></div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center mb-4'>
                    <Button className='w-full flex items-center justify-center bg-white text-black'><Chrome />Iniciar Sesión con Google</Button>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <Button className='w-full flex items-center justify-center bg-white/10 '><Fingerprint />Iniciar Sesión con Huella</Button>
                </div>
                <div className='flex justify-center items-center pt-4'>
                    <span className='text-sm text-white'>¿No tienes cuenta? <Link href='/register' className='underline'>Registrate Aquí</Link> </span>
                </div>
            </CardContent>
        </Card>
    )
}
