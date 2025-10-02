import { CardPresupuesto } from "./CardPresupuesto";

export default function Presupuestos() {
    return (
        <section className="flex justify-center mt-2">
            <CardPresupuesto
                title="Gastos"
                className="w-[95%] bg-[#090d2b] border-[#090d2b] text-white"
            />
        </section>
    )
}
