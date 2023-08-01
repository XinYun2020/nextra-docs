import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  // Get the pathname

  return (
    <>
      <ClerkProvider
        {...pageProps}
        appearance={{
          variables: {
            colorPrimary: "#38c7b7", // #C73848
            colorText: "#000000",
          },
        }}>
        <Component {...pageProps} />
      </ClerkProvider>
    </>
  );
}
