import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-wrap-balancer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Head>
        <title>test</title>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head> */}
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
