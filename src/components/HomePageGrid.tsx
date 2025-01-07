import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { EXAMPLES } from "@/lib/example"
import HomePageGridItem from "./HomePageGridItem";
import OpinionsBoxHomePage from "./OpinionsBoxHomePage";
import DontMissTheseHomePage from "./DontMissTheseHomePage";
import { cn, News } from "@/lib/utils";


const HomePageGrid = ({ className, router,news }: { className?: string, router: AppRouterInstance, news:News[] }) => {

    const Politics = news.filter((item) => item.category.name === 'Politics' || item.category.name === 'politics').slice(0, Math.min(3, news.length));
    const Law = news.filter((item) => item.category.name === 'Law' || item.category.name === 'law').slice(0, Math.min(3, news.length));
    const Crime = news.filter((item) => item.category.name === 'Crime' || item.category.name === 'crime').slice(0, Math.min(3, news.length));
    const Elections = news.filter((item) => item.category.name === 'Elections' || item.category.name === 'elections').slice(0, Math.min(3, news.length));

    const lists = [Politics, Law, Crime, Elections];

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
                        <HomePageGridItem key={index} router={router} news={list} />
                    ))
                }
            </div>
            {/* rightmost columnn */}
            <div className="w-[35%] flex flex-col gap-y-4">
                <OpinionsBoxHomePage router={router} news={news}/>
                <DontMissTheseHomePage router={router} news={news}/>
            </div>
        </div>
    )
}

export default HomePageGrid