'use client'

import { useAuth } from "@/hooks/useAuth"
import { CircleUser } from "lucide-react"
import Logout from "../auth/Logout";

export default function NameComponent() {
    const { user } = useAuth();
    console.log({ user })
    return (
        <header className="flex items-center justify-between gap-3 px-3 py-2">
            <div className="flex items-center gap-3 ">
                <div><CircleUser size={35} color="white" /></div>
                <h1 className="font-bold text-lg py-2 text-white">Hola {user?.nombre}</h1>
            </div>
            <Logout />
        </header>
    )
}
