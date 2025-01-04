import { Facebook, Instagram, Twitter } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  // Content for different languages
  const content: Record<
    "en" | "hi" | "ur",
    {
      topics: string;
      voices: string;
      navigate: string;
      legal: string;
      rightsReserved: string;
      topicsOptions: string[];
      voicesOptions: string[];
      navigateOptions: string[];
      legalOptions: string[];
    }
  > = {
    en: {
      topics: "Topics",
      voices: "Voices",
      navigate: "Navigate",
      legal: "Legal",
      rightsReserved: "All rights reserved. Deshneeti",
      topicsOptions: ["Politics", "Law", "Economy", "Science", "World", "Society", "Security", "Culture"],
      voicesOptions: ["Opinion", "Editor's Pick", "Analysis"],
      navigateOptions: ["About Us", "Support Us", "Contact Us"],
      legalOptions: ["Terms and Conditions", "Privacy Policy", "Refund Policy"],
    },
    hi: {
      topics: "विषय",
      voices: "आवाजें",
      navigate: "नेविगेट करें",
      legal: "कानूनी",
      rightsReserved: "सभी अधिकार सुरक्षित। देशनीति",
      topicsOptions: ["राजनीति", "कानून", "अर्थव्यवस्था", "विज्ञान", "विश्व", "समाज", "सुरक्षा", "संस्कृति"],
      voicesOptions: ["राय", "संपादक की पसंद", "विश्लेषण"],
      navigateOptions: ["हमारे बारे में", "हमें समर्थन दें", "संपर्क करें"],
      legalOptions: ["नियम और शर्तें", "गोपनीयता नीति", "वापसी नीति"],
    },
    ur: {
      topics: "موضوعات",
      voices: "آوازیں",
      navigate: "تشریف لے جائیں",
      legal: "قانونی",
      rightsReserved: "جملہ حقوق محفوظ ہیں۔ دیش نیتی",
      topicsOptions: ["سیاست", "قانون", "معیشت", "سائنس", "دنیا", "معاشرہ", "سیکیورٹی", "ثقافت"],
      voicesOptions: ["رائے", "ایڈیٹرز چوائس", "تجزیہ"],
      navigateOptions: ["ہمارے بارے میں", "ہمیں سپورٹ کریں", "ہم سے رابطہ کریں"],
      legalOptions: ["شرائط و ضوابط", "رازداری کی پالیسی", "رقم کی واپسی کی پالیسی"],
    },
  };

  // Determine selected language or fallback to English
  const selectedLanguage = (language as "en" | "hi" | "ur") || "en";

  return (
    <footer className="bg-[#1c1d1a]">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-between gap-y-10 mt-4 mb-8">
          {/* Logo & Social Media */}
          <div className="flex flex-row items-center justify-between w-full">
            <Image
              src="/img/logo.png"
              alt="Logo"
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
            {/* Topics */}
            <div className="flex flex-col items-center justify-between gap-y-4">
              <p className="text-red-600 font-semibold text-lg">
                {content[selectedLanguage].topics}
              </p>
              <div className="grid grid-cols-2 grid-rows-4 gap-6">
                {content[selectedLanguage].topicsOptions.map((option, index) => (
                  <Link key={index} href={`/category/${content.en.topicsOptions[index].toLowerCase()}`} className="text-gray-200 hover:text-gray-300">
                    {option}
                  </Link>
                ))}
              </div>
            </div>
            {/* Voices */}
            <div className="flex flex-col items-center justify-between gap-y-4">
              <p className="text-red-600 font-semibold text-lg">
                {content[selectedLanguage].voices}
              </p>
              <div className="flex flex-col items-center justify-between gap-y-6">
                {content[selectedLanguage].voicesOptions.map((option, index) => (
                  <Link key={index} href={`/voices/${content.en.voicesOptions[index].toLowerCase().replace(/ /g, "_").replace(/'/g, "")}`} className="text-gray-200 hover:text-gray-300">
                    {option}
                  </Link>
                ))}
              </div>
            </div>
            {/* Navigate */}
            <div className="flex flex-col items-center justify-between gap-y-4">
              <p className="text-red-600 font-semibold text-lg">
                {content[selectedLanguage].navigate}
              </p>
              <div className="flex flex-col items-center justify-between gap-y-6">
                {content[selectedLanguage].navigateOptions.map((option, index) => (
                  <Link key={index} href={`/${content.en.navigateOptions[index].toLowerCase().replace(" ", "-")}`} className="text-gray-200 hover:text-gray-300">
                    {option}
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
                {content[selectedLanguage].legalOptions.map((option, index) => (
                  <Link key={index} href={`/${content.en.legalOptions[index].toLowerCase().replace(" ", "-")}`} className="text-gray-200 hover:text-gray-300">
                    {option}
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
              &copy; {new Date().getFullYear()} {content[selectedLanguage].rightsReserved}
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
