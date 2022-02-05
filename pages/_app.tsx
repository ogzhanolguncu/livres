import React from 'react';
import { Box, ChakraProvider, Flex, Heading, Input } from '@chakra-ui/react';
import theme from '@styles/theme';
import { SessionProvider } from 'next-auth/react';

import type { AppProps } from 'next/app';
import LeftMenu from '@components/LeftMenu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <Flex>
          <Box
            backgroundImage={'/wave.svg'}
            height="100vh"
            width="45px"
            backgroundSize="cover"
            padding="0"
            position="absolute"
          />
          <LeftMenu />
          <Flex
            direction="column"
            marginLeft="5rem"
            marginTop="4rem"
            width="100%"
          >
            <Flex width="70%">
              <Heading size="lg">Home</Heading>
              <Input
                marginLeft="5rem"
                variant="filled"
                placeholder="Filled"
                backgroundColor="#151421"
              />
            </Flex>
            <Component {...pageProps} />
          </Flex>
        </Flex>
      </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
