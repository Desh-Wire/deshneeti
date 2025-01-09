'use client'

import { cn, News } from "@/lib/utils"
import HomePageItemLong2 from "@/components/HomePageItemLong2";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/LanguageContext";
import { getEnglishNewsLatest, getHindiNewsLatest, getUrduNewsLatest } from "./actions";
import { useParams } from "next/navigation";

const Latest = ({ className, router }: { className?: string, router: AppRouterInstance }) => {

    const param = useParams()
    const newsId = param.newsId as string;

    const [latest, setLatest] = useState<News[]>([])
    const [loading, setLoading] = useState(true)
    const { language } = useLanguage() as { language: 'en' | 'hi' | 'ur', switchLanguage: (lang: 'en' | 'hi' | 'ur') => void };

    const fetchLatestByLanguage = {
        en: getEnglishNewsLatest,
        hi: getHindiNewsLatest,
        ur: getUrduNewsLatest,
    }

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const fetchLatestFunction = fetchLatestByLanguage[language];
                if (fetchLatestFunction) {
                    // console.log("Fetching news...");
                    if (typeof newsId === 'string') {
                        const latest = await fetchLatestFunction(newsId);
                        if (latest) setLatest(latest)
                        // console.log(news)
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
            <div className="flex items-center justify-center h-screen mx-auto my-auto">
                <div className="text-3xl font-semibold text-gray-700 mx-auto my-auto">Loading...</div>
            </div>
        );
    }

    if (!loading && latest === undefined || latest.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-3xl font-semibold text-gray-700">No news found for this category</div>
            </div>
        );
    }

    return (
        <div className={cn(className,'flex flex-col gap-y-4')}>

            <p className="font-bold text-3xl">
                Latest
            </p>

            {/* vertical */}
            <div className='flex flex-col gap-4 justify-between'>
                {
                    latest.map((item, index) => (
                        <HomePageItemLong2 key={index} heading={item.headingEng ?? item.headingHin ?? item.headingUrd ?? ""} category={item!.category!.name} readtime={item.readTime.toString()} author={item!.author!.name} image={item.pictureUrl ?? ""} router={router} uuid={item.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Latest