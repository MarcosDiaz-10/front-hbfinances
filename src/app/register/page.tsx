import RegisterForm from "@/components/auth/RegisterForm";
import { Landmark } from "lucide-react";

export default function PageRegister() {
    return (
        <div className="flex flex-col items-center justify-center py-6">
            <header className="flex flex-col items-center justify-center gap-2 py-2" >
                <div className="bg-white/10 p-3 rounded-lg">
                    <Landmark size={38} />
                </div>
                <h1 className="text-xl font-bold">Bienvenido a HBfinances</h1>
            </header>
            <section className="w-[90%] mb-4 mt-2">
                <RegisterForm />
            </section>
        </div>
    )
}
