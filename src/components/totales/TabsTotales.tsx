'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import clsx from "clsx"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { Card, CardContent } from "../ui/card"

const mediosFisicos = [
    {
        id: "Bc",
        nombre: 'Banco',
    },
    {
        id: 'T',
        nombre: 'Totales',
    },
    {
        id: "Bn",
        nombre: 'Binace',
    },
    {
        id: 'Ef',
        nombre: 'Efectivo',

    },
    {
        id: 'Zl',
        nombre: 'Zinli',
    }
]


export default function TabsTotales() {
    const [medioSelected, setMedioSelected] = useState(mediosFisicos[0])
    return (
        <div className="flex flex-col items-center w-[95%] mt-5">

            <Carousel className=" flex items-center justify-center w-[75%] text-white ">
                <CarouselPrevious className="bg-[#090d2b] border-[#090d2b]" />

                <CarouselContent className="-ml-1 w-full ">
                    {
                        mediosFisicos.map((medio) => (
                            <CarouselItem key={medio.nombre} className={`basis-1/3`} >
                                <Card className={clsx(`bg-azulClaroApp flex items-center border-[#090d2b] py-1  `, (medio.id === medioSelected.id) && 'bg-[#090d2b]')}>
                                    <CardContent className="">
                                        <div onClick={() => setMedioSelected(medio)} className={`text-white   `}>{medio.nombre}</div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>

                        ))
                    }

                </CarouselContent>
                <CarouselNext className="bg-[#090d2b] border-[#090d2b]" />
            </Carousel>



            <section className=" w-full flex mt-5 justify-center px-2">
                <div className="bg-[#090d2b] h-[200px] w-full rounded-2xl text-white">
                    Grafico
                </div>
            </section>
            <section className=" w-full flex mt-5 justify-center px-2">
                <div className="bg-[#090d2b] h-[200px] w-full rounded-2xl text-white">
                    Grafico
                </div>
            </section>
            <section className=" w-full flex mt-5 justify-center px-2">
                <div className="bg-[#090d2b] h-[200px] w-full rounded-2xl text-white">
                    Grafico
                </div>
            </section>
            <section className=" w-full flex mt-5 justify-center px-2">
                <div className="bg-[#090d2b] h-[200px] w-full rounded-2xl text-white">
                    Grafico
                </div>
            </section>


        </ div>
    )
}
