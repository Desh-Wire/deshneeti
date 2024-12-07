'use client'

import React from 'react'
import { EXAMPLES } from '@/lib/example'
import { useParams, useRouter } from 'next/navigation'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { cn } from '@/lib/utils'
import HomePageItemLong2 from '@/components/HomePageItemLong2'
import VoiceBigItem from './VoiceBigItem'

const VOICES = ['opinion','editors_pick','analysis']

const page = () => {



    const router = useRouter()

    const param = useParams()
    const voiceName = param.voiceName as string

    if(!VOICES.includes(voiceName)){
        return <div className='flex items-center justify-center'>404 - Page Not Found</div>
    }

    // const news: newsItemType[] = JSON.parse(JSON.stringify(EXAMPLES))

    // news.map(item => {
    //     item.Category = category!.toString()
    //     return item
    // }
    // )

    //1 news item in a variable
    const newsItem = EXAMPLES[0]

    //random 6
    const randomNews = EXAMPLES.sort(() => Math.random() - 0.5).slice(0, 6);

    //duplicate news 3 times in a new variable
    const news2 = [...EXAMPLES, ...EXAMPLES, ...EXAMPLES]

    return (
        <div>
            <MaxWidthWrapper className='flex md:flex-row flex-col mb-4'>
                {/* big news div */}
                <VoiceBigItem news={newsItem} router={router} className='md:w-[70%] w-full p-4 mr-4' heading={voiceName}/>
                <div className={cn('flex flex-col gap-y-4 md:w-[30%] w-full mt-4')}>

                    <p className="font-bold text-3xl">
                        Latest
                    </p>

                    {/* vertical */}
                    <div className='flex flex-col gap-4 justify-between'>
                        {
                            randomNews.map((item, index) => (
                                <HomePageItemLong2 key={index} heading={item.Title} category={item.Category} readtime={item.ReadTime.toString()} author={item.Author} image={item.ImagePath} router={router} uuid={item.uuid} />
                            ))
                        }
                    </div>
                </div>
            </MaxWidthWrapper>
            <div className='w-full bg-[#e7dcbf]'>
                <MaxWidthWrapper className='flex flex-col items-center gap-y-4'>
                    <p className='text-4xl font-bold mt-4'>
                        More in {voiceName.toUpperCase().replace(/_/g, ' ')}
                    </p>
                    {/* 3x3 grid of news, 1x1 on small screen */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6'>
                        {
                            news2.map((item, index) => (
                                <HomePageItemLong2 key={index} heading={item.Title} category={item.Category} readtime={item.ReadTime.toString()} author={item.Author} image={item.ImagePath} router={router} uuid={item.uuid} />
                            ))
                        }
                    </div>
                </MaxWidthWrapper>
            </div>
        </div>
    )
}

export default page