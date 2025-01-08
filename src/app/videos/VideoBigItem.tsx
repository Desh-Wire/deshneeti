import { cn, News } from '@/lib/utils'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import React from 'react'


const VideoBigItem = ({ news, router, className }: { news: News, router: AppRouterInstance, className?: string}) => {

    const handleNewsClick = (uuid: string) => {
        router.push(`/news/${uuid}`)
    }

    const handleTagClick = (tag: string) => {
        router.push(`/tag/${tag}`)
    }

    //add 3 hash tags to the news
    news.tags = ['tag-1', 'tag-2', 'tag-3']

    return (
        <div className={cn(className, 'flex flex-col gap-y-4')}>
            <p className='text-4xl font-bold capitalize'>
                Videos
            </p>
            {/* big box */}
            <div className='flex flex-col gap-y-4 border border-black'>
                <img
                    src={news.pictureUrl}
                    alt={news.headingEng ?? news.headingHin ?? news.headingUrd ?? "" }
                    className='w-full object-cover aspect-video'
                />
                <div className='p-4 flex flex-col gap-y-4'>
                    <p className='font-bold text-xl uppercase text-red-700'>
                        {news.category.name}
                    </p>
                    <p className='text-3xl font-bold hover:cursor-pointer hover:text-red-700' onClick={() => handleNewsClick(news.id)}>
                        {news.headingEng ?? news.headingHin ?? news.headingUrd ?? "" }
                    </p>
                    <p className='italic'>
                        '{news.taglineEng ?? news.taglineHin ?? news.taglineUrd ?? ""}'
                    </p>
                    <p className='text-sm'>
                        {news.author.name} | {news.readTime} mins watch
                    </p>
                    {/* map of tags */}
                    <div className='flex flex-row flex-wrap gap-y-4 gap-x-4'>
                        {
                            news.tags.map((tag, index) => (
                                <div key={index} className='group border border-red-700 p-1 hover:bg-red-700 transition ease-in hover:cursor-pointer' onClick={() => handleTagClick(tag)}>
                                    <p className='text-red-700 uppercase group-hover:text-white'>
                                        {tag}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoBigItem