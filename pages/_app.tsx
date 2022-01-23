import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import theme from '@styles/theme';
import { SessionProvider } from 'next-auth/react';

import type { AppProps } from 'next/app';
import Sidebar from '@components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <Flex>
          <Sidebar />
          <Component {...pageProps} />
        </Flex>
      </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
