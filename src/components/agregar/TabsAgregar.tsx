
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FormIngreso from "./FormIngreso"

export default function TabsAgregar() {
    return (
        <Tabs defaultValue="Ingreso" className="flex flex-col items-center w-[95%] mt-5">
            <TabsList className="grid w-full grid-cols-2 bg-[#090d2b] gap-4">
                <TabsTrigger value="Ingreso" className="text-white data-[state=active]:bg-[#1d1d3a]">Ingreso</TabsTrigger>
                <TabsTrigger value="Gasto" className="text-white data-[state=active]:bg-[#1d1d3a]">Gasto</TabsTrigger>
            </TabsList>
            <div className="w-full mt-4">
                <TabsContent value="Ingreso">
                    <FormIngreso />
                </TabsContent>
                <TabsContent value="Gasto">
                    <FormIngreso />
                </TabsContent>
            </div>
        </Tabs>
    )
}
