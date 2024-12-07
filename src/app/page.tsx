'use client'

import Face from "@/components/Face";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useRouter } from "next/navigation";
import VideoSection from "@/components/VideoSection";
import Analysis from "@/components/Analysis";
import HomePageGrid from "@/components/HomePageGrid";
import Divider from "@/components/Divider";
import MostRead from "@/components/MostRead";


export default function Home() {

  const router = useRouter();

  return (
    <div className="my-8">
      <MaxWidthWrapper>
        <Face router={router} />
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
