'use client'

import Image from "next/image"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Input } from "./ui/input"
import { Search, Menu, Youtube } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/app/LanguageContext"

// const LANGUAGES = ["English", "हिंदी", "اردू"]
const LANGUAGES = [
    {
        displayName: "English",
        value: "en"
    },
    {
        displayName: "हिंदी",
        value: "hi"
    },
    {
        displayName: "اردو",
        value: "ur"
    },
]

const MENUITEMS = [
    {
        en_name: "Home",
        hi_name: "होम",
        ur_name: "ہوم",
        path: "/"
    },
    {
        en_name: "Politics",
        hi_name: "राजनीति",
        ur_name: "سیاست",
        path: "/category/politics"
    },
    {
        en_name: "Economy",
        hi_name: "अर्थव्यवस्था",
        ur_name: "معیشت",
        path: "/category/economy"
    },
    {
        en_name: "World",
        hi_name: "विश्व",
        ur_name: "دنیا",
        path: "/category/world"
    },
    {
        en_name: "Security",
        hi_name: "सुरक्षा",
        ur_name: "سیکیورٹی",
        path: "/category/security"
    },
    {
        en_name: "Law",
        hi_name: "क़ानून",
        ur_name: "قانون",
        path: "/category/law"
    },
    {
        en_name: "Science",
        hi_name: "विज्ञान",
        ur_name: "سائنس",
        path: "/category/science"
    },
    {
        en_name: "Society",
        hi_name: "समाज",
        ur_name: "معاشرہ",
        path: "/category/society"
    },
    {
        en_name: "Culture",
        hi_name: "संस्कृति",
        ur_name: "ثقافت",
        path: "/category/culture"
    }
];

const OTHERITEMS = [
    {
        en_name: "Editor's Pick",
        hi_name: "संपादक की पसंद",
        ur_name: "ایڈیٹر کی پسند",
        path: "/voices/editors_pick"
    },
    {
        en_name: "Opinions",
        hi_name: "विचार",
        ur_name: "آراء",
        path: "/voices/opinion"
    }
];

const Navbar = () => {
    const router = useRouter();
    const pathName = usePathname();

    // const [selectedLanguage, setSelectedlanguage] = useState(LANGUAGES[0]);
    const { language, switchLanguage } = useLanguage();
    const [searchQuery, setSearchQuery] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const getLocalizedName = (item: any) => item[`${language}_name`];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchQuery.trim() !== '') {
            router.push(`/search?query=${searchQuery}`);
        }
    }

    const handleYoutubeClick = () => {
        window.open("https://www.youtube.com/channel/UCt0n9skCrGvC97AIywt6o7A", "_blank", "noopener,noreferrer");
    }

    return (
        <nav className="flex flex-col">
            {/* White Bar - Large Screens */}
            <div className="bg-white">
                <MaxWidthWrapper>
                    <div className="flex items-center justify-between">
                        {/* Large Screen View */}
                        <div className="hidden lg:flex items-center justify-between w-full">
                            <div className="flex items-center gap-x-4">
                                {/* Logo */}
                                <div>
                                    <Image
                                        src='/img/logo.png'
                                        alt='Logo'
                                        width={100}
                                        height={100}
                                        onClick={() => router.push('/')}
                                        className="cursor-pointer"
                                    />
                                </div>
                                {/* Language Options */}
                                <div>
                                    <ul className="flex items-center gap-x-4">
                                        {LANGUAGES.map((lang, index) => (
                                            <li
                                                key={index}
                                                onClick={() => switchLanguage(lang.value)}
                                                className={cn('cursor-pointer text-lg transition-colors duration-200 ease-in-out', language === lang.value ? 'text-red-600 font-bold' : 'text-gray-600')}
                                            >
                                                {lang.displayName}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {/* Right div */}
                            <div className="flex items-center gap-x-5">
                                {/* Youtube Link */}
                                <div
                                    className="group flex items-center gap-x-2 transition-all duration-300 ease-in-out hover:text-gray-900 cursor-pointer"
                                    onClick={handleYoutubeClick}
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
                                <div className="flex items-center border rounded-md px-2">
                                    <Search className="text-gray-900" />
                                    <Input
                                        className="border-none focus-visible:ring-0 w-48"
                                        placeholder="Search news"
                                        onChange={handleInputChange}
                                        onKeyDown={handleKeyDown}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Medium & Small Screen View */}
                        <div className="flex lg:hidden items-center justify-between w-full p-4">
                            <div className="flex items-center gap-x-4">
                                <Image
                                    src='/img/logo.png'
                                    alt='Logo'
                                    width={80}
                                    height={80}
                                    onClick={() => router.push('/')}
                                    className="cursor-pointer"
                                />
                                <div className="flex items-center">
                                    <Youtube
                                        onClick={handleYoutubeClick}
                                        className="text-gray-500 hover:text-red-600 transition-colors duration-300 mr-2 cursor-pointer"
                                        size={30}
                                    />
                                    <div className="flex items-center border rounded-md px-1">
                                        <Search className="text-gray-900" size={20} />
                                        <Input
                                            className="border-none focus-visible:ring-0 w-32 text-sm"
                                            placeholder="Search"
                                            onChange={handleInputChange}
                                            onKeyDown={handleKeyDown}
                                        />
                                    </div>
                                </div>
                            </div>
                            <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                                <DropdownMenuTrigger>
                                    <Menu className="h-6 w-6" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    {/* Language Selection */}
                                    {LANGUAGES.map((lang, index) => (
                                        <DropdownMenuItem
                                            key={index}
                                            onSelect={() => switchLanguage(lang.value)}
                                            className={cn(language === lang.value ? 'text-red-600 font-bold' : 'text-gray-600')}
                                        >
                                            {lang.displayName}
                                        </DropdownMenuItem>
                                    ))}
                                    {/* Divider */}
                                    <div className="border-b border-gray-300 my-2" />
                                    {/* Menu Items */}
                                    {[...MENUITEMS, ...OTHERITEMS].map((item, index) => (
                                        <DropdownMenuItem
                                            key={index}
                                            onSelect={() => router.push(item.path)}
                                            className={cn(
                                                "cursor-pointer",
                                                pathName === item.path
                                                    ? "font-semibold text-[#9C1818]"
                                                    : "text-gray-700"
                                            )}
                                        >
                                            {getLocalizedName(item)}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>

            {/* Bottom Bar - Large Screens */}
            <div className="bg-red-600 hidden lg:block">
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
                                            "cursor-pointer text-base md:text-lg font-medium transition-colors duration-200 ease-in-out hover:font-semibold text-gray-700 py-2",
                                            pathName === item.path
                                                ? "font-semibold border-b-4 border-[#9C1818]"
                                                : "text-white"
                                        )}
                                    >
                                        {getLocalizedName(item)}
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
                                                : "text-white"
                                        )}
                                    >
                                        {getLocalizedName(item)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
            <div className="w-full h-1 bg-gray-300 -mt-0.5 hidden lg:block" />
        </nav>
    )
}

export default Navbar