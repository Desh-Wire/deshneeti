import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

type JustInItemProps = {
    author: string
    title: string
    router: AppRouterInstance
    image?: string
}

const AuthorItem = ({ author, title, router, image='/img/icons8-author-94.png' }: JustInItemProps) => {
    const handleAuthorClick = (author: string) => {
        router.push(`/author/${author}`)
    }

    const handleNewsClick = (heading: string) => {
        router.push(`/news/${heading}`)
    }

    return (
        <div className='flex flex-row gap-x-4'>
            <img
                src={image}
                alt={title}
                className='object-cover cursor-pointer hover:scale-105 transition-transform rounded-full bg-white p-4 aspect-square h-20'
                onClick={() => handleAuthorClick(author.toLowerCase())}
            />
            <div className="flex flex-col gap-y-2">
                <p className='font-bold uppercase tracking-wider text-red-700 cursor-pointer hover:text-black' onClick={() => handleAuthorClick(author.toLowerCase())}>
                    {author}
                </p>
                <p className='font-semibold cursor-pointer hover:text-red-700' onClick={() => handleNewsClick(title.toLowerCase())}>
                    {title}
                </p>
            </div>
        </div>
    )
}

export default AuthorItem