'use server'

import { db } from "@/db";

export const getAllEnglishNewsByCategory = async(category:string) => {
    try{
        const res = await db.newsItem.findMany({
            select:{
                id:true,
                headingEng:true,
                taglineEng:true,
                category:true,
                createdAt:true,
                pictureUrl:true,
                author:true,
                readTime:true,
                views:true,
                tags:true,
            },
            where:{
                category: { name: category },
            },
            orderBy:{
                createdAt:'desc',
            }
        })
        return res;
    }catch(e){
        console.error(e);
    }
}

export const getAllHindiNewsByCategory = async(category:string) => {
    try{
        const res = await db.newsItem.findMany({
            select:{
                id:true,
                headingHin:true,
                taglineHin:true,
                category:true,
                createdAt:true,
                pictureUrl:true,
                author:true,
                readTime:true,
                views:true,
                tags:true,
            },
            where:{
                category: { name: category },
            },
            orderBy:{
                createdAt:'desc',
            }
        })
        return res;
    }catch(e){
        console.error(e);
    }
}

export const getAllUrduNewsByCategory = async(category:string) => {
    try{
        const res = await db.newsItem.findMany({
            select:{
                id:true,
                headingUrd:true,
                taglineUrd:true,
                category:true,
                createdAt:true,
                pictureUrl:true,
                author:true,
                readTime:true,
                views:true,
                tags:true,
            },
            where:{
                category: { name: category },
            },
            orderBy:{
                createdAt:'desc',
            }
        })
        return res;
    }catch(e){
        console.error(e);
    }
}

