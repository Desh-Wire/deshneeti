import { cn } from '@/lib/utils'
import { EXAMPLES } from '@/lib/example'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import HomePageItemSmall2 from './HomePageItemSmall2'
import HomePageItemLong2 from './HomePageItemLong2'
import ViewMore from './ViewMore'

const HotTopic = ({ heading,className,router }: { heading: string,className?:string,router: AppRouterInstance}) => {

    //random 2
    const horizontalNews = EXAMPLES.sort(() => Math.random() - 0.5).slice(0, 2);
    //random 3
    const verticalNews = EXAMPLES.sort(() => Math.random() - 0.5).slice(0, 3);

    return (
        <div className={cn('flex flex-col gap-y-4',className)}>

            {/* Heading and view more div */}
            <div className='flex flex-row justify-between items-center'>
                <h1 className='text-4xl font-extrabold'>
                    {heading}
                </h1>
                <ViewMore black={true}/>
            </div>

            <div className='w-full h-1 bg-red-700'/>

            {/* content */}
            <div className='flex flex-row gap-4'>
                {/* horizontal */}
                <div className='flex flex-row w-[70%] gap-4 items-stretch justify-items-stretch'>
                    {
                        horizontalNews.map((item,index) => (
                            <HomePageItemSmall2 key={index} heading={item.Title} category={item.Category} readtime={item.ReadTime.toString()} author={item.Author} image={item.ImagePath} router={router} uuid={item.uuid}/>
                        ))
                    }
                </div>
                {/* vertical */}
                <div className='flex flex-col w-[30%] gap-4 justify-between'>
                    {
                        verticalNews.map((item,index) => (
                            <HomePageItemLong2 key={index} heading={item.Title} category={item.Category} readtime={item.ReadTime.toString()} author={item.Author} image={item.ImagePath} router={router} uuid={item.uuid}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HotTopic