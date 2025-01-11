import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { newsId } = body;

        // Check if the newsId is provided
        if (!newsId) {
            return NextResponse.json(
                { message: 'NewsId is required' },
                { status: 400 }
            );
        }

        // Get user's IP address - corrected method
        const forwardedFor = request.headers.get('x-forwarded-for');
        const userIp = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';

        const existingView = await db.viewLogs.findFirst({
            where: {
                newsId: newsId,
                ip: userIp,
                timestamp: {
                    gte: new Date(Date.now() - 10 * 60 * 1000) // Check if the user has viewed the news in the last 10 minutes
                },
            },
        });

        if (existingView) {
            // console.log("View already incremented");
            return NextResponse.json(
                { message: 'View already incremented' },
                { status: 200 }
            );
        }

        // Increment the views count
        await db.newsItem.update({
            where: {
                id: newsId
            },
            data: {
                views: {
                    increment: 1
                },
            },
        });

        // Log the view
        await db.viewLogs.create({
            data: {
                newsId: newsId,
                ip: userIp,
                timestamp: new Date(),
            },
        });

        // console.log("View incremented successfully");
        return NextResponse.json(
            { message: 'View incremented successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error incrementing views", error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}