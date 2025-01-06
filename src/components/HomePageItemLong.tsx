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

const HomePageItemLong = ({ heading, category, readtime, author, image, router,uuid,tagline }: HomePageItemProps) => {
    const handeCategoryClick = (category: string) => {
        router.push(`/category/${category}`)
    }

    const handleNewsClick = (heading: string) => {
        router.push(`/news/${uuid}`)
    }

    return (
        <div className="flex flex-row justify-between gap-x-8">

            <div className="flex flex-col gap-y-8 p-4">
                <p className='font-bold uppercase tracking-wider text-red-700 cursor-pointer hover:text-black' onClick={() => handeCategoryClick(category.toLowerCase())}>
                    {category}
                </p>
                <p className='font-semibold cursor-pointer hover:text-red-700' onClick={() => handleNewsClick(uuid)}>
                    {heading}
                </p>
                <p>
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
            <img
                src={image}
                alt={heading}
                className='w-60 object-cover cursor-pointer hover:scale-105 transition-transform'
                onClick={() => handleNewsClick(uuid)}
            />
        </div>
    )
}

export default HomePageItemLong