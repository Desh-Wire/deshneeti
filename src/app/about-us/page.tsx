'use client'

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useLanguage } from "../LanguageContext";

const AboutUs = () => {
  const { language } = useLanguage();

  // Define valid languages and content
  const content: Record<'en' | 'hi' | 'ur', { title: string; description: string }> = {
    en: {
      title: "About DESHNEETI",
      description:
        "DESHNEETI is India's best Political Hindi News Channel. DeshNeeti News channel fearlessly brings all the flaws of the government to you with impunity. Stay tuned with DeshNeeti News Channel for true and confirmed news.",
    },
    hi: {
      title: "देशनीति के बारे में",
      description:
        "देशनीति भारत का सर्वश्रेष्ठ राजनीतिक हिंदी न्‍यूज चैनल है। देशनीति न्‍यूज चैनल सरकार की हर खामियों को निडर होकर बेबाकी से आपके सामने लाता है। सच्ची और पक्की ख़बरों के लिए देशनीति न्‍यूज चैनल के साथ बने रहें।",
    },
    ur: {
      title: "دیش نیتی کے بارے میں",
      description:
        "دیش نیتی بھارت کا سب سے اھم سیاسی نیوز چینل ھے۔ دیش نیتی چینل سیاست میں سنسنی خیز اور تازہ ترین خبروں سے روشناس کرتا ھے۔ دیش نیتی چینل کی بریکنگ نیوز اور دیگر خبروں کے لئے ہم سے جُڑے رہیں۔",
    },
  };

  // Ensure language is a valid key; fallback to 'en'
  const selectedLanguage = (language as 'en' | 'hi' | 'ur') || 'en';

  return (
    <div>
      <MaxWidthWrapper>
        <div className="flex flex-col justify-between my-12 gap-y-14">
          {/* Heading */}
          <h1 className="font-bold text-4xl text-center text-gray-800">
            {content[selectedLanguage].title}
          </h1>

          {/* Content */}
          <div
            className={`p-6 bg-[#f5f5dc] rounded-lg shadow-lg ${
              selectedLanguage === "ur" ? "text-right" : ""
            }`}
          >
            <p className="text-lg text-gray-600">
              {content[selectedLanguage].description}
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutUs;
