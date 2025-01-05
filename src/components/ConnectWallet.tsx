// ignore this for now

"use client"

import { useConnect } from "@/utils/wallet";

export default function ConnectWallet () {
    const {authenticate} = useConnect();
    return (
        <button onClick={() => { authenticate() }} className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 mt-10">Connect wallet</button>
    );
}