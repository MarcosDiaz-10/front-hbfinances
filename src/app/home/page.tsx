import Chart from "@/components/Chart";
import { ChartDemo } from "@/components/home/ChartDemo";
import NameComponent from "@/components/home/NameComponent";
import SectionTasas from "@/components/home/SectionTasas";
import { Button } from "@/components/ui/button";
import UltimasTransacciones from "@/components/UltimasTransacciones";
import { CircleUser, Minus, Plus } from "lucide-react";

export default function HomeApp() {
    return (
        <div >
            <main>

                <NameComponent />
                <SectionTasas />
                <section className="flex mt-5 w-full justify-center px-2">
                    <ChartDemo />
                </section>

                <section
                    className="grid grid-cols-2 mt-5 justify-items-center items-center"
                >
                    <Button className="bg-[#2d80316b] text-green-200 p-5 text-sm ">
                        <Plus
                            style={{
                                width: "30px",
                                height: "25px",
                            }}
                            className="rounded-full"
                            color="#b9f8cf"
                            strokeWidth={2}
                            size={30}
                        /> Añadir Ingreso
                    </Button>
                    <Button className="bg-[#a530304a] text-red-200 p-5 text-sm">
                        <Minus
                            style={{
                                width: "24px",
                                height: "25px",
                            }}
                            className="rounded-full"
                            color="oklch(88.5% 0.062 18.334)"
                            size={20}
                        /> Añadir Gasto
                    </Button>
                </section>
                <section className="mt-2 flex items-center justify-center px-2 pb-2">
                    <UltimasTransacciones />
                </section>
            </main>
        </div>

    );
}
