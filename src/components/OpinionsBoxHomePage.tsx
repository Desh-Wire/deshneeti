import { cn } from '@/lib/utils'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { EXAMPLES } from '@/lib/example'
import AuthorItem from './AuthorItemHomePage';

const OpinionsBoxHomePage = ({ className, router }: { className?: string, router: AppRouterInstance }) => {

    //random 5
    const opinions = EXAMPLES.sort(() => Math.random() - 0.5).slice(0, 5);

    return (
        <div className={cn(className, 'flex flex-col gap-y-4 bg-[#ece2c8] p-4 h-[50%] justify-between')}>
            <h1 className='text-4xl font-extrabold mx-auto'>
                Opinions
            </h1>
            <div className='w-full flex flex-col gap-y-2'>
                {
                    opinions.map((item, index) => (
                        <div key={index} className='flex flex-col gap-y-2'>
                            <AuthorItem key={index} author={item.Author} title={item.Title} router={router} uuid={item.uuid} />
                            <div className='w-full h-[4px] bg-[#ddcea9]' />
                        </div>
                    ))
                }
            </div>
            <div className='self-end'>
                <button className='w-full py-2 bg-red-700 text-white font-bold rounded-md p-4 hover:bg-white hover:text-red-700' onClick={() => router.push('/voices/opinion')}>
                    View More
                </button>
            </div>
        </div>
    )
}

export default OpinionsBoxHomePage