import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

type JustInItemProps = {
    category: string
    title: string
    router: AppRouterInstance
    uuid: string
}

const JustInItem = ({ category, title, router,uuid }: JustInItemProps) => {
    const handeCategoryClick = (category: string) => {
        router.push(`/category/${category}`)
    }

    const handleNewsClick = (uuid: string) => {
        router.push(`/news/${uuid}`)
    }

    return (
        <div className="flex flex-col justify-between gap-y-2">
            <p className='font-bold uppercase tracking-wider text-red-700 cursor-pointer hover:text-black' onClick={() => handeCategoryClick(category.toLowerCase())}>
                {category}
            </p>
            <p className='font-semibold cursor-pointer hover:text-red-700' onClick={() => handleNewsClick(uuid)}>
                {title}
            </p>
        </div>
    )
}

export default JustInItem