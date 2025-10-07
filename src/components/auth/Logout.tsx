'use client'
import { useRouter } from "next/navigation"
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function Logout() {
    const { logout } = useAuth()
    const router = useRouter();
    const onClick = async () => {
        try {
            await logout()
        } catch (error) {
            console.error(error)
        } finally {
            router.push('/')
        }
    }
    return (
        <Button className="bg-white/10 p-4" onClick={onClick}><LogOut /></Button>
    )
}
