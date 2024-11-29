import { cn } from "@/lib/utils"
import { LucideArrowRight } from "lucide-react"


const ViewMore = ({black}:{black:boolean}) => {
    return (
        <a href="/" className='group flex flex-row justify-between items-center gap-x-4 group'>
            <p className={cn('group-hover:font-bold group-hover:text-red-600',black?'text-black':'text-white')}>
                View More
            </p>
            <LucideArrowRight className={cn(black?'text-black':'text-white','group-hover:text-red-600')} />
        </a>
    )
}

export default ViewMore