'use client'

import Image from "next/image"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Input } from "./ui/input"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

const Navbar = () => {

    const LANGUAGES = ["English", "हिंदी", "اردو"]

    const router = useRouter();

    const [selectedLanguage, setSelectedlanguage] = useState(LANGUAGES[0]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchQuery.trim() !== '') {
            router.push(`/search?query=${searchQuery}`);
        }
    }

    return (
        <div>
            <MaxWidthWrapper>
                <div className="flex items-center justify-between">
                    {/* left div */}
                    <div className="flex items-center gap-x-4">
                        {/* Logo */}
                        <div>
                            <Image
                                src='/img/logo.png'
                                alt='Logo'
                                width={100}
                                height={100}
                            />
                        </div>
                        {/* Language Options */}
                        <div>
                            <ul className="flex items-center gap-x-4">
                                {
                                    LANGUAGES.map((language, index) => (
                                        <li
                                            key={index}
                                            onClick={() => setSelectedlanguage(language)}
                                            className={cn('cursor-pointer text-lg transition-colors duration-200 ease-in-out', selectedLanguage === language ? 'text-red-600 font-bold' : 'text-gray-600')}
                                        >
                                            {language}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* right div */}
                    <div className="flex items-center gap-x-5">
                        {/* Youtube Link */}
                        <div className="group flex items-center gap-x-2 transition-all duration-300 ease-in-out hover:text-gray-900 cursor-pointer">
                            <Image
                                src='/img/logo.png'
                                alt='Logo'
                                width={60}
                                height={60}
                                className="transition-all duration-300 ease-in-out grayscale group-hover:grayscale-0 relative -bottom-1.5"
                            />
                            <span className="text-gray-500 text-xl group-hover:text-black transition-all duration-300 ease-in-out">
                                on
                            </span>
                            <Image
                                src='/img/youtubeLogo.png'
                                alt='Logo'
                                width={60}
                                height={60}
                                className="transition-all duration-300 ease-in-out group-hover:grayscale-0 grayscale"
                            />
                        </div>
                        {/* Search Box */}
                        <div className="flex items-center border p-1">
                            <Search />
                            <Input
                                className="border-none focus-visible:ring-0"
                                placeholder="Seach news"
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default Navbar