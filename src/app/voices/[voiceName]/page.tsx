'use client'

import React, { useEffect, useState } from 'react'
import { EXAMPLES } from '@/lib/example'
import { useParams, useRouter } from 'next/navigation'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { cn, News } from '@/lib/utils'
import HomePageItemLong2 from '@/components/HomePageItemLong2'
import VoiceBigItem from './VoiceBigItem'
import { useLanguage } from '@/app/LanguageContext'
import { getAllEnglishNewsByTag, getAllHindiNewsByTag, getAllUrduNewsByTag } from '@/app/TagActions'

const VOICES = ['opinions','editors_choice','analysis']

const page = () => {

    const [news, setNews] = useState<News[]>([])
    const [loading, setLoading] = useState(true)
    const { language } = useLanguage() as { language: 'en' | 'hi' | 'ur', switchLanguage: (lang: 'en' | 'hi' | 'ur') => void };

    const router = useRouter()

    const param = useParams()
    const voiceName = param.voiceName as string

    if(!VOICES.includes(voiceName)){
        return <div className='flex items-center justify-center'>404 - Page Not Found</div>
    }

    const fetchNewsByLanguage = {
        en: getAllEnglishNewsByTag,
        hi: getAllHindiNewsByTag,
        ur: getAllUrduNewsByTag,
    };

    function formatString(input: string): string {
        return input
            .replace(/_/g, ' ') // Replace underscores with spaces
            .split(' ')         // Split the string into words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
            .join(' ');         // Join the words back into a single string
    }
    

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const fetchFunction = fetchNewsByLanguage[language];
                if (fetchFunction) {
                    // console.log("Fetching news...");
                    if (typeof voiceName === 'string') {
                        const news = await fetchFunction(formatString(voiceName));
                        // console.log(news)
                        if (news) setNews(news);
                    } else {
                        console.error("Invalid category");
                    }
                    // console.log(news); // Handle the news data as needed
                    setLoading(false);
                } else {
                    console.error("Unsupported language");
                }
            } catch (e) {
                console.error("Error fetching news:", e);
            }
        };

        fetchNews();
    }, [language]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-3xl font-semibold text-gray-700">Loading...</div>
            </div>
        );
    }

    if(!loading && news === undefined || news.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-3xl font-semibold text-gray-700">No news found for this Tag</div>
            </div>
        );
    }

    //1 news item in a variable
    const newsItem = news[0]
    // console.log(newsItem.category.name)

    const extraNews = news.slice(1,Math.min(7,news.length))

    const rest = news.slice(7)

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
                           extraNews.map((item, index) => (
                            <HomePageItemLong2 key={index} heading={item.headingEng ?? item.headingHin ?? item.headingUrd ?? ""} category={item!.category!.name} readtime={item.readTime.toString()} author={item!.author!.name} image={item.pictureUrl ?? ""} router={router} uuid={item.id} />
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
                            rest.map((item, index) => (
                                <HomePageItemLong2 key={index} heading={item.headingEng ?? item.headingHin ?? item.headingUrd ?? ""} category={item!.category!.name} readtime={item.readTime.toString()} author={item!.author!.name} image={item.pictureUrl ?? ""} router={router} uuid={item.id} />
                            ))
                        }
                    </div>
                </MaxWidthWrapper>
            </div>
        </div>
    )
}

export default page