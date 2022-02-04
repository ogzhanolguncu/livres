import React from 'react';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import theme from '@styles/theme';
import { SessionProvider } from 'next-auth/react';

import type { AppProps } from 'next/app';
// import Sidebar from '@components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <Flex>
          {/* <Sidebar /> */}
          <Box
            backgroundImage={'/wave.svg'}
            height="100vh"
            width="45px"
            backgroundSize="cover"
            padding="0"
          />
          <Component {...pageProps} />
        </Flex>
      </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
