import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Navbar from "@/components/home/Navbar";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ProtectedRoute>

            <div  >
                {children}
                <Navbar />
            </div>
        </ProtectedRoute>
    );
}