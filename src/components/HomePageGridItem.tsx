import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import HomePageItemSmall from './HomePageItemSmall'
import ViewMore from './ViewMore';

const HomePageGridItem = ({ router, heading, news }: {
    router: AppRouterInstance, heading: string, news: {
        Title: string;
        Content: string;
        ImagePath: string;
        Category: string;
        Author: string;
        ReadTime: number;
        CreatedAt: string;
        uuid: string;
    }[]
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
                {heading}
            </h1>
            <div className='flex flex-col gap-y-4'>
                {/* only first news */}
                <HomePageItemSmall heading={news[0].Title} category={news[0].Category} readtime={news[0].ReadTime.toString()} author={news[0].Author} image={news[0].ImagePath} router={router} uuid={news[0].uuid}/>
                {/* rest */}
                {
                    news.slice(1).map((item, index) => (
                        <div className="flex flex-col justify-between gap-y-2" key={index}>
                            <p className='font-bold uppercase tracking-wider text-red-700 cursor-pointer hover:text-black' onClick={() => handeCategoryClick(item.Category.toLowerCase())}>
                                {item.Category}
                            </p>
                            <p className='font-semibold cursor-pointer hover:text-red-700' onClick={() => handleNewsClick(item.uuid)}>
                                {item.Title}
                            </p>
                            <div className='flex flex-row justify-between items-center'>
                                <p className="text-sm tracking-tight">
                                    {item.Author}
                                </p>
                                <p className="text-sm tracking-tighter text-gray-500">
                                    {item.ReadTime} mins read
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='self-end'>
                <ViewMore black={true} className='' />
            </div>
        </div>
    )
}

export default HomePageGridItem