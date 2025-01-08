import { cn, News } from '@/lib/utils'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import React from 'react'

const CategoryBigItem = ({ news, router, className }: { news: News, router: AppRouterInstance, className?: string }) => {

    const handleNewsClick = (uuid: string) => {
        router.push(`/news/${uuid}`)
    }

    const handleTagClick = (tag: string) => {
        //replace spaces with underscores
        tag = tag.replace(/\s/g, '_')
        router.push(`/tag/${tag}`)
    }

    return (
        <div className={cn(className, 'flex flex-col gap-y-4')}>
            <p className='text-4xl font-bold capitalize'>
                {news.category.name}
            </p>
            {/* big box */}
            <div className='flex flex-col gap-y-4 border border-black'>
                <img
                    src={news.pictureUrl}
                    alt={news.headingEng ?? news.headingHin ?? news.headingUrd ?? ""}
                    className='w-full object-cover aspect-video'
                />
                <div className='p-4 flex flex-col gap-y-4'>
                    <p className='font-bold text-xl uppercase text-red-700'>
                        {news.category.name}
                    </p>
                    <p className='text-3xl font-bold hover:cursor-pointer hover:text-red-700' onClick={() => handleNewsClick(news.id)}>
                        {news.headingEng ?? news.headingHin ?? news.headingUrd ?? ""}
                    </p>
                    <p className='italic'>
                        '{news.taglineEng ?? news.taglineHin ?? news.taglineUrd ?? ""}'
                    </p>
                    <p className='text-sm'>
                        {news.author.name} | {news.readTime} mins read
                    </p>
                    {/* map of tags */}
                    <div className='flex flex-row flex-wrap gap-x-4 gap-y-4'>
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

export default CategoryBigItem