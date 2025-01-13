import { cn, News } from '@/lib/utils'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { EXAMPLES } from '@/lib/example'
import HomePageItemLong2 from './HomePageItemLong2';
import Divider from './Divider';

const DontMissTheseHomePage = ({ className, router, news }: { className?: string, router: AppRouterInstance, news: News[] }) => {

    //random 5
    const dontMiss = news.sort(() => Math.random() - 0.5).slice(0, 5);

    return (
        <div className={cn(className, 'flex flex-col gap-y-4')}>
            <h1 className='text-4xl font-extrabold mx-auto'>
                Don't Miss These
            </h1>
            {/* vertical */}
            <div className='flex flex-col gap-4 justify-between'>
                {
                    dontMiss.map((item, index) => (
                        <div key={index} className='flex flex-col gap-y-4'>
                            <HomePageItemLong2 key={index} heading={item.headingEng ?? item.headingHin ?? item.headingUrd ?? ""} category={item!.category!.name} readtime={item.readTime.toString()} author={item!.author!.name} image={item.pictureUrl ?? ""} router={router} uuid={item.id} />
                            <Divider />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DontMissTheseHomePage