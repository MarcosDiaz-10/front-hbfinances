import { CalendarOfCalendar } from "@/components/calendar/CalendarOfCalendar";
import UltimasTransacciones from "@/components/UltimasTransacciones";

export default function CalendarPage() {
    return (
        <>
            <h1 className="text-4xl ml-2 mt-2 text-white">Calendario</h1>
            <section className="flex justify-center items-center mt-5">
                <CalendarOfCalendar />
            </section>
            <section className="mt-5 px-2 pb-4">
                <UltimasTransacciones />
            </section>
        </>
    )
}
