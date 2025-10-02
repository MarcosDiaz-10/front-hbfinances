'use client'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Calendar } from "../ui/calendar"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"
import { Input } from "../ui/input"

const formSchema = z.object({
    monto: z.number().min(1, { message: "El monto debe ser mayor a 0" }),
    montoEn: z.string(),
    descripcion: z.string(),
    medioFisico: z.string(),
    presupuesto: z.array(z.string()),
    presupuestoCant: z.number(),
    categoria: z.array(z.string()),
    fecha: z.date(),
})

export default function FormIngreso() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            monto: 0,
            montoEn: "bs",
            descripcion: "",
            medioFisico: "efectivo",
            presupuesto: [],
            presupuestoCant: 0,
            categoria: [],
            fecha: new Date(),
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log('submited')
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <div className="flex items-center justify-between gap-2">


                    <div className=" w-[70%] ">

                        <FormField
                            control={form.control}
                            name="monto"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Monto</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            className="bg-[#090d2b] border-none text-white" placeholder="Monto"
                                            {...field}
                                            onChange={(e) => {
                                                field.onChange(Number(e.target.value))
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="w-[30%]">

                        <FormField
                            control={form.control}
                            name="montoEn"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Moneda</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className="border-none w-full  bg-[#090d2b] text-white">
                                                <SelectValue className="text-white" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#090d2b] border-none text-white">
                                                <SelectItem value="bs" className="text-white">BS</SelectItem>
                                                <SelectItem value="usd" className="text-white">USD</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <FormField
                    control={form.control}
                    name="descripcion"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white">Descripción</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    className="bg-[#090d2b] border-none text-white pb-20 pt-5"
                                    placeholder="Descripción"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex items-center justify-between gap-2">
                    <div className="w-[55%]">

                        <FormField
                            control={form.control}
                            name="medioFisico"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Medio Físico</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className="border-none w-full bg-[#090d2b] text-white">
                                                <SelectValue className="text-white" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#090d2b] border-none text-white">
                                                <SelectItem value="efectivo" className="text-white">Efectivo</SelectItem>
                                                <SelectItem value="tarjeta" className="text-white">Tarjeta</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="w-[40%]">

                        <FormField
                            control={form.control}
                            name="fecha"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel className="text-white">Fecha</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full pl-3 text-left font-normal bg-[#090d2b] border-none text-white ",
                                                        !field.value && "text-white"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span className="text-white">Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0 border-none bg-[#090d2b] rounded-lg" align="start">
                                            <Calendar

                                                mode="single"
                                                className="bg-[#090d2b]  border-none rounded-lg text-white"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date > new Date() || date < new Date("1900-01-01")
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <FormField
                    control={form.control}
                    name="presupuesto"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel className="text-white text-xl">Presupuesto</FormLabel>
                            <FormControl>
                                <ToggleGroup type="multiple" className="flex bg-azulClaroApp w-full gap-2" onValueChange={field.onChange} value={field.value}>
                                    <ToggleGroupItem value="a" className="border-[#090d2b] border  hover:bg-[#090d2b] rounded-lg text-white justify-start">Gasto</ToggleGroupItem>
                                    <ToggleGroupItem value="b" className="border-[#090d2b] border hover:bg-[#090d2b] rounded-lg text-white justify-start">Ahorro</ToggleGroupItem>
                                    <ToggleGroupItem value="c" className="border-[#090d2b] border hover:bg-[#090d2b]oApp rounded-lg text-white justify-start">Emergencia</ToggleGroupItem>
                                </ToggleGroup>

                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="categoria"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel className="text-white text-xl">Categoria</FormLabel>
                            <FormControl>
                                <ToggleGroup type="multiple" className="flex bg-azulClaroApp w-full gap-2" onValueChange={field.onChange} value={field.value}>
                                    <ToggleGroupItem value="a" className="border-[#090d2b] border  hover:bg-[#090d2b] rounded-lg text-white justify-start">Gasto</ToggleGroupItem>
                                    <ToggleGroupItem value="b" className="border-[#090d2b] border hover:bg-[#090d2b] rounded-lg text-white justify-start">Ahorro</ToggleGroupItem>
                                    <ToggleGroupItem value="c" className="border-[#090d2b] border hover:bg-[#090d2b] rounded-lg text-white justify-start">Emergencia</ToggleGroupItem>
                                </ToggleGroup>

                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    className="bg-[#090d2b] mt-5 text-white"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </Form >
    )
}