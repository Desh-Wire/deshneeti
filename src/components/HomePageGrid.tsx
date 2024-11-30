import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { EXAMPLES } from "@/lib/example"
import HomePageGridItem from "./HomePageGridItem";
import OpinionsBoxHomePage from "./OpinionsBoxHomePage";
import DontMissTheseHomePage from "./DontMissTheseHomePage";
import { cn } from "@/lib/utils";


const HomePageGrid = ({ className, router }: { className?: string, router: AppRouterInstance }) => {

    const list1 = EXAMPLES.sort(() => Math.random() - 0.5).slice(0, 3);
    const list2 = EXAMPLES.sort(() => Math.random() - 0.5).slice(0, 3);
    const list3 = EXAMPLES.sort(() => Math.random() - 0.5).slice(0, 3);
    const list4 = EXAMPLES.sort(() => Math.random() - 0.5).slice(0, 3);
    const lists = [list1, list2, list3, list4];


    return (
        <div className={cn('flex flex-row gap-x-4',className)}>
            {/* grid */}
            <div className="w-[65%] grid grid-rows-2 grid-cols-2 gap-8 relative">
                {/* Vertical Line */}
                <div className="absolute top-0 bottom-0 left-1/2 w-[3px] bg-[#ece2c8]"></div>
                {/* Horizontal Line */}
                <div className="absolute left-0 right-0 top-1/2 h-[3px] bg-[#ece2c8]"></div>
                {
                    lists.map((list, index) => (
                        <HomePageGridItem key={index} router={router} heading={`Category ${index + 1}`} news={list} />
                    ))
                }
            </div>
            {/* rightmost columnn */}
            <div className="w-[35%] flex flex-col gap-y-4">
                <OpinionsBoxHomePage router={router} />
                <DontMissTheseHomePage router={router} />
            </div>
        </div>
    )
}

export default HomePageGrid