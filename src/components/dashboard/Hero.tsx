"use client"
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { shortenURLFormDef, shortenURLValidationSchema } from "@/models/validations/shorten-url.validation";
import { GoLink } from "react-icons/go";
import ToggleSwitch from "../ui/ToggleSwitch";
import { useState } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

export const Hero = () => {
    const form = useForm<shortenURLFormDef>({
        resolver: zodResolver(shortenURLValidationSchema),
        defaultValues: {
            url: "",
        },
    })

    function onSubmit(values: shortenURLFormDef) {
        console.log(values)
    }
    const [isEnabled, setIsEnabled] = useState()
    return (
        <div className="mx-auto w-fit mt-[130px]">
            <h1 className="bg-[radial-gradient(#EB568E_0%,#144EE3_100%)] bg-clip-text text-transparent text-[60px]/[80px] font-extrabold">Shorten Your Loooong Links :&#41;</h1>
            <p className="text-base font-light text-[#C9CED6] mt-5 text-center">Choppr is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="relative text-[#C9CED6] mt-[46px]">
                    <GoLink className="absolute top-[26px]  left-[25px] my-auto" />
                    <FormField
                        control={form.control}
                        name="url"

                        render={({ field }) => (
                            <FormItem >
                                <FormControl>
                                    <Input placeholder="Enter the link here" {...field} className="border-4 border-[#353C4A] py-[21px] px-[25px] pl-[60px] text-[16px]/[28px] h-full rounded-[48px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="absolute right-[7.5px] top-2  hover:drop-shadow-[10px_9px_22px_rgba(20,78,227,0.38)] px-[25px] h-[50px] w-fit text-white text-base font-semibold rounded-[48px] bg-[#144EE3]" >Shorten Now!</Button>
                </form>
            </Form>

            <ToggleSwitch isEnabled={isEnabled} onToggle={setIsEnabled} label="Auto Paste from Clipboard " />
            <div className="flex items-center gap-2 justify-center">
                <p className="font-light text-[14px] text-[#C9CED6] text-center">You can create <span className="text-[#EB568E] font-bold">05</span> more links. Register  Now to enjoy Unlimited usage</p>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <FaRegCircleQuestion fill="white" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Chief please sign up </p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    );
}