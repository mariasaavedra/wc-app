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
   
      <div className="mx-auto mt-8 container md:flex">
        <EventCard
          title="WeCode/KC Volunteer Round Up & Happy Hour"
          href="https://www.eventbrite.com/e/wecodekc-volunteer-round-up-happy-hour-tickets-490656576027"
        >
        Interested in Volunteering? Click here to join us on Volunteer Round-Up Night to learn more.
        </EventCard>
     {/* 
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
      
    */}
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


    <input type="radio" id='proxinterns' name='mytabs' checked={true} />
    <label htmlFor='proxinterns'>ProX Interns</label>
    <div className={imgStyles.tab}>
      <div className="container py-8 mx-auto">
          <div className={imgStyles.imgs +" flex flex-wrap gap-2 md:gap-4 items-center justify-center"}>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\0ACF1EFB-197E-4DC9-87E6-754D676C1637_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\0EE3B308-385F-49BF-8928-C8D9F13BA925_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\1A8EDEF7-47F1-40C0-BF44-F49E097CE1A7_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\1AFF0D01-E847-4D90-A569-9A565E4F28AE_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\2B847008-8F49-43AE-9A21-CF8AB634437C_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\2EB94A32-E696-4A60-BB9B-801D133CFD01_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\3FA8324F-1D4B-44E2-A3D7-129E074A854F_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\4D02AC98-81B0-4C51-B3DD-E615C35097F4_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\4E77392C-9996-4047-B35D-2BF02A852DEF_1_102_o.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\4F4FE7BE-57F9-478C-B9C0-8F6F03E18075_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\05B65461-06EC-4D8B-BD8D-20D291C3AAF7_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\6B02DF90-6152-446C-AFA1-F5B95CCAC509_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\6CEFEC0B-8DD1-44A9-9152-CD7A1C18EF16_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\6DD40FDC-69A1-492A-BC9B-0B182E5771F4_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\6EEE6F5D-4620-473E-A5D1-0A55B4D33D8F_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\6F726B84-E607-4446-A7CA-8CEB66CADBAA_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\6FFDF24E-82D1-4D96-B198-402A7FAE2065_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\7D591C99-134B-4AE8-8DE9-6BFF849718DE_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\7DEC7D9E-697B-4601-AA2F-A901C9A2D572_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\8B1B68B5-91B1-41E8-AC76-7FD6EADEA34F_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\8B9CDDBB-4B24-4BD4-A4B8-6091DEA5A3CA_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\8C7DB85A-E218-4937-BAC9-EA6B032EC45A_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\9C4533E7-B71C-4886-A273-E504F3F569AD_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\9D80E95A-CC61-4262-876E-ED36942EAF7A_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\10AD5506-C0AE-46D2-B809-A2779A3E60E8_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\12A035AE-DB4F-4689-BD47-F9BC73E51338_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\25F5400E-7E5C-4955-908F-FFC87816A6A3_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\43FCDFA3-2A31-4DEA-9A88-C06C3803443B_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\46A9010D-DE77-4FA4-9577-BD6B2354B3DC_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\60C666BB-E611-4789-87B1-B86C4F070516_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\62A85113-521C-4D92-995B-D1D9AE1DB08E_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\68B77F3F-EDA3-4628-84E9-D63E17B19FA4_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\84E4E906-D77B-40D0-AA52-8C4758855A26_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\92F478F9-0C31-4502-A629-CA167B17996A_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\97E3656E-E7A0-4AD3-AB14-DFA48F25BB81_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\171EF7E9-73EB-4EAE-A805-630D6FCD7ADB_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\250F7D8A-BCCE-4601-8923-8C26CA231667_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\270D0680-EE52-4648-82DC-3E887BFFA864_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\404A563E-F044-4A48-8C97-6474C8F7F0EB_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\453C6A5B-C069-432B-AD8E-E155A00ACF8D_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\778E24ED-1384-41DC-9D0D-54944FAA4493_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\846B360E-2738-4CE7-B0DA-6A0DABFB2671_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\923DDCBC-9500-4174-BAC7-04683F070827_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\1093B2AD-6F9D-44DF-9A80-38D9699A6405_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\1590E300-53C6-41D1-9342-F069A04AEB8D_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\2551BFB8-3DDB-4C3C-8425-8761996D7BFA_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\60857A61-FAFE-4531-9CC9-BA354552A0F1_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\66674E8B-9040-48D5-8E5D-06A961774998_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\6337725C-D320-4AAD-85C6-838F8D2B9F3D_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\25451361-1E3C-43C5-AF47-07388F8787AB_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\51977640-6DE6-4745-8210-1509E50C87CB_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\70877564-F90E-4751-BDEA-24DB6A5CEFAC_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\A0EA66D5-4893-4F59-8CBF-CB7B3D5817DD_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\A4A39B28-97BB-4177-A083-23708294F7C4_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\A29AF208-9F5B-4532-8D34-C3806348BCB3_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\A61CD439-824B-4836-97F6-EC108539F182_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\A998E4EC-B574-4C32-8DC3-4516E5665B02_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\A5567AE7-AF61-4388-BD67-D6F387A1718D_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\AD2B59F5-0D40-4945-9822-803BECC4DE05_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\AE0558EA-59A7-4091-A099-4A6B55F771EA_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\B3B728C8-D057-4D58-AE17-869297473705_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\B9E50C92-62C5-482B-8FBB-57D8A8C15815_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\B699C40E-80B5-4A8C-AB29-943B9D2CA192_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\C6B624C9-3938-47D1-A29F-6218075E518E_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\C7EE758F-EE8A-4A24-9771-F98A2FB8180F_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\C8F24D39-9315-4824-9915-0C5B7AE7C1F8_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\D3EAA504-D14D-44C0-A3D7-44EFC40264D2_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\D8A52ED7-A476-42F2-A767-EA3111390743_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\D7441421-6D96-4281-81DD-3ED8A749D34F_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\DA275980-8DDE-499B-86FB-334C842DB2BC_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\DD045198-8A0A-4724-9282-E71A2BE00F82_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\DE0D7638-6599-47F2-86CC-1E2318983F7E_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\E3E28AAF-8489-43AA-A82A-B8789F176C0D_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\EAAF5F70-59FA-49A7-BA0C-B6668ADB6354_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\EB13866A-05D5-4995-AB04-77954647EE9C_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\ProXInterns\F117E08F-15B5-4BAB-8E86-0A700F5F3A80_1_105_c.jpeg" alt="ProX Interns 2022"/>
              </div>
          </div>
      </div>
    </div>
    <input type="radio" id='geeksquad' name='mytabs' checked={true} />
    <label htmlFor='geeksquad'>WeCodeKC & Geek Squad</label>
    <div className={imgStyles.tab}>
      <div className="container py-8 mx-auto">
          <div className={imgStyles.imgs +" flex flex-wrap gap-2 md:gap-4 items-center justify-center"}>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\WeCodeGeekSquad\8D584DEE-349C-4FD4-96DE-2E4E68821047_1_105_c.jpeg" alt="WeCodeKC & Geek Squad"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\WeCodeGeekSquad\9D53D637-B83A-4A76-9F56-6627431BBA11_1_105_c.jpeg" alt="WeCodeKC & Geek Squad"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\WeCodeGeekSquad\029A6EFB-46FE-4FE2-8F95-AC6EA58DF65B_1_106_c.jpeg" alt="WeCodeKC & Geek Squad"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\WeCodeGeekSquad\77BA48D5-0A23-4C6F-9081-CBB24FBE5F0A_1_105_c.jpeg" alt="WeCodeKC & Geek Squad"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\WeCodeGeekSquad\097E4AF7-8397-4FB1-9175-0F4692FDCE1C_1_105_c.jpeg" alt="WeCodeKC & Geek Squad"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\WeCodeGeekSquad\869C1E44-AE88-472A-A30A-8C8EC374F091_1_106_c.jpeg" alt="WeCodeKC & Geek Squad"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\WeCodeGeekSquad\03198B0A-D9C0-481C-9490-2E323FFC04C3_1_105_c.jpeg" alt="WeCodeKC & Geek Squad"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\WeCodeGeekSquad\765046D3-C8A9-4A2C-96B1-E26A38305217_1_105_c.jpeg" alt="WeCodeKC & Geek Squad"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\WeCodeGeekSquad\A65DB657-147A-4A4A-BF4D-F0D789D5C891_1_105_c.jpeg" alt="WeCodeKC & Geek Squad"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\WeCodeGeekSquad\EE23A751-FE95-49B5-B23E-ACAC47B126C2_1_105_c.jpeg" alt="WeCodeKC & Geek Squad"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\WeCodeGeekSquad\EF42E4B4-579D-483C-B451-187BE59CDFCB_1_105_c.jpeg" alt="WeCodeKC & Geek Squad"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\WeCodeGeekSquad\F1295670-A268-49B7-AE3A-2EF33296D42F_1_105_c.jpeg" alt="WeCodeKC & Geek Squad"/>
              </div>
          </div>
      </div>
    </div>
    <input type="radio" id='oct12022' name='mytabs' checked={true}/>
    <label htmlFor='oct12022'>Oct 1st, 2022</label>
    <div className={imgStyles.tab}>
      <div className="container px-4 py-10">
          <div className={imgStyles.imgs +" flex flex-wrap gap-5 items-center justify-center"}>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\Oct1st2022\20221001_102755.jpg" alt="October 1st, 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\Oct1st2022\20221001_102939.jpg" alt="October 1st, 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\Oct1st2022\20221001_104009.jpg" alt="October 1st, 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\Oct1st2022\20221001_110929.jpg" alt="October 1st, 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\Oct1st2022\imagejpeg_0.jpg" alt="October 1st, 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\Oct1st2022\imagejpeg_0(1).jpg" alt="October 1st, 2022"/>
              </div>
          </div>
      </div>
    </div>
    <input type="radio" id='jun42022' name='mytabs' checked={true}/>
    <label htmlFor='jun42022'>June 4th, 2022</label>
    <div className={imgStyles.tab}>
      <div className="container px-4 py-10">
          <div className={imgStyles.imgs +" flex flex-wrap gap-5 items-center justify-center"}>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\June42022\0C2B9662-0910-46D9-B843-5B652F05DAA7_1_105_c.jpeg" alt="June 4th, 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\June42022\0F8B95F5-55D4-47FB-8ECF-298AAA04D163_1_105_c.jpeg" alt="June 4th, 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\June42022\6C6580A1-33BE-49E3-9AFE-351D83B11F71_1_105_c.jpeg" alt="June 4th, 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\June42022\44BAD168-891E-4CAB-B1FF-91CAA3D928D9_1_105_c.jpeg" alt="June 4th, 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\June42022\86FF2E5A-9C6A-4C74-A563-A9DC70B05FF0_1_105_c.jpeg" alt="June 4th, 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\June42022\504C1D41-809B-44D5-BDC5-FCF4C88BF0AA_1_105_c.jpeg" alt="June 4th, 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\June42022\BCC2C7FC-8278-444E-8D3F-18CABADC7A1F_1_105_c.jpeg" alt="June 4th, 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\June42022\BF1DC20D-3FCF-46D4-A314-818CBDBD5BBE_1_105_c.jpeg" alt="June 4th, 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\June42022\D69D934D-3C7F-47A8-AB92-F1E7F2050968_1_105_c.jpeg" alt="June 4th, 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\June42022\D9535430-3948-422E-918B-767132200172_1_105_c.jpeg" alt="June 4th, 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\June42022\E1B84F49-79AF-45BF-A473-86CB36D3BE33_1_105_c.jpeg" alt="June 4th, 2022"/>
              </div>
              <div>
                  <img className="object-fill w-96 lg:w-72 lg:h-72 rounded-lg " src="images\June42022\E54E5A5A-B738-45B0-98DA-D3E229638528_1_106_c.jpeg" alt="June 4th, 2022"/>
              </div>

          </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Events;
