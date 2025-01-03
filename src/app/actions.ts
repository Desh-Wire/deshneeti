'use server'

import { db } from "@/db";

export const getAllEnglishNews = async() => {
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
                views:true
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

export const getAllHindiNews = async() => {
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
                views:true
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

export const getAllUrduNews = async() => {
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
                views:true
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