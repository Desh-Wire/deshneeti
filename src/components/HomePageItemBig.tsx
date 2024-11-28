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
}

const HomePageItemBig = ({ heading, category, readtime, author, image, router }: HomePageItemProps) => {
    const handeCategoryClick = (category: string) => {
        router.push(`/category/${category}`)
    }

    const handleNewsClick = (heading: string) => {
        router.push(`/news/${heading}`)
    }

    return (
        <div className="flex flex-col gap-y-2 bg-[#ece2c8] pt-4 w-full">
            <div className="flex flex-col justify-between gap-y-4 mx-4">
                <p className='font-bold uppercase tracking-wider text-red-700 cursor-pointer hover:text-black' onClick={() => handeCategoryClick(category.toLowerCase())}>
                    {category}
                </p>
                <p className='font-semibold cursor-pointer hover:text-red-700 text-3xl' onClick={() => handleNewsClick(heading.toLowerCase())}>
                    {heading}
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
                className='w-full h-[460px] object-cover cursor-pointer hover:scale-105 transition-transform'
                onClick={() => handleNewsClick(heading.toLowerCase())}
            />
        </div>
    )
}

export default HomePageItemBig