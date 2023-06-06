import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-wrap-balancer";
import { FiraCode, PlexMono } from "../components/Wrapper/FontWrapper";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignInButton,
} from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  // Get the pathname

  return (
    <>
      <ClerkProvider {...pageProps}>
        <Component {...pageProps} />
      </ClerkProvider>
    </>
  );
}
