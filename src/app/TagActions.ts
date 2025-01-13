'use server'

import { db } from "@/db";

export const getAllEnglishNewsByTag = async (tag: string) => {
    try {
        console.log("Fetching news by tag: ", tag);
        const res = await db.newsItem.findMany({
            select: {
                id: true,
                headingEng: true,
                taglineEng: true,
                category: true,
                createdAt: true,
                pictureUrl: true,
                author: true,
                readTime: true,
                views: true,
                tags: true,
            },
            where: {
                tags: { hasSome: [tag] }
            },
            orderBy: {
                createdAt: 'desc',
            }
        })
        return res;
    } catch (e) {
        console.error(e);
    }
}

export const getAllHindiNewsByTag = async (tag: string) => {
    try {
        const res = await db.newsItem.findMany({
            select: {
                id: true,
                headingHin: true,
                taglineHin: true,
                category: true,
                createdAt: true,
                pictureUrl: true,
                author: true,
                readTime: true,
                views: true,
                tags: true,
            },
            where: {
                tags: { hasSome: [tag] },
            },
            orderBy: {
                createdAt: 'desc',
            }
        })
        return res;
    } catch (e) {
        console.error(e);
    }
}

export const getAllUrduNewsByTag = async (tag: string) => {
    try {
        const res = await db.newsItem.findMany({
            select: {
                id: true,
                headingUrd: true,
                taglineUrd: true,
                category: true,
                createdAt: true,
                pictureUrl: true,
                author: true,
                readTime: true,
                views: true,
                tags: true,
            },
            where: {
                tags: { hasSome: [tag] }
            },
            orderBy: {
                createdAt: 'desc',
            }
        })
        return res;
    } catch (e) {
        console.error(e);
    }
}

