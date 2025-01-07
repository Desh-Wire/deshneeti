import MaxWidthWrapper from "./MaxWidthWrapper"
import Image from "next/image"
import ViewMore from "./ViewMore"
import { EXAMPLES } from "@/lib/example"
import HomePageItemSmall from "./HomePageItemSmall"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { News } from "@/lib/utils"


const VideoSection = ({ router, news }: { router: AppRouterInstance, news: News[] }) => {

    const videos = news.filter(item => item.tags.includes('video') || item.tags.includes('Video'));

    return (
        <div className="bg-[#1c1d1a] pb-8" >
            <MaxWidthWrapper>
                {/* log and view more section */}
                <div className="py-4 flex flex-row justify-between">
                    <div
                        className="flex items-center gap-x-2 transition-all duration-300 ease-in-out hover:text-gray-900 cursor-pointer">
                        <Image
                            src='/img/logo.png'
                            alt='Logo'
                            width={80}
                            height={80}
                            className="grayscale"
                        />
                        <span className="text-red-500 text-3xl group-hover:text-black transition-all duration-300 ease-in-out">
                            Videos
                        </span>
                    </div>
                    <ViewMore black={false} goTo="/videos" />
                </div>
                {/* content */}
                { videos.length === 0 ? <div className="flex items-center justify-center h-96 text-white text-xl font-semibold">
                    No Videos Found
                </div>:
                <div className="flex flex-row items-stretch justify-items-stretch gap-4">
                    {
                        videos.map((video, index) => (
                            <HomePageItemSmall key={index} heading={video.headingEng ?? video.headingHin ?? video.headingUrd ?? ""} category={video.category.name} readtime={video.readTime.toString()} author={video.author.name} image={video.pictureUrl ?? ""} video={true} router={router} uuid={video.id} />
                        ))
                    }
                </div>}
            </MaxWidthWrapper>
        </div>
    )
}

export default VideoSection