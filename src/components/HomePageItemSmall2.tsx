import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"


// type for input
type HomePageItemProps = {
    heading: string
    category: string
    readtime: string
    author: string
    image: string
    router: AppRouterInstance
    uuid: string
}


const HomePageItemSmall2 = ({ heading, category, readtime, author, image, router,uuid }: HomePageItemProps) => {

    const handeCategoryClick = (category: string) => {
        router.push(`/category/${category}`)
    }

    const handleNewsClick = (uuid: string) => {
        router.push(`/news/${uuid}`)
    }

    return (
        <div className="flex flex-col justify-between gap-y-4">
            <img
            src={image}
            alt={heading}
            className='h-full object-cover cursor-pointer hover:scale-105 transition-transform'
            onClick={() => handleNewsClick(uuid)}
            />
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
                        {readtime} mins read
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomePageItemSmall2