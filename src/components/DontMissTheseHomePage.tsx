import { cn } from '@/lib/utils'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { EXAMPLES } from '@/lib/example'
import HomePageItemLong2 from './HomePageItemLong2';
import Divider from './Divider';

const DontMissTheseHomePage = ({ className, router }: { className?: string, router: AppRouterInstance }) => {

    //random 5
    const dontMiss = EXAMPLES.sort(() => Math.random() - 0.5).slice(0, 5);

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
                            <HomePageItemLong2 key={index} heading={item.Title} category={item.Category} readtime={item.ReadTime.toString()} author={item.Author} image={item.ImagePath} router={router} />
                            <Divider />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DontMissTheseHomePage