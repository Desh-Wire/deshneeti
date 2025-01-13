import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import React from 'react'

// type for input
type HomePageItemProps = {
    heading: string
    category: string
    readtime: string
    author: string
    image: string
    router: AppRouterInstance
    tagline: string
    uuid: string
}

const HomePageItemLong = ({ heading, category, readtime, author, image, router, uuid, tagline }: HomePageItemProps) => {
    const handeCategoryClick = (category: string) => {
        router.push(`/category/${category}`)
    }

    const handleNewsClick = (heading: string) => {
        router.push(`/news/${uuid}`)
    }

    return (
        <div className="flex flex-col md:flex-row justify-between md:gap-x-8">
            <div className="flex flex-col gap-y-4 md:gap-y-8 p-4 order-2 md:order-1 flex-1">
                <p className='font-bold uppercase tracking-wider text-red-700 cursor-pointer hover:text-black' 
                   onClick={() => handeCategoryClick(category.toLowerCase())}>
                    {category}
                </p>
                <p className='font-semibold cursor-pointer hover:text-red-700' 
                   onClick={() => handleNewsClick(uuid)}>
                    {heading}
                </p>
                <p className="text-sm md:text-base">
                    {tagline}
                </p>
                <div className='flex flex-row justify-between items-center'>
                    <p className="text-sm tracking-tight">
                        {author}
                    </p>
                    <p className="text-sm tracking-tighter text-gray-500">
                        {readtime} mins read
                    </p>
                </div>
            </div>
            
            {/* Updated image container with fixed dimensions */}
            <div className="order-1 md:order-2 w-full md:w-auto md:min-w-[240px] md:max-w-[240px]">
                <img
                    src={image}
                    alt={heading}
                    className='w-full h-48 md:h-full object-cover cursor-pointer hover:scale-105 transition-transform'
                    onClick={() => handleNewsClick(uuid)}
                />
            </div>
        </div>
    )
}

export default HomePageItemLong