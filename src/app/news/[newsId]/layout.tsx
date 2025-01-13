'use client'

import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { ReactNode } from "react"
import Latest from "./Latest"
import { useRouter } from "next/navigation"

const layout = ({ children }: { children: ReactNode }) => {

    const router = useRouter()

    return (
        <MaxWidthWrapper className="flex md:flex-row flex-col justify-between my-4 gap-y-4 gap-x-4">
            {children}
            <Latest className="md:w-[30%]" router={router}/>
        </MaxWidthWrapper>
    )
}

export default layout