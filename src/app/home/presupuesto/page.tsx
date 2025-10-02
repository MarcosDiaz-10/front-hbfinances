import Chart from "@/components/Chart";
import Presupuestos from "@/components/presupuesto/Presupuestos";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function PagePresupuestos() {
    return (
        <>

            <header>
                <h1 className="font-bold text-white text-2xl pl-4 py-2">Presupuestos</h1>
            </header>
            <section className="grid grid-cols-2 justify-items-center gap-1 mt-3">
                <Chart
                    title="Total Bolivares"
                    content="BS.1200"
                    className="bg-[#2d80316b] text-green-200 text-left  rounded-xl pl-5 p-2  w-[90%]"
                />
                <Chart
                    title="Total Dolares"
                    content="$200"
                    className="bg-[#2d80316b] text-green-200 pl-5 p-2  w-[90%] rounded-xl "
                />
            </section>
            <h2 className="font-bold text-white text-2xl py-2 pl-4 mt-4">
                Mis presupuestos
            </h2>
            <Presupuestos />

            <section className="sticky bottom-30 left-0 right-0 flex justify-center mt-5">
                <Button className="w-[95%] bg-[#090d2b] text-white">
                    <Plus color="white" /> Crear Presupuesto</Button>

            </section>
        </>
    )
}
