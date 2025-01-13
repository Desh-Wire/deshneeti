import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import HomePageItemSmall from './HomePageItemSmall'
import ViewMore from './ViewMore';
import { News } from '@/lib/utils';

const HomePageGridItem = ({ router, news }: {
    router: AppRouterInstance, news: News[]
}) => {

    const handeCategoryClick = (category: string) => {
        router.push(`/category/${category}`)
    }

    const handleNewsClick = (uuid: string) => {
        router.push(`/news/${uuid}`)
    }

    return (
        <div className='flex flex-col gap-y-4 justify-between'>
            <h1 className='text-4xl font-extrabold'>
                {news[0]!.category!.name}
            </h1>
            <div className='flex flex-col gap-y-4'>
                {/* only first news */}
                <HomePageItemSmall heading={news[0].headingEng ?? news[0].headingHin ?? news[0].headingUrd ?? ""} category={news[0]!.category!.name} readtime={news[0].readTime.toString()} author={news[0]!.author!.name} image={news[0].pictureUrl ?? ""} router={router} uuid={news[0].id}/>
                {/* rest */}
                {
                    news.slice(1).map((item, index) => (
                        <div className="flex flex-col justify-between gap-y-2" key={index}>
                            <p className='font-bold uppercase tracking-wider text-red-700 cursor-pointer hover:text-black' onClick={() => handeCategoryClick(item!.category!.name.toLowerCase())}>
                                {item!.category!.name}
                            </p>
                            <p className='font-semibold cursor-pointer hover:text-red-700' onClick={() => handleNewsClick(item.id)}>
                                {item.headingEng ?? item.headingHin ?? item.headingUrd ?? ""}
                            </p>
                            <div className='flex flex-row justify-between items-center'>
                                <p className="text-sm tracking-tight">
                                    {item!.author!.name}
                                </p>
                                <p className="text-sm tracking-tighter text-gray-500">
                                    {item.readTime} mins read
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='self-end'>
                <ViewMore black={true} goTo={`/category/${news[0]!.category!.name.toLowerCase()}`} />
            </div>
        </div>
    )
}

export default HomePageGridItem