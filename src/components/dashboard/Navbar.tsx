import Link from "next/link";
import BrandLogo from "../shared/brand-logo";
import { CiLogin } from "react-icons/ci";

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between container mx-auto pt-[40px]">
            <BrandLogo />
            <ul className="flex items-center gap-5">
                <li>
                    <Link href="/auth/login" className="py-[21px] px-[25px] h-full w-fit items-center border text-white text-base font-semibold border-[#353C4A] rounded-[48px] bg-[#181E29] flex gap-3">
                        Login
                        <CiLogin />
                    </Link>
                </li>
                <li>
                <Link href="/auth/register" className="hover:drop-shadow-[10px_9px_22px_rgba(20,78,227,0.38)] py-[21px] px-[25px] h-full w-fit text-white text-base font-semibold rounded-[48px] bg-[#144EE3]">
                        Register Now
                    </Link>
                </li>
            </ul>
        </nav>
    );
}