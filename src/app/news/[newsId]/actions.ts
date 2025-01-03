'use server'

import { db } from "@/db";

export const getEnglishNewsById = async(id:string) => {
    try{
        const res = await db.newsItem.findMany({
            select:{
                id:true,
                headingEng:true,
                taglineEng:true,
                contentEng:true,
                category:true,
                author:true,
                tags:true,
                createdAt:true,
                pictureUrl:true,
                readTime:true,
                views:true
            },
            where:{
                id: id
            }
        })
        return res;
    }catch(e){
        console.error(e);
    }
}

export const getHindiNewsById = async(id:string) => {
    try{
        const res = await db.newsItem.findMany({
            select:{
                id:true,
                headingHin:true,
                taglineHin:true,
                contentHin:true,
                category:true,
                author:true,
                tags:true,
                createdAt:true,
                pictureUrl:true,
                readTime:true,
                views:true
            },
            where:{
                id: id
            }
        })
        return res;
    }catch(e){
        console.error(e);
    }
}

export const getUrduNewsById = async(id:string) => {
    try{
        const res = await db.newsItem.findMany({
            select:{
                id:true,
                headingUrd:true,
                taglineUrd:true,
                contentUrd:true,
                category:true,
                author:true,
                tags:true,
                createdAt:true,
                pictureUrl:true,
                readTime:true,
                views:true
            },
            where:{
                id: id
            }
        })
        return res;
    }catch(e){
        console.error(e);
    }
}

