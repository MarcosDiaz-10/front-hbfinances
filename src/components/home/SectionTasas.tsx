
import { apiClientServer } from "@/services/api"
import Chart from "../Chart"


const getTasaBCV = async () => {
    try {

        const { data } = await apiClientServer.get('/scrapper/bcv')
        return data
    } catch (error) {
        return { msg: error, error: true, data: null }
    }
}
const getTasaParalelo = async () => {
    try {

        const { data } = await apiClientServer.get('/scrapper/binance')
        return data
    } catch (error) {
        return { msg: error, error: true, data: null }
    }
}

export default async function SectionTasas() {

    const { msg: msgBCV, data: dataBCV, error: errorBCV } = await getTasaBCV()
    const { msg: msgParalelo, data: dataParalelo, error: errorParalelo } = await getTasaParalelo()
    if (errorBCV || errorParalelo) {
        return <div className="text-red-500">No se pudo cargar las tasas.</div>;
    }
    return (
        <section
            className="grid grid-cols-2 mt-2 justify-items-center items-center"
        >
            <Chart
                title="Tasa Paralelo"
                content={`BS.${dataParalelo}`}
                className="bg-[#a530304a] text-red-200 text-left shadow-sm rounded-2xl pl-5 p-2  w-[90%]"
            />

            <Chart
                title="Tasa BCV"
                content={`BS.${dataBCV}`}
                className="bg-[#2d80316b]  text-green-200 shadow-sm rounded-2xl pl-5 p-2 w-[90%] "
            />
        </section>
    )
}
