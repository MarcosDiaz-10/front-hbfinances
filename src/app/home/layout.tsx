import Navbar from "@/components/home/Navbar";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div  >
            {children}
            <Navbar />
        </div>
    );
}