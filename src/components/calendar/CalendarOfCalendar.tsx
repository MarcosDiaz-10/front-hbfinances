'use client'
import { useState } from "react"
import { getYear, getMonth, subDays, setMonth, setYear } from "date-fns"
import { Select } from "@radix-ui/react-select"
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Calendar } from "../ui/calendar"

const daysGanacia = [
    subDays(new Date(), 2),
    subDays(new Date(), 4),
]

const daysBoth: Date[] = [
    subDays(new Date(), 1),

]

const daysPerdida = [
    subDays(new Date(), 2),
    subDays(new Date(), 3)
]
const startYear = getYear(new Date()) - 30
const endYear = getYear(new Date())

const months = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
]
const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => endYear - i)
export const CalendarOfCalendar = () => {


    const [date, setDate] = useState<Date | undefined>(new Date())

    const onMonthChange = (month: string) => {
        setDate(setMonth(date ?? new Date(), months.indexOf(month)))
    }
    const onYearChange = (year: string) => {
        setDate(setYear(date ?? new Date(), Number(year)))
    }


    return (
        <div className="w-full flex flex-col gap-4 justify-center items-center">
            <div className="flex w-[90%] justify-between">
                <Select
                    onValueChange={onMonthChange}
                    value={months[getMonth(date ?? new Date())]}

                >
                    <SelectTrigger className="w-[40%] bg-[#090d2b] text-white border-[#090d2b]">
                        <SelectValue placeholder='Months' className="text-white" />
                    </SelectTrigger>
                    <SelectContent className="h-full bg-[#090d2b] text-white border-[#090d2b]" >
                        {
                            months.map((month: string) => (
                                <SelectItem key={month} value={month}>{month}</SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
                <Select
                    onValueChange={onYearChange}
                    value={getYear(date ?? new Date()).toString()}
                >
                    <SelectTrigger className="w-[40%]  bg-[#090d2b] text-white border-[#090d2b]">
                        <SelectValue placeholder='years' />
                    </SelectTrigger>
                    <SelectContent className=" bg-[#090d2b] text-white border-[#090d2b]" >
                        {
                            years.map((year: number) => (
                                <SelectItem key={year} value={String(year)}>{year}</SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
            </div>
            <div className=" flex w-full items-center justify-center rounded-lg">

                <Calendar

                    mode="single"
                    modifiers={{
                        daysGanacia,
                        daysPerdida,
                        daysBoth
                    }}
                    modifiersClassNames={{
                        daysBoth: ' rounded-full bg-linear-to-bl from-red-400 via-red-200 via-40%  via-green-300 via-40% to-green-400 text-black ',
                        daysPerdida: ' rounded-full bg-red-400  text-red-800',
                        daysGanacia: ' rounded-full bg-green-400  text-green-900'

                    }}
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md w-[90%] bg-[#090d2b] text-white "
                    classNames={{

                        day: 'mx-1 w-full rounded-full ',
                        today: 'bg-[#181835] border-[#181835] rounded-full',


                    }}
                    month={date}
                    onMonthChange={val => setDate(val)}
                />
            </div>

        </div>
    )
}
