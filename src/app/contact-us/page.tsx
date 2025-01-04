'use client'

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useLanguage } from "../LanguageContext";


const ContactUs = () => {
  const { language } = useLanguage();

  // Define valid languages and content
  const content: Record<'en' | 'hi' | 'ur', { title: string; message: string; emailPrompt: string; footerNote: string }> = {
    en: {
      title: "Contact Us",
      message: "Have any questions or feedback? We'd love to hear from you!",
      emailPrompt: "Reach out to us via email at",
      footerNote: "We're here to help! Drop us a line anytime.",
    },
    hi: {
      title: "संपर्क करें",
      message: "कोई सवाल या प्रतिक्रिया है? हम आपसे सुनना पसंद करेंगे!",
      emailPrompt: "हमें ईमेल के माध्यम से संपर्क करें:",
      footerNote: "हम आपकी मदद के लिए यहाँ हैं! हमें कभी भी लिखें।",
    },
    ur: {
      title: "ہم سے رابطہ کریں",
      message: "کوئی سوال یا رائے ہے؟ ہم آپ کی بات سننا پسند کریں گے!",
      emailPrompt: "ہم سے ای میل کے ذریعے رابطہ کریں:",
      footerNote: "ہم مدد کے لیے حاضر ہیں! ہمیں کسی بھی وقت پیغام بھیجیں۔",
    },
  };

  // Ensure language is a valid key; fallback to 'en'
  const selectedLanguage = (language as 'en' | 'hi' | 'ur') || 'en';

  return (
    <div>
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center my-12 space-y-8 font-bold text-3xl">
          {/* Heading */}
          <h1 className="text-gray-800 hover:text-blue-600 transition duration-300">
            {content[selectedLanguage].title}
          </h1>

          {/* Content */}
          <div className="text-lg text-gray-700">
            <p className="text-center">
              {content[selectedLanguage].message}
            </p>
            <p className="mt-4 text-center">
              {content[selectedLanguage].emailPrompt}{" "}
              <a
                href="mailto:deshkineeti@gmail.com"
                className="text-blue-500 hover:text-blue-700 underline hover:no-underline transition duration-300"
              >
                deshkineeti@gmail.com
              </a>
            </p>
          </div>

          {/* Additional Section: Icon or Illustration */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 21H7.138C4.783 21 3 19.209 3 16.845v-4.69C3 9.791 4.783 8 7.138 8h9.724C19.217 8 21 9.791 21 12.155v4.69C21 19.209 19.217 21 16.862 21z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 8l5 4 5-4"
                />
              </svg>
            </div>
            <p className="text-center text-gray-600 text-sm">
              {content[selectedLanguage].footerNote}
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ContactUs;
