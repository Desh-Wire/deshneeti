import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Image from "next/image"


const AboutUs = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="flex flex-col justify-between my-12 gap-y-14">
          {/* Heading */}
          <h1 className="font-bold text-3xl">
            About Us
          </h1>
          {/* Content */}
          <div>
            {/* Note * Own */}
            <div className="flex justify-between md:flex-row md:gap-x-8 flex-col gap-y-8">
              {/* Note */}
              <div className="flex flex-col justify-between gap-y-14 relative">
                <span className="text-[40rem] text-[#ece1c6] absolute -z-10 -top-10 left-0">
                  <Image
                  src='https://img.icons8.com/?size=100&id=38968&format=png&color=000000'
                  alt="Note"
                  width={300}
                  height={300}
                  className="object-cover opacity-15"
                  />
                </span>
                <h2 className="font-bold text-2xl">
                  Note from the Founding Editors
                </h2>
                <div className="flex flex-col justify-between gap-y-6">
                  <p>
                    Instead of the traditional models of family-owned, corporate-funded and controlled or advertising-driven newspapers, websites and TV channels, can we reimagine the media as a joint venture in the public sphere between journalists, readers and a concerned citizenry? One in which decisions over what to cover and how, who to hire and where to send a correspondent or photographer, are taken by editors on the basis of professional judgment, without worrying about what a proprietor or politician, official or advertiser might think or want.
                  </p>
                  <p>
                    In a democracy, this is the least that readers or viewers expect. And yet, the business model that underpins most Indian news media seldom allows editors the freedom they need. Worse, it has slowly eroded professional standards of reporting and contaminated the media ecosystem with toxic practices like rampant editorialising, paid news and ‘private treaties’. Increasingly, media houses are reluctant to spend money on news-gathering; and as they develop secondary business interests and ‘no go areas’ proliferate, their newsrooms suffer further collateral damage – especially as these interests often depend on proximity to politicians and bureaucrats. Is it any wonder that readers have begun to notice the erosion of professional standards, ethical breaches and fall in quality? They now feel shortchanged.
                  </p>
                  <p>
                    The founding premise of <em>The Wire</em> is this: if good journalism is to survive and thrive, it can only do so by being both editorially and financially independent. This means relying principally on contributions from readers and concerned citizens who have no interest other than to sustain a space for quality journalism.
                  </p>
                  <p>
                    Siddharth Varadarajan
                    <br />
                    Sidharth Bhatia<br />
                    MK Venu<br />
                    Founding Editors of <em>The Wire</em>
                  </p>
                  <p>
                    May 11, 2015
                  </p>
                </div>
              </div>
              {/* Own */}
              <div className="bg-[#ece1c6] p-6 max-w-[40em] flex flex-col gap-y-8 max-h-fit">
                <p className="text-3xl font-bold ">
                  Who Owns DeshNeeti ?
                </p>
                <p>
                  The Wire commenced publication on May 11, 2015, and is run by the Foundation for Independent Journalism (FIJ), a not-for-profit company incorporated on September 16, 2015 under Section 8 of the Companies Act. The FIJ’s Corporate Identification Number is (CIN) U74140DL2015NPL285224. Its board of directors comprises M.K. Venu, Sidharth Bhatia and Siddharth Varadarajan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default AboutUs