import { Hero } from "../components/Hero";
import Text from "../components/Text";
import ResourceCard from "../components/ResourceCard";

const NewsPage = () => {
  return (
    
    <div className="mx-auto">
      <div className="pt-10 lg:pt-12 pb-10 lg:pb-12">
      <Text size="h1" className="text-center pb-10">WeCodeKC in the News</Text>

        <div className="container mx-auto">
            <div className="flex flex-wrap mx-4 items-stretch justify-center gap-10">
                <ResourceCard
                    title="The Community Voice"
                    url="images\newshero.png"
                    href="https://www.communityvoiceks.com/2022/06/22/wecodekc-is-teaching-coding-and-computer-programming-to-build-a-smarter-savvier-kansas-city/"
                >
                WeCodeKC is teaching coding and computer programming to build a smarter, savvier Kansas City 
                </ResourceCard>
                <ResourceCard
                    title="KCTV5 News"
                    url="images\kctv5.png"
                    href="https://www.kctv5.com/2022/08/04/wecodekc-hosts-summer-code-camp-youth-stem-awaits-whats-next-permanent-location/"
                >
                WeCodeKC hosts ‘Summer of Code’ camp for youth in STEM, awaits what’s next for permanent location                
                </ResourceCard>
                <ResourceCard
                    title="Startland News"
                    url="images\startlandnews.png"
                    href="https://www.startlandnews.com/2019/12/wecodekc/"
                >
                Two tech founders identified a coding talent gap; they launched WeCodeKC to help fill it
                </ResourceCard>
                <ResourceCard
                    title="The Plug"
                    url="images\theplug.png"
                    href="https://tpinsights.com/weathering-covid-19s-impact-on-their-operations-black-women-tech-ecosystem-leaders-adapt-and-adjust/"
                >
                Weathering COVID-19’s Impact on Their Operations, Black Women Tech Ecosystem Leaders Adapt and Adjust                </ResourceCard>
                <ResourceCard
                    title="NPR News"
                    url="images\nprnews.png"
                    href="https://www.kcur.org/news/2021-06-17/for-juneteenth-here-are-8-kansas-city-organizations-getting-a-boost-from-give-black-kc"
                >
                For Juneteenth, Here Are 8 Kansas City Organizations Getting A Boost From Give Black KC
                </ResourceCard>


        </div>
      </div>
    </div>
    </div>
  );
};

export default NewsPage;
