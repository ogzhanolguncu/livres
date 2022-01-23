import React from 'react';
import { Center, ChakraProvider } from '@chakra-ui/react';
import theme from '@styles/theme';

import type { AppProps } from 'next/app';
import Sidebar from '@components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Center alignItems="flex-start">
        <Sidebar />
        <Component {...pageProps} />
      </Center>
    </ChakraProvider>
  );
}

export default MyApp;
