import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>
          WeCode - Creating a pipeline of future-ready professionals.
        </title>
        <meta
          name="description"
          content="Coding a pipeline of technology professionals"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        <Header></Header>
        <Component {...pageProps} />

        <Footer></Footer>
      </div>

      <Script> var _ctct_m = "371aedc04fb5f9dceaf81bb5a6145e47"; </Script>
      <Script
        id="signupScript"
        src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
        async
        defer
      ></Script>
    </div>
  );
}

export default MyApp;
