import { Facebook, Instagram, Twitter } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Image from "next/image"
import Link from "next/link"

const TOPICS = ['Politics', 'Law', 'Economy', 'Science', 'World', 'Society', 'Security', 'Culture']
const VOICES = ['Opinion', 'Editor\'s Pick', 'Analysis']
const NAVIGATE = ['About Us', 'Support Us', 'Contact Us']
const LEGAL = ['Terms and Conditions', 'Privacy Policy', 'Refund Policy']

const Footer = () => {

    return (
        <footer className="bg-[#1c1d1a]">
            <MaxWidthWrapper>
                {/* Top Level Div */}
                <div className="flex flex-col items-center justify-between gap-y-10 my-4">
                    {/* Logo & Social Media */}
                    <div className="flex flex-row items-center justify-between w-full">
                        <Image
                            src='/img/logo.png'
                            alt='Logo'
                            width={60}
                            height={60}
                            className="grayscale"
                        />
                        {/* Social Media Icons */}
                        <div className="flex flex-row items-center justify-between gap-x-4">
                            <Link href="https://x.com/deshkineeti?lang=en" rel="noopener noreferrer" target="_blank">
                                <Twitter className="text-gray-400 cursor-pointer hover:text-gray-300" />
                            </Link>
                            <Link href="https://www.instagram.com/desh.neeti/" rel="noopener noreferrer" target="_blank">
                                <Instagram className="text-gray-400 cursor-pointer hover:text-gray-300" />
                            </Link>
                            <Link href="https://www.facebook.com/deshneeti/" rel="noopener noreferrer" target="_blank">
                                <Facebook className="text-gray-400 cursor-pointer hover:text-gray-300" />
                            </Link>
                        </div>
                    </div>
                    {/* Divider */}
                    <div className="w-fill h-[0.15rem] w-full bg-[#45443d]" />
                    {/* Hyperlinks */}
                    <div className="flex md:flex-row items-center justify-between md:w-full flex-col gap-y-8">
                        {/* Topcis */}
                        <div className="flex flex-col items-center justify-between gap-y-4">
                            <p className="text-red-600 font-semibold text-lg">
                                Topics
                            </p>
                            {/* Topics in a 4x2 grid */}
                            <div className="grid grid-cols-2 grid-rows-4 gap-6">
                                {TOPICS.map((topic, index) => (
                                    <Link key={index} href={`/categories/${topic.toLowerCase()}/all`} className="text-gray-200 hover:text-gray-300">
                                        {topic}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {/* Voices */}
                        <div className="flex flex-col items-center justify-between gap-y-4">
                            <p className="text-red-600 font-semibold text-lg">
                                Voices
                            </p>
                            <div className="flex flex-col items-center justify-between gap-y-6">
                                {VOICES.map((voice, index) => (
                                    <Link key={index} href={`/voices/${voice.toLowerCase()}`} className="text-gray-200 hover:text-gray-300">
                                        {voice}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {/* Navigate */}
                        <div className="flex flex-col items-center justify-between gap-y-4">
                            <p className="text-red-600 font-semibold text-lg">
                                Navigate
                            </p>
                            <div className="flex flex-col items-center justify-between gap-y-6">
                                {NAVIGATE.map((nav, index) => (
                                    <Link key={index} href={`/${nav.toLowerCase().replace(' ', '-')}`} className="text-gray-200 hover:text-gray-300">
                                        {nav}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Divider */}
                    <div className="w-fill h-[0.15rem] w-full bg-[#45443d]" />
                    {/* Legal */}
                    <div>
                        <div className="flex flex-col items-center justify-between gap-y-4">
                            <div className="flex items-center justify-between gap-x-32">
                                {LEGAL.map((legal, index) => (
                                    <Link key={index} href={`/${legal.toLowerCase().replace(' ', '-')}`} className="text-gray-200 hover:text-gray-300">
                                        {legal}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Divider */}
                    <div className="w-fill h-[0.15rem] w-full bg-[#45443d]" />
                    {/* ARR */}
                    <div>
                        <p className="text-gray-200 text-center">
                            &copy; {new Date().getFullYear()} All rights reserved. Deshneeti
                        </p>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}

export default Footer