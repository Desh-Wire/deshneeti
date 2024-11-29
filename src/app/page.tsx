'use client'

import HotTopic from "@/components/HotTopic";
import Face from "@/components/Face";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useRouter } from "next/navigation";
import VideoSection from "@/components/VideoSection";


export default function Home() {

  const router = useRouter();

  return (
    <div className="my-8">
      <MaxWidthWrapper>
        <Face router={router} />
        <HotTopic heading="Assembly Elections 2024" className="my-14" router={router} />
      </MaxWidthWrapper>
      <VideoSection router={router} />
    </div>
  );
}
