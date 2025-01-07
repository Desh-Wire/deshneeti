import { cn, News } from '@/lib/utils'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { EXAMPLES } from '@/lib/example'
import AuthorItem from './AuthorItemHomePage';

const OpinionsBoxHomePage = ({ className, router, news }: { className?: string, router: AppRouterInstance, news: News[] }) => {

    const opinions = news.filter((item) => item.category.name === 'Opinion' || item.category.name === 'opinion').slice(0, Math.min(5, news.length));

    return (
        <div className={cn(className, 'flex flex-col gap-y-4 bg-[#ece2c8] p-4 h-[50%] justify-between')}>
            <h1 className='text-4xl font-extrabold mx-auto'>
                Opinions
            </h1>
            {opinions.length === 0 ? <div className='mx-auto my-auto'>
                No Opinions Found
            </div> :
                <div className='w-full flex flex-col gap-y-2'>
                {
                    opinions.map((item, index) => (
                        <div key={index} className='flex flex-col gap-y-2'>
                            <AuthorItem key={index} author={item.author.name} title={item.headingEng ?? item.headingHin ?? item.headingUrd ?? ""} router={router} uuid={item.id} image={item.author.photoUrl} />
                            <div className='w-full h-[4px] bg-[#ddcea9]' />
                        </div>
                    ))
                }
            </div>}
            <div className='self-end'>
                <button className='w-full py-2 bg-red-700 text-white font-bold rounded-md p-4 hover:bg-white hover:text-red-700' onClick={() => router.push('/voices/opinion')}>
                    View More
                </button>
            </div>
        </div>
    )
}

export default OpinionsBoxHomePage