import Hero from "../components/Hero";
import Text from "../components/Text";
import { Button } from "../components/Button";

const DonationPage = () => {
  return (
    <div className="mx-auto mt-0">
      <Hero title="Donate">
        <div className="pr-0 md:pr-20">
          <Text size="b1" className="mt-2 mb-8">
          Invest in the next Generation of Tech Talent
          </Text>

        </div>
      </Hero>

      <Text className="text-center pt-16" size='h1'>Here's what you donation can do.</Text>
        <div className="md:flex mx-5  my-2 ">
            <div className="w-16">
            {/* Used to imitate padding on flex-row-reverse best I could find to keep aligned onreverse */}
            </div>
            <div className="w-full shadow-xl border-2 border-gray-100 p-8">
            <Text className="p-4 text-black " size="h3">
            Donate $50.00
            </Text>
            <Text className="pb-4 px-4 text-gray-500" size="b1">
            Helps one student attend a Saturday class that teaches them how to develop a website or create a logo.
                <Button
                className="mt-8"
                href="https://secure.givelively.org/donate/we-code-kc"
                >
                Donate $50.00
                </Button>
            </Text>
            </div>
        </div>
        <div className="md:flex mx-5  my-2 ">
            <div className="w-16">
            {/* Used to imitate padding on flex-row-reverse best I could find to keep aligned onreverse */}
            </div>
            <div className="w-full shadow-xl border-2 border-gray-100 p-8">
            <Text className="p-4 text-black " size="h3">
            Donate $100.00
            </Text>
            <Text className="pb-4 px-4 text-gray-500" size="b1">
            Provides internship opportunity for a high school student to develop leadership and employable skills for a job job in tech
                <Button
                className="mt-8"
                href="https://secure.givelively.org/donate/we-code-kc"
                >
                Donate $100.00
                </Button>
            </Text>
            </div>
        </div>
        <div className="md:flex mx-5  my-2 ">
            <div className="w-16">
            {/* Used to imitate padding on flex-row-reverse best I could find to keep aligned onreverse */}
            </div>
            <div className="w-full shadow-xl border-2 border-gray-100 p-8">
            <Text className="p-4 text-black " size="h3">
            Donate $500.00
            </Text>
            <Text className="pb-4 px-4 text-gray-500" size="b1">
            Supports one student through a n 8-week game development course
                <Button
                className="mt-8"
                href="https://secure.givelively.org/donate/we-code-kc"
                >
                Donate $500.00
                </Button>
            </Text>
            </div>
        </div>
        <div className="md:flex mx-5  my-2 mb-14 ">
            <div className="w-16">
            {/* Used to imitate padding on flex-row-reverse best I could find to keep aligned onreverse */}
            </div>
            <div className="w-full shadow-xl border-2 border-gray-100 p-8">
            <Text className="p-4 text-black " size="h3">
            Donate $1000.00
            </Text>
            <Text className="pb-4 px-4 text-gray-500" size="b1">
            Purchases a laptop helping a scholar hit the ground running when graduating from our program going into the workforce
                <Button
                className="mt-8"
                href="https://secure.givelively.org/donate/we-code-kc"
                >
                Donate $1000.00
                </Button>
            </Text>
            </div>
        </div>
  </div>
  );
};

export default DonationPage;
