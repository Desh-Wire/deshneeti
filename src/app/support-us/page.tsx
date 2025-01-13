'use client'

import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { useLanguage } from "../LanguageContext"
import { Card, CardContent } from "@/components/ui/card"

const SupportUs = () => {
  const { language } = useLanguage()

  const content: Record<'en' | 'hi' | 'ur', {
    title: string
    description: string
    whySupport: string
    membershipTitle: string
    joinNow: string
    tiers: {
      premium: {
        name: string
        price: string
        features: string[]
      }
      standard: {
        name: string
        price: string
        features: string[]
      }
      basic: {
        name: string
        price: string
        features: string[]
      }
    }
    features: string[]
    note: string
  }> = {
    en: {
      title: "Support DESH NEETI",
      description: "Join us in our mission to bring you quality news and insights. By becoming a member, you support independent journalism while gaining access to exclusive content and features.",
      whySupport: "Your membership helps us maintain our editorial independence and continue delivering reliable, in-depth news coverage. Every subscription directly contributes to our journalism.",
      membershipTitle: "Membership Tiers",
      joinNow: "Join Now",
      tiers: {
        premium: {
          name: "Premium Tier",
          price: "₹119/month",
          features: [
            "Exclusive members-only videos",
            "Priority response to your comments",
            "Members-only live chat access",
            "Social media connection opportunities",
            "Custom emojis for comments and live chat",
            "Distinctive loyalty badges",
            "Member shout-outs",
            "Access to photo updates and status posts"
          ]
        },
        standard: {
          name: "Standard Tier",
          price: "₹89/month",
          features: [
            "Engage in live discussions",
            "Special commenting privileges",
            "Loyalty recognition system",
            "Regular community updates"
          ]
        },
        basic: {
          name: "Basic Tier",
          price: "₹59/month",
          features: [
            "Enhanced community participation",
            "Basic loyalty badges",
            "Access to select member features"
          ]
        }
      },
      features: [
        "Flexible monthly subscription",
        "Cancel anytime",
        "Regular updates and new perks",
        "Transparent pricing",
        "Seamless community integration"
      ],
      note: "All memberships are recurring payments with the flexibility to cancel at any time. Our creator team continuously works to enhance and update membership perks to provide the best possible experience for our supporters."
    },
    hi: {
      title: "देश नीति का समर्थन करें",
      description: "गुणवत्तापूर्ण समाचार और अंतर्दृष्टि प्रदान करने के हमारे मिशन में हमारा साथ दें। सदस्य बनकर, आप स्वतंत्र पत्रकारिता का समर्थन करते हैं और विशेष सामग्री और सुविधाओं तक पहुंच प्राप्त करते हैं।",
      whySupport: "आपकी सदस्यता हमें हमारी संपादकीय स्वतंत्रता बनाए रखने और विश्वसनीय, गहन समाचार कवरेज प्रदान करने में मदद करती है। प्रत्येक सदस्यता सीधे हमारी पत्रकारिता में योगदान करती है।",
      membershipTitle: "सदस्यता श्रेणियां",
      joinNow: "अभी जुड़ें",
      tiers: {
        premium: {
          name: "प्रीमियम श्रेणी",
          price: "₹119/माह",
          features: [
            "विशेष सदस्य-केवल वीडियो",
            "आपकी टिप्पणियों पर प्राथमिकता प्रतिक्रिया",
            "सदस्य-केवल लाइव चैट एक्सेस",
            "सोशल मीडिया कनेक्शन अवसर",
            "टिप्पणियों और लाइव चैट के लिए कस्टम इमोजी",
            "विशिष्ट लॉयल्टी बैज",
            "सदस्य शाउट-आउट",
            "फोटो अपडेट और स्टेटस पोस्ट तक पहुंच"
          ]
        },
        standard: {
          name: "स्टैंडर्ड श्रेणी",
          price: "₹89/माह",
          features: [
            "लाइव चर्चाओं में भाग लें",
            "विशेष टिप्पणी अधिकार",
            "लॉयल्टी मान्यता प्रणाली",
            "नियमित समुदाय अपडेट"
          ]
        },
        basic: {
          name: "बेसिक श्रेणी",
          price: "₹59/माह",
          features: [
            "बेहतर समुदाय भागीदारी",
            "बेसिक लॉयल्टी बैज",
            "चुनिंदा सदस्य सुविधाओं तक पहुंच"
          ]
        }
      },
      features: [
        "लचीली मासिक सदस्यता",
        "कभी भी रद्द करें",
        "नियमित अपडेट और नई सुविधाएं",
        "पारदर्शी मूल्य निर्धारण",
        "सहज समुदाय एकीकरण"
      ],
      note: "सभी सदस्यताएं आवर्ती भुगतान हैं जिन्हें किसी भी समय रद्द करने की सुविधा है। हमारी क्रिएटर टीम हमारे समर्थकों को सर्वोत्तम संभव अनुभव प्रदान करने के लिए सदस्यता लाभों को लगातार बेहतर और अपडेट करती है।"
    },
    ur: {
      title: "دیش نیتی کی حمایت کریں",
      description: "معیاری خبریں اور بصیرت فراہم کرنے کے ہمارے مشن میں ہمارے ساتھ شامل ہوں۔ رکن بن کر، آپ آزاد صحافت کی حمایت کرتے ہیں جبکہ خصوصی مواد اور خصوصیات تک رسائی حاصل کرتے ہیں۔",
      whySupport: "آپ کی رکنیت ہمیں اپنی تحریری آزادی برقرار رکھنے اور قابل اعتماد، گہری خبروں کی کوریج فراہم کرنے میں مدد کرتی ہے۔ ہر سبسکرپشن براہ راست ہماری صحافت میں حصہ ڈالتی ہے۔",
      membershipTitle: "رکنیت کی سطحیں",
      joinNow: "ابھی شامل ہوں",
      tiers: {
        premium: {
          name: "پریمیم سطح",
          price: "₹119/ماہ",
          features: [
            "خصوصی ممبر ویڈیوز",
            "آپ کے تبصروں پر ترجیحی جواب",
            "صرف ممبرز کے لیے لائیو چیٹ",
            "سوشل میڈیا کنکشن کے مواقع",
            "تبصروں اور لائیو چیٹ کے لیے حسب ضرورت ایموجیز",
            "منفرد وفاداری کے بیج",
            "ممبر شاؤٹ آؤٹس",
            "تصاویر اپڈیٹس اور سٹیٹس پوسٹس تک رسائی"
          ]
        },
        standard: {
          name: "معیاری سطح",
          price: "₹89/ماہ",
          features: [
            "لائیو بحث میں شرکت",
            "خصوصی تبصرہ کے حقوق",
            "وفاداری کی شناخت کا نظام",
            "باقاعدہ کمیونٹی اپڈیٹس"
          ]
        },
        basic: {
          name: "بنیادی سطح",
          price: "₹59/ماہ",
          features: [
            "بہتر کمیونٹی شرکت",
            "بنیادی وفاداری کے بیج",
            "منتخب ممبر خصوصیات تک رسائی"
          ]
        }
      },
      features: [
        "لچکدار ماہانہ سبسکرپشن",
        "کسی بھی وقت منسوخ کریں",
        "باقاعدہ اپڈیٹس اور نئے فوائد",
        "شفاف قیمتیں",
        "ہموار کمیونٹی انضمام"
      ],
      note: "تمام رکنیتیں بار بار ادائیگیاں ہیں جنہیں کسی بھی وقت منسوخ کرنے کی سہولت ہے۔ ہماری تخلیق کار ٹیم اپنے حامیوں کو بہترین ممکنہ تجربہ فراہم کرنے کے لیے مسلسل رکنیت کے فوائد کو بہتر اور اپ ڈیٹ کرتی ہے۔"
    }
  }

  // Ensure language is a valid key; fallback to 'en'
  const selectedLanguage = (language as 'en' | 'hi' | 'ur') || 'en'

  return (
    <div>
      <MaxWidthWrapper>
        <div className="flex flex-col justify-between my-12 gap-y-8">
          {/* Heading */}
          <h1 className="font-bold text-4xl text-center text-gray-800">
            {content[selectedLanguage].title}
          </h1>

          {/* Description */}
          <div className={`text-lg text-gray-600 ${selectedLanguage === "ur" ? "text-right" : ""}`}>
            <p>{content[selectedLanguage].description}</p>
            <p className="mt-4">{content[selectedLanguage].whySupport}</p>
          </div>

          {/* Membership Tiers */}
          <div className="mt-8">
            <h2 className={`text-2xl font-bold mb-6 ${selectedLanguage === "ur" ? "text-right" : ""}`}>
              {content[selectedLanguage].membershipTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(content[selectedLanguage].tiers).map(([key, tier]) => (
                <Card key={key} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className={`p-6 ${selectedLanguage === "ur" ? "text-right" : ""}`}>
                    <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-4">{tier.price}</p>
                    <ul className={`list-disc ${selectedLanguage === "ur" ? "mr-4" : "ml-4"}`}>
                      {tier.features.map((feature, index) => (
                        <li key={index} className="text-gray-600 mb-2">{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Features */}
          <div className={`bg-gray-50 p-6 rounded-lg mt-8 ${selectedLanguage === "ur" ? "text-right" : ""}`}>
            <h3 className="text-xl font-bold mb-4">Features</h3>
            <ul className={`grid grid-cols-2 gap-4 ${selectedLanguage === "ur" ? "mr-4" : "ml-4"}`}>
              {content[selectedLanguage].features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>

          {/* Note */}
          <div className={`text-sm text-gray-500 mt-8 ${selectedLanguage === "ur" ? "text-right" : ""}`}>
            <p>{content[selectedLanguage].note}</p>
          </div>

          {/* Join Now Button */}
          <div className="text-center mt-8">
            <a
              href="https://www.youtube.com/@DESHNEETI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {content[selectedLanguage].joinNow}
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default SupportUs