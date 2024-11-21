'use client'

import Image from "next/image"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Input } from "./ui/input"
import { Search } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

const LANGUAGES = ["English", "हिंदी", "اردو"]
const MENUITEMS = [
    { name: "Home", path: "/" },
    { name: "Politics", path: "/categories/politics/all" },
    { name: "Economy", path: "/categories/economy/all" },
    { name: "World", path: "/categories/world/all" },
    { name: "Security", path: "/categories/security/all" },
    { name: "Law", path: "/categories/law/all" },
    { name: "Science", path: "/categories/science/all" },
    { name: "Society", path: "/categories/society/all" },
    { name: "Culture", path: "/categories/culture/all" },
];
const OTHERITEMS = [
    { name: "Editor's Pick", path: "/editors-pick" },
    { name: "Opinions", path: "/opinions" },
]


const Navbar = () => {

    const router = useRouter();
    const pathName = usePathname();

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
        <nav className="flex flex-col">
            {/* White Bar */}
            <div className="bg-white">
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
                                    onClick={() => router.push('/')}
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
                            <div
                                className="group flex items-center gap-x-2 transition-all duration-300 ease-in-out hover:text-gray-900 cursor-pointer"
                                onClick={() => {
                                    window.open("https://www.youtube.com/channel/UCt0n9skCrGvC97AIywt6o7A", "_blank", "noopener,noreferrer");
                                }}
                            >
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
                            <div className="flex items-center border px-2">
                                <Search className="text-gray-900" />
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
            {/* Other Bar */}
            <div className="bg-[#F2EEE3]">
                <MaxWidthWrapper>
                    <div className="flex justify-between items-center px-4 pt-2">
                        {/* Left List */}
                        <div>
                            <ul className="flex items-center gap-x-8">
                                {MENUITEMS.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => router.push(item.path)}
                                        className={cn(
                                            "cursor-pointer text-base md:text-lg font-medium transition-colors duration-200 ease-in-out hover:font-semibold text-gray-700",
                                            pathName === item.path
                                                ? "font-semibold border-b-4 border-[#9C1818]"
                                                : "text-gray-700"
                                        )}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Right List */}
                        <div>
                            <ul className="flex items-center gap-x-8">
                                {OTHERITEMS.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => router.push(item.path)}
                                        className={cn(
                                            "cursor-pointer text-base md:text-lg font-medium transition-colors duration-200 ease-in-out hover:font-semibold text-gray-700",
                                            pathName === item.path
                                                ? "font-semibold border-b-4 border-[#9C1818]"
                                                : "text-gray-700"
                                        )}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
            <div className="w-full h-1 bg-gray-300 -mt-0.5" />
        </nav>
    )
}

export default Navbar