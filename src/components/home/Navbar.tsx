'use client'
import clsx from "clsx";
import {
    Calendar,
    CalendarDays,
    CreditCard,
    House,
    Plus,
    Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const navLinks = [
    {
        name: "Inicio",
        href: "/home",
        icon: House,
        iconsProps: {},
    },
    {
        name: "Presup",
        href: "/home/presupuesto",
        icon: CreditCard,
        iconsProps: {},
    },
    {
        name: "",
        href: "/home/agregar",
        icon: Plus,
        iconsProps: {
            size: 50,
        },
    },
    {
        name: "Calendario",
        href: "/home/calendar",
        icon: CalendarDays,
        iconProps: {},
    },
    {
        name: "Totales",
        href: "/home/totales",
        icon: Wallet,
        iconProps: {},
    },
];

export default function Navbar() {
    const pathname = usePathname()
    return (
        <nav
            className="fixed bottom-0 left-0 right-0 flex mt-10 items-center bg-[#151535] justify-center text-white rounded-sm border-t border-[#101333] px-2 py-5 sm:sticky"
        >
            <ul className="flex justify-between w-full">
                {
                    navLinks.map((link, i) => (
                        <li key={i}>
                            <Link
                                href={link.href}
                                className={clsx(
                                    "flex flex-col justify-center items-center ml-3 p-1 rounded-md transition duration-300 ease-in-out",
                                    // Clases para el color del texto y hover, aplicadas al <a>
                                    // Clases para el estado activo, aplicadas al <a>
                                    {
                                        " text-[#383881] font-bold":
                                            pathname === link.href,
                                    },
                                )}
                            >
                                {link.icon && (
                                    <Fragment>
                                        <link.icon
                                            className={clsx(
                                                {
                                                    "text-[#383881]":
                                                        pathname === link.href,
                                                },
                                            )}
                                            {...link.iconProps}
                                        />
                                    </Fragment>
                                )}
                                {link.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>

    )
}





