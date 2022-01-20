import { Center, ChakraProvider } from "@chakra-ui/react";
import theme from "@styles/theme";
import { supabase } from "lib/supabaseClient";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import type { AppProps } from "next/app";
import type { AuthChangeEvent, Session } from "@supabase/supabase-js";
import Sidebar from '@components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [authenticatedState, setAuthenticatedState] =
    useState("not-authenticated");

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log({ event, session });
        handleAuthChange(event, session);
        if (event === "SIGNED_IN") {
          setAuthenticatedState("authenticated");
          router.push("/profile");
        }
        if (event === "SIGNED_OUT") {
          setAuthenticatedState("not-authenticated");
        }
      }
    );
    checkUser();
    return () => {
      authListener?.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkUser = async () => {
    const user = supabase.auth.user();
    if (user) {
      setAuthenticatedState("authenticated");
    }
  };

  async function handleAuthChange(
    event: AuthChangeEvent,
    session: Session | null
  ) {
    /* sets and removes the Supabase cookie */
    await fetch("/api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    });
  }

  return (
    <ChakraProvider theme={theme}>
      <Center alignItems="flex-start" pos="relative">
        <Sidebar />
        <Component {...pageProps} />
      </Center>
    </ChakraProvider>
  );
}

export default MyApp;
