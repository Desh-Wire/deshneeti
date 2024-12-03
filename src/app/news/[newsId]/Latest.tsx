import { cn } from "@/lib/utils"
import { EXAMPLES } from "@/lib/example"
import HomePageItemLong2 from "@/components/HomePageItemLong2";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const Latest = ({ className, router }: { className?: string, router: AppRouterInstance }) => {

    const latest = EXAMPLES.sort(() => Math.random() - 0.5).slice(0, 6);

    return (
        <div className={cn(className,'flex flex-col gap-y-4')}>

            <p className="font-bold text-3xl">
                Latest
            </p>

            {/* vertical */}
            <div className='flex flex-col gap-4 justify-between'>
                {
                    latest.map((item, index) => (
                        <HomePageItemLong2 key={index} heading={item.Title} category={item.Category} readtime={item.ReadTime.toString()} author={item.Author} image={item.ImagePath} router={router} uuid={item.uuid} />
                    ))
                }
            </div>
        </div>
    )
}

export default Latest