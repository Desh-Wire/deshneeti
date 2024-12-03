import { cn } from "@/lib/utils"
import { Play } from "lucide-react"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"


// type for input
type HomePageItemProps = {
    heading: string
    category: string
    readtime: string
    author: string
    image: string
    router: AppRouterInstance
    video?: boolean
    uuid: string
}


const HomePageItemSmall = ({ heading, category, readtime, author, image, router,video,uuid }: HomePageItemProps) => {

    const handeCategoryClick = (category: string) => {
        router.push(`/category/${category}`)
    }

    const handleNewsClick = (uuid: string) => {
        router.push(`/news/${uuid}`)
    }

    return (
        <div className={cn('flex flex-col justify-between gap-y-4',video?'text-white':'text-black')}>
            <div className="relative">
                <img
                    src={image}
                    alt={heading}
                    className='w-full h-[250px] object-cover cursor-pointer hover:scale-105 transition-transform'
                    onClick={() => handleNewsClick(uuid)}
                />
                {
                    // show a video symbol in the middle of the image
                    video && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <Play className="text-black " size={50} fill="red"/>
                        </div>
                    )
                }
            </div>

            <div className="flex flex-col justify-between gap-y-2">
                <p className='font-bold uppercase tracking-wider text-red-700 cursor-pointer hover:text-black' onClick={() => handeCategoryClick(category.toLowerCase())}>
                    {category}
                </p>
                <p className='font-semibold cursor-pointer hover:text-red-700' onClick={() => handleNewsClick(uuid)}>
                    {heading}
                </p>
                <div className='flex flex-row justify-between items-center'>
                    <p className="text-sm tracking-tight">
                        {author}
                    </p>
                    <p className="text-sm tracking-tighter text-gray-500">
                        {readtime} mins {video ? 'watch' : 'read'} 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomePageItemSmall