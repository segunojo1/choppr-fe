import { Hero } from "@/components/dashboard/Hero";
import { Navbar } from "@/components/dashboard/Navbar";

export default function Dashboard() {
    return (
        <div className="bg-[#0B101B] dashboard h-screen bg-center">
            <Navbar />
            <main>
                <Hero />
            </main>
        </div>
    );
}