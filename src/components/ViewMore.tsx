import { cn } from "@/lib/utils"
import { LucideArrowRight } from "lucide-react"


const ViewMore = ({black,className}:{black:boolean,className?:string}) => {
    return (
        <a href="/" className={cn('group flex flex-row items-center gap-x-4 group',className)}>
            <p className={cn('group-hover:font-bold group-hover:text-red-600',black?'text-black':'text-white')}>
                View More
            </p>
            <LucideArrowRight className={cn(black?'text-black':'text-white','group-hover:text-red-600')} />
        </a>
    )
}

export default ViewMore