"use client"

import ConnectWallet from "@/components/auth/ConnectWallet";
import BrandLogo from "@/components/shared/brand-logo";

export default function Login() {
    return (
        <div className="bg-[#0B101B] dashboard min-h-screen bg-center flex flex-col gap-4 items-center justify-center">
            <BrandLogo />
            <ConnectWallet />
        </div>
    );
}