import type { NextPage } from "next";
import Hero from "../components/Hero";
import Text from "../components/Text";
import EventCard from "../components/EventCard";
import imgStyles from  "../styles/imageGallery.module.scss"
const Events: NextPage = () => {
  return (
    <div className="mx-auto">
      <div className="max-h-[70vh] overflow-hidden">
        <Hero title="Events">
          <>
            <h2 className="tracking-tight">
              Develop your tech skills in one of our many courses below
            </h2>
            <br />
            <Text size="b1" className="mt-2">
              WeCode/KC is committed to helping Kansas City's youth and young
              adults develop their skills and knowledge to prepare for a career
              in technology. Our classes and clubs below are designed for
              various age groups and skill levels.
              <br />
              Our adult programs include wrap-around services and mentorships
              with professionals and business owners to further assist in the
              full-scope of skill-building and knowledge development that is
              needed for a career in the field of technology
              <br />
            </Text>
          </>
        </Hero>
      </div>
      <div className="mx-auto mt-4 container md:flex">
        <EventCard
          title="DECONSTRUCTED | WeCode KC featuring Grammy award winning producer J. White"
          href="https://www.eventbrite.com/e/deconstructed-wecode-kc-featuring-grammy-award-winning-producer-j-white-registration-431488964107"
        >
          Students who attend this workshop will learn how to create a #1 Hit
          song with Grammy Award winning music producer and KC native J. White.
          He is the producer of several chart-topping tracks, including "Bodak
          Yellow", "I Like It", "Money" & more! Your student won't want to miss
          this INCREDIBLE opportunity.
        </EventCard>
        <EventCard
          title="Techstronauts Coding Club by WeCode KC!"
          href="https://www.eventbrite.com/e/techstronauts-coding-club-by-wecode-kc-tickets-387267386177"
        >
          W﻿eCode KC is collaborating with Cyber Creationz Tech to bring website
          design concepts to our Website Development students. Students who join
          the Website Development classes will be able to expand on building
          their web pages by understanding concepts related to domain names and
          launching an actual website onto the world wide web. If your student
          wants to build websites, they won't want to miss this class!
        </EventCard>
      </div>


    <div className={`${imgStyles.tabs} pt-10`}>
    <input type="radio" id='summer' name='mytabs' checked={true} />
    <label htmlFor='summer'>Summer of Code 2022</label>
    <div className={imgStyles.tab}>
      <div className="container py-8 mx-auto">
          <div className={imgStyles.imgs +" flex flex-wrap gap-2 md:gap-4 items-center justify-center"}>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\SummerOfCode2022\0D089E19-0003-4C90-98E2-2EB332370FE6_1_105_c.jpeg" alt="Summer of Code 2022"/>
              </div>
              <div >
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\SummerOfCode2022\02AA770C-6ED4-4A25-9021-43E6461C42BA_1_105_c.jpeg" alt="Summer of Code 2022"/>
              </div>
              <div >
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\SummerOfCode2022\03D9DBE0-20D6-41DA-B13A-24DF66B16D7C_1_106_c.jpeg" alt="Summer of Code 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\SummerOfCode2022\4B2CD443-B43A-4B47-955B-6FABEFA51A23_1_105_c.jpeg" alt="Summer of Code 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\SummerOfCode2022\25CFF5D3-3881-4E61-B0E2-A6F9A8A5A79C_1_106_c.jpeg" alt="Summer of Code 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\SummerOfCode2022\065E821A-BDC9-4184-ADE4-41B567731806_1_106_c.jpeg" alt="Summer of Code 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\SummerOfCode2022\5379144E-7307-41D0-B761-ABB1314255A4_1_102_o.jpeg" alt="Summer of Code 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\SummerOfCode2022\A98A846B-6D1E-4758-B4DF-32EF383610D9_1_105_c.jpeg" alt="Summer of Code 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\SummerOfCode2022\B401B97E-0832-427A-9886-2C9DDD8A5ABF_1_106_c.jpeg" alt="Summer of Code 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\SummerOfCode2022\C1B0C24D-F68F-4280-B583-62CF7B9079E1_1_105_c.jpeg" alt="Summer of Code 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\SummerOfCode2022\C659C4B9-F5C2-40D3-B30B-5189C0938578_1_105_c.jpeg" alt="Summer of Code 2022"/>
              </div>
              <div>
                  <img className="object-fill  w-96 lg:w-72 lg:h-72 rounded-lg " src="images\SummerOfCode2022\C3993557-854F-4210-8685-B4787A0A51A7_1_105_c.jpeg" alt="Summer of Code 2022"/>
              </div>
          </div>
      </div>
    </div>
    <input type="radio" id='tedxkc' name='mytabs' checked={true}/>
    <label htmlFor='tedxkc'>TedX KC</label>
    <div className={imgStyles.tab}>
      <div className="container px-4 py-10">
          <div className={imgStyles.imgs +" flex flex-wrap gap-5 items-center justify-center"}>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\TedXKC\1A588CAC-A7C8-4058-91C1-CE31F0F269B7_1_105_c.jpeg" alt="TedX KC"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\TedXKC\7F98F605-9303-412B-BF34-3CCB09701B16_1_105_c.jpeg" alt="TedX KC"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\TedXKC\8BC061C2-4F5B-4704-86B2-2A8666AF4C6F_1_105_c.jpeg" alt="TedX KC"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\TedXKC\8CF7DAB7-769C-4DC9-97E3-9EF83B6391F8_1_105_c.jpeg" alt="TedX KC"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\TedXKC\257F109B-8923-4850-819F-C49B6B5DD266_1_105_c.jpeg" alt="TedX KC"/>
              </div>
              <div>
                  <img className="object-fill  w-96 lg:w-72 lg:h-72 rounded-lg " src="images\TedXKC\1809D040-2006-409C-9B65-30990FB3D33B_1_105_c.jpeg" alt="TedX KC"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\TedXKC\B17CF6D2-18BF-4195-86ED-5D5FE3BC87B9_1_105_c.jpeg" alt="TedX KC"/>
              </div>
              <div>
                  <img className="object-fill  w-96 lg:w-72 lg:h-72 rounded-lg " src="images\TedXKC\D9F76D6B-8624-4605-BA7E-1FB29CB583FA_1_105_c.jpeg" alt="TedX KC"/>
              </div>
          </div>
      </div>
    </div>
    <input type="radio" id='jwhite' name='mytabs' checked={true} />
    <label htmlFor='jwhite'>J. White Did It</label>
    <div className={imgStyles.tab}>
      <div className="container py-8 mx-auto">
          <div className={imgStyles.imgs +" flex flex-wrap gap-2 md:gap-4 items-center justify-center"}>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\0D5B0831-5259-4C6A-83F6-F21CF33D1C51_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\5AE1B621-14AD-4398-969D-B5C8248E62A4_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\6A3E9D9B-B62C-4DDB-AA57-993C6B54BF66_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\7AFBC070-EF00-4306-A412-25DFF78620EE_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\7B8A3357-9127-470A-A1AE-09C3FE50D97C_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\7E26B627-F0D5-4889-81DE-48A361BB08C5_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\7FE1C422-6721-49E6-BDE6-2C25355DA96F_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\8BBB9945-CEE0-44E8-BE21-37BD139146C6_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\09C53193-F921-4756-BF5F-9E271E5ADF4B_1_106_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\17E5B2E5-8B99-4116-AEDD-EF9757493839_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\36F1BB27-58D4-415B-89CD-F169B88D25E9_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\53B8565B-13C5-498B-9001-3120F070614C_1_106_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\066EBB84-986C-4C88-8D74-F6CB32A9C00B_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\206D1293-B26C-4612-9D3A-BF2921EC3730_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\220F9C3D-4BB4-497E-BEA2-8DC8D5DAD026_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\521B17ED-9B81-42BE-B248-5893BABE0D89_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\607FF1BE-D892-4A3F-A5B5-598B62DAB6B6_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\671BFC89-E640-40B1-94A0-A23D11C6C6E3_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\6132AF90-021B-42A9-BFA9-E6BAB6881AAD_1_105_c.jpeg" alt="J. White Event"/>
              </div>              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\6760F8DC-0480-4D95-8F62-4180D7428740_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\997206FC-3414-427A-8228-0ECB52D48912_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\4103928E-C83C-464D-89F9-6C13864A6004_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\A29FD022-5F9F-4253-8101-56BCD0C70462_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\ABFB9316-B6D9-46A9-A47B-A114E673277E_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\B5A1332B-C655-43E3-92E2-7EDDD5F87D1D_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\B7E32532-D912-4A48-9733-D701871F3376_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\B835798A-2138-46FB-BFED-A94EA4316249_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\C26CD23E-5920-407E-931B-004C83336CEF_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\D2A2961C-9F2C-4713-B95A-CE3681D81F01_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\D83E4B5C-BA85-4C29-ADE2-EE5D94C56763_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\E38F444B-7BFD-409F-8955-BD52F768C71B_1_105_c.jpeg" alt="J. White Event"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\JWhiteDidIt\E8528E63-B4B2-4A4A-BBD4-525DDE41981A_1_105_c.jpeg" alt="J. White Event"/>
              </div>
          </div>
      </div>
    </div>

    </div>

    </div>
  );
};

export default Events;
