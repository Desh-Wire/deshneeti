'use client'

import Face from "@/components/Face";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useRouter } from "next/navigation";
import VideoSection from "@/components/VideoSection";
import Analysis from "@/components/Analysis";
import HomePageGrid from "@/components/HomePageGrid";
import Divider from "@/components/Divider";
import MostRead from "@/components/MostRead";
import { useLanguage } from "./LanguageContext";
import { useEffect, useState } from "react";
import { getAllEnglishNews, getAllHindiNews, getAllUrduNews } from "./actions";
import { News } from "@/lib/utils";


export default function Home() {

  const router = useRouter();
  const { language } = useLanguage() as { language: 'en' | 'hi' | 'ur', switchLanguage: (lang: 'en' | 'hi' | 'ur') => void };

  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchNewsByLanguage = {
    en: getAllEnglishNews,
    hi: getAllHindiNews,
    ur: getAllUrduNews,
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const fetchFunction = fetchNewsByLanguage[language];
        if (fetchFunction) {
          // console.log("Fetching news...");
          const news = await fetchFunction();
          // console.log(news); // Handle the news data as needed
          if (news)
            setNews(news);
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

  return (
    <div className="my-8">
      <MaxWidthWrapper>
        <Face router={router} news={news}/>
      </MaxWidthWrapper>
      <MostRead className="mt-14" router={router} />
      <VideoSection router={router} />
      <MaxWidthWrapper>
        <Analysis router={router} className="my-14" />
      </MaxWidthWrapper>
      <Divider />
      <MaxWidthWrapper>
        <HomePageGrid router={router} className="my-14" />
      </MaxWidthWrapper>
    </div>
  );
}
