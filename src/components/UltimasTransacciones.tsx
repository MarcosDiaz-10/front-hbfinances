import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


export default function UltimasTransacciones() {
    return (
        <Card className="bg-[#090d2b] w-full sm:w-[95%] mx-auto mt-5 border-none">
            <CardHeader>
                <CardTitle className="text-lg text-white font-bold">
                    Últimas Transacciones
                </CardTitle>
                <hr />
            </CardHeader>
            <CardContent>
                <ul>
                    <li>
                        <div className="flex justify-between">
                            <div>
                                <p className="font-bold text-white">Supermercado</p>
                                <p className="text-sm text-gray-500">21 de abr</p>
                            </div>
                            <p className="font-bold text-white">-100</p>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p className="font-bold text-white">Supermercado</p>
                                <p className="text-sm text-gray-500">21 de abr</p>
                            </div>
                            <p className="font-bold text-white">-100</p>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p className="font-bold text-white">Supermercado</p>
                                <p className="text-sm text-gray-500">21 de abr</p>
                            </div>
                            <p className="font-bold text-white">-100</p>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p className="font-bold text-white">Supermercado</p>
                                <p className="text-sm text-gray-500">21 de abr</p>
                            </div>
                            <p className="font-bold text-white">-100</p>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p className="font-bold text-white">Supermercado</p>
                                <p className="text-sm text-gray-500">21 de abr</p>
                            </div>
                            <p className="font-bold text-white">-100</p>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p className="font-bold text-white">Supermercado</p>
                                <p className="text-sm text-gray-500">21 de abr</p>
                            </div>
                            <p className="font-bold text-white">-100</p>
                        </div>
                    </li>
                </ul>
            </CardContent>
        </Card>

    )
}

