'use client'

import React, { useEffect, useState } from 'react'
import { EXAMPLES } from '@/lib/example'
import { useParams, useRouter } from 'next/navigation'
import { format, parse } from 'date-fns';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/app/LanguageContext';
import { News } from '@/lib/utils';
import { getEnglishNewsById, getEnglishNewsLatest, getHindiNewsById, getHindiNewsLatest, getUrduNewsById, getUrduNewsLatest } from './actions';
import { convertFromRaw, Editor, EditorState } from 'draft-js';

const page = () => {

    const [news, setNews] = useState<News[]>([])
    const [loading, setLoading] = useState(true)
    const { language } = useLanguage() as { language: 'en' | 'hi' | 'ur', switchLanguage: (lang: 'en' | 'hi' | 'ur') => void };

    const param = useParams()
    const newsId = param.newsId as string;

    // const news = EXAMPLES.find(item => item.uuid === newsId)

    const router = useRouter()

    const handeCategoryClick = (category: string) => {
        router.push(`/category/${category}`)
    }

    const fetchNewsByLanguage = {
        en: getEnglishNewsById,
        hi: getHindiNewsById,
        ur: getUrduNewsById,
    };

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const fetchFunction = fetchNewsByLanguage[language];
                // const fetchLatestFunction = fetchLatestByLanguage[language];
                if (fetchFunction) {
                    // console.log("Fetching news...");
                    if (typeof newsId === 'string') {
                        const news = await fetchFunction(newsId);
                        // const latest = await fetchLatestFunction(newsId);
                        // if (latest) setLatest(latest)
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

    useEffect(() => {
        const incrementViews = async () => {
            try {
                await fetch('/api/count', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ newsId })
                })
            } catch (error) {
                console.error("Error incrementing views c", error);
            }
        }
        incrementViews()
    }, [newsId])

    const parseContent = (content: string) => {
        try {
            const contentState = convertFromRaw(JSON.parse(content));
            return EditorState.createWithContent(contentState);
        } catch {
            return null;
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen mx-auto my-auto">
                <div className="text-3xl font-semibold text-gray-700 mx-auto my-auto">Loading...</div>
            </div>
        );
    }

    if (!loading && news === undefined || news.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-3xl font-semibold text-gray-700">No news found for this category</div>
            </div>
        );
    }

    const content = parseContent(news[0].contentEng ?? news[0].contentHin ?? news[0].contentUrd ?? "") || EditorState.createEmpty();

    return (
        <div className='w-[70%] flex flex-col gap-y-4'>

            {/* Category */}
            <div>
                <p className='text-red-600 uppercase tracking-widest mb-2 hover:cursor-pointer' onClick={() => handeCategoryClick(news[0]!.category!.name.toLowerCase())}>
                    {news[0]!.category?.name}
                </p>
            </div>

            {/* Heading/author/info */}
            <div>
                <p className='font-bold text-4xl leading-relaxed'>
                    {news[0].headingEng ?? news[0].headingHin ?? news[0].headingUrd ?? ""}
                </p>
                <div className='flex flex-row gap-x-4'>
                    {/* Author */}
                    <div className='flex flex-row items-center'>
                        {/* <img src={news?.AuthorImage} alt={news?.Author} /> */}
                        <img
                            src='/img/icons8-author-94.png'
                            alt={news[0]!.author!.name}
                            className='object-cover cursor-pointer hover:scale-105 transition-transform rounded-full p-4 aspect-square h-16'
                        />
                        <div className='flex flex-col'>
                            <p className='tracking-tighter text-sm font-semibold'>
                                {news[0]!.author!.name}
                            </p>
                            {/* 29/Nov/2024 | 5 min read */}
                            <p className='tracking-tighter text-sm'>
                                {news[0]!.createdAt?.toDateString()} | {news[0].readTime} min read
                            </p>
                        </div>
                    </div>
                    {/* Socials */}
                    <div className='flex flex-row items-center justify-between gap-x-2'>
                        <Twitter size={20} className='hover:text-red-600 cursor-pointer' />
                        <Facebook size={20} className='hover:text-red-600 cursor-pointer' />
                        <Instagram size={20} className='hover:text-red-600 cursor-pointer' />
                        <Linkedin size={20} className='hover:text-red-600 cursor-pointer' />
                    </div>
                </div>
            </div>

            {/* Tagline */}
            <div>
                <p className=' italic text-sm'>
                    {news[0]!.taglineEng ?? news[0]!.taglineHin ?? news[0]!.taglineUrd ?? ""}
                </p>
            </div>

            {/* content */}
            <div className='flex flex-col gap-y-8 pr-4'>
                <img
                    src={news[0].pictureUrl}
                    alt={news[0].headingEng ?? news[0].headingHin ?? news[0].headingUrd ?? ""}
                    className='w-full'
                />
                <div className=' text-base'>
                    <div className="prose prose-gray max-w-none text-lg">
                        <Editor
                            editorState={content}
                            readOnly
                            onChange={() => { }}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page