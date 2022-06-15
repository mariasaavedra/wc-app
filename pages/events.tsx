import type { GetStaticProps, NextPage } from "next";
import Hero from "../components/Hero";
import Text from "../components/Text";
import EventCard from "../components/EventCard";

const BASE_URL = "http://www.eventbriteapi.com/v3";
const TOKEN = process.env.NEXT_PUBLIC_EVENTBRITE_TOKEN; // @TODO -> move this into secret.

console.log("env", process.env);

export const getStaticProps: GetStaticProps = async () => {
  let data;
  let results;

  const orgId = "354358193503";
  const init = async () => {
    const res = await fetch(`${BASE_URL}/users/me/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    data = await res.json();
  };

  const fetchEventsByOrgId = async () => {
    const res = await fetch(
      `${BASE_URL}/organizations/${orgId}/events/?status=live&expand=ticket_classes`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer HJBPBHYXVAW7GFRXTAZ7",
        },
      }
    );
    results = await res.json();
  };

  await init();
  await fetchEventsByOrgId();

  return {
    props: {
      data,
      results,
    },
  };
};

interface EventsPageProps {
  data: any;
  results: any;
}

interface EventText {
  html: string;
  text: string;
}
interface EventTime {
  local: string;
  timezone: string;
  utc: string;
}
interface Event {
  name: EventText;
  description: EventText;
  url: string;
  series_id: string;
  is_series: boolean;
  start: EventTime;
  end: EventTime;
}


const Events: NextPage = ({ data, results }: EventsPageProps) => {
  const events: Array<Event> = results?.events.map((e) => {
    return {
      name: e.name,
      description: e.description,
      url: e.url,
      series_id: e.series_id,
      is_series: e.is_series,
      start: e.start,
      end: e.end,
    };
  });

  // retrieve list of events.
  console.log(results.events);

  // if event is non-series, display.

  // if event is part of series, group into a bucket.
  return (
    <div className="mx-auto">
      <Hero title="Our Events">
        <>
          <h2>Develop your tech skills in one of our many courses below</h2>
          <br />
          <Text size="b1" className="mt-2">
            WeCode/KC is committed to helping Kansas City's youth and young
            adults develop their skills and knowledge to prepare for a career in
            technology. Our classes and clubs below are designed for various age
            groups and skill levels.
            <br />
            <br />
            Our adult programs include wrap-around services and mentorships with
            professionals and business owners to further assist in the
            full-scope of skill-building and knowledge development that is
            needed for a career in the field of technology
            <br />
          </Text>
          <br />
          <Text size="h3" className="mt-2">
            Summer of Code
          </Text>

          <Text size="h4" className="mt-2">
            <small>
              Mon, Aug 1, 2022, 9:00 AM – Fri, Aug 5, 2022, 4:00 PM CDT
            </small>
          </Text>

          <Text size="h4" className="mt-2">
            <small>5008 Prospect Avenue Kansas City, MO 64130</small>
          </Text>
          <Text className="mt-4" size="b1">
            These classes are hands-on workshops that focus on teaching the
            beginner, intermediate, and advanced students the technology
            concepts shown above. Classes starts DAILY at 9am and end at 4pm.
            Lunch will be provided for each student.
          </Text>
          <br />
          <Text size="h3" className="mt-2">
            Sign for Summer of Code classes below:
          </Text>
          {/* <Button href="/programs">Get Started</Button> */}
        </>
      </Hero>
      <div className="mx-auto container">
        {events.map((e) => {
          return (
            <>
              {" "}
              <EventCard
                title={e.name.text}
                href="https://www.eventbrite.com/e/summer-of-code-with-wecode-kc-tickets-354095869277"
              >
                {e.description.text}
              </EventCard>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
