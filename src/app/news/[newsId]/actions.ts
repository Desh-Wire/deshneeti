'use server'

import { db } from "@/db";

export const getEnglishNewsById = async (id: string) => {
    try {
        const res = await db.newsItem.findMany({
            select: {
                id: true,
                headingEng: true,
                taglineEng: true,
                contentEng: true,
                category: true,
                author: true,
                tags: true,
                createdAt: true,
                pictureUrl: true,
                readTime: true,
                views: true,
                youtube: true
            },
            where: {
                id: id
            }
        })
        // console.log(res);
        return res;
    } catch (e) {
        console.error(e);
    }
}

export const getEnglishNewsLatest = async (id: string) => {
    try {
        const res = await db.newsItem.findMany({
            select: {
                id: true,
                headingEng: true,
                category: true,
                author: true,
                createdAt: true,
                pictureUrl: true,
                readTime: true,
            },
            where: {
                NOT: {
                    id: id
                },
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: 6,
        })
        return res;
    } catch (e) {
        console.error(e);
    }
}

export const getHindiNewsById = async (id: string) => {
    try {
        const res = await db.newsItem.findMany({
            select: {
                id: true,
                headingHin: true,
                taglineHin: true,
                contentHin: true,
                category: true,
                author: true,
                tags: true,
                createdAt: true,
                pictureUrl: true,
                readTime: true,
                views: true,
                youtube: true
            },
            where: {
                id: id
            }
        })
        return res;
    } catch (e) {
        console.error(e);
    }
}

export const getHindiNewsLatest = async (id: string) => {
    try {
        const res = await db.newsItem.findMany({
            select: {
                id: true,
                headingHin: true,
                category: true,
                author: true,
                createdAt: true,
                pictureUrl: true,
                readTime: true,
            },
            where: {
                NOT: {
                    id: id
                },
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: 6,
        })
        return res;
    } catch (e) {
        console.error(e);
    }
}

export const getUrduNewsById = async (id: string) => {
    try {
        const res = await db.newsItem.findMany({
            select: {
                id: true,
                headingUrd: true,
                taglineUrd: true,
                contentUrd: true,
                category: true,
                author: true,
                tags: true,
                createdAt: true,
                pictureUrl: true,
                readTime: true,
                views: true,
                youtube: true
            },
            where: {
                id: id
            }
        })
        return res;
    } catch (e) {
        console.error(e);
    }
}

export const getUrduNewsLatest = async (id: string) => {
    try {
        const res = await db.newsItem.findMany({
            select: {
                id: true,
                headingUrd: true,
                category: true,
                author: true,
                createdAt: true,
                pictureUrl: true,
                readTime: true,
            },
            where: {
                NOT: {
                    id: id
                },
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: 6,
        })
        return res;
    } catch (e) {
        console.error(e);
    }
}

