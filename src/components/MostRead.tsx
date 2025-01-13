import { cn, News } from '@/lib/utils'
import { EXAMPLES } from '@/lib/example'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import HomePageItemSmall2 from './HomePageItemSmall2'
import HomePageItemLong2 from './HomePageItemLong2'
import ViewMore from './ViewMore'
import MaxWidthWrapper from './MaxWidthWrapper'

const MostRead = ({ className, router, news }: { className?: string, router: AppRouterInstance, news: News[] }) => {

    const sortedNews = news.sort((a, b) => (b?.views ?? 0) - (a?.views ?? 0));
    const horizontalNews = sortedNews.slice(0, Math.min(2, sortedNews.length));
    const verticalNews = sortedNews.slice(2, Math.min(5, sortedNews.length));

    return (
        <div className={cn('bg-[#ece2c8] py-4', className)}>
            <MaxWidthWrapper>
                <div className={cn('flex flex-col gap-y-4')}>

                    {/* Heading and view more div */}
                    <div className='flex flex-row justify-between items-center'>
                        <h1 className='text-4xl font-extrabold'>
                            Most Read
                        </h1>
                        {/* <ViewMore black={true}/> */}
                    </div>

                    <div className='w-full h-1 bg-red-700' />

                    {/* content */}
                    {sortedNews.length === 0 ? <div className="flex items-center justify-center h-96 text-white text-xl font-semibold">
                        No News Found
                    </div> :
                        <div className='flex md:flex-row flex-col gap-4'>
                            {/* horizontal */}
                            {horizontalNews.length === 0 ? <div className="flex items-center justify-center h-96 text-white text-xl font-semibold">
                                No News Found
                            </div> :
                                <div className='flex md:flex-row flex-col md:w-[70%] gap-4 items-stretch justify-items-stretch'>
                                    {
                                        horizontalNews.map((item, index) => (
                                            <HomePageItemSmall2 key={index} heading={item.headingEng ?? item.headingHin ?? item.headingUrd ?? ""} category={item!.category!.name} readtime={item.readTime.toString()} author={item!.author!.name} image={item.pictureUrl ?? ""} router={router} uuid={item.id} />
                                        ))
                                    }
                                </div>}
                            {/* vertical */}
                            {verticalNews.length === 0 ? <div className="flex items-center justify-center h-96 text-white text-xl font-semibold">
                                No News Found
                            </div> :
                                <div className='flex flex-col md:w-[30%] gap-4 justify-between'>
                                    {
                                        verticalNews.map((item, index) => (
                                            <HomePageItemLong2 key={index} heading={item.headingEng ?? item.headingHin ?? item.headingUrd ?? ""} category={item!.category!.name} readtime={item.readTime.toString()} author={item!.author!.name} image={item.pictureUrl ?? ""} router={router} uuid={item.id} />
                                        ))
                                    }
                                </div>}
                        </div>}
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default MostRead