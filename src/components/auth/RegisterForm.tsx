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
import { CalendarIcon, Chrome, Fingerprint } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import clsx from 'clsx';
import { format } from 'date-fns';
import { Calendar } from '../ui/calendar';
import { Toaster } from '../ui/sonner';
import { toast } from 'sonner';
import Link from 'next/link';

const formSchema = z.object({
    nombre: z.string(),
    apellido: z.string(),
    email: z.email(),
    fechaNacimiento: z.date(),
    password: z.string().min(5),
    telefono: z.string().min(10)
})

export default function RegisterForm() {
    const { register, error } = useAuth()
    const [isLoading, setisLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
            nombre: '',
            fechaNacimiento: new Date(),
            apellido: '',
            telefono: ''
        }
    })

    useEffect(() => {
        if (error) console.log(error)
    }, [error])

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setisLoading(true)
        const { email, password, apellido, nombre, fechaNacimiento, telefono } = values
        try {
            await register(nombre, apellido, email, password, fechaNacimiento, telefono)
            toast('Usuario Creado Exitosamente')
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
                        <div className='flex justify-between gap-4'>
                            <FormField
                                control={form.control}
                                name='nombre'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-white'>Nombre</FormLabel>
                                        <FormControl>
                                            <Input {...field} type='text' className='bg-white/10 border-white/10 text-white' placeholder='Marcos' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name='apellido'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-white'>Apellido</FormLabel>
                                        <FormControl>
                                            <Input {...field} type='text' className='bg-white/10 border-white/10 text-white' placeholder='Diaz' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
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
                        <FormField
                            control={form.control}
                            name="fechaNacimiento"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel className='text-white'>Fecha de Nacimiento</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={clsx(
                                                        "w-full pl-3 text-left font-normal bg-white/10 border-white/10 text-white",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Selecciona Una fecha</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0 " align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date > new Date() || date < new Date("1900-01-01")
                                                }

                                                captionLayout="dropdown"
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormDescription>
                                        Your date of birth is used to calculate your age.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='telefono'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-white'>Telefono</FormLabel>
                                    <FormControl>
                                        <Input {...field} className='bg-white/10 border-white/10 text-white' placeholder='4242819364' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='flex justify-end w-full text-white'>
                            <span className='text-sm'>¿Olvidaste tu contraseña?</span>
                        </div>
                        <Button className='bg-white text-black' disabled={isLoading}>{(isLoading) ? 'Cargando...' : 'Registrarse'}</Button>
                    </form>
                </Form>
                <Toaster />
                <div className='flex justify-center items-center pt-4'>
                    <span className='text-sm text-white'> <Link href='/' className='underline'>Volver al Iniciar Sesion Aquí</Link> </span>
                </div>
            </CardContent>
        </Card>
    )
}
