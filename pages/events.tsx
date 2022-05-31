import type { GetServerSideProps, NextPage } from "next";

const BASE_URL = "http://www.eventbriteapi.com/v3";
const TOKEN = "HJBPBHYXVAW7GFRXTAZ7"; // @TODO -> move this into secret.

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${BASE_URL}/users/me/`, {
    method: "GET",
    headers: {
      Authorization: "Bearer HJBPBHYXVAW7GFRXTAZ7",
    },
  });
  const data: any = await res.json();

  return {
    props: {
      data,
    },
  };
};

interface EventProps {
  data: any;
}
const Events: NextPage = ({ data }: EventProps) => {
  console.log(data);
  return <div className="mx-auto">Test: </div>;
};

export default Events;
