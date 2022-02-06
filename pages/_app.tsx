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
        <Flex height="100%" width="100%">
          <Box
            backgroundImage={'/wave.svg'}
            width="45px"
            height="100%"
            backgroundSize="cover"
            padding="0"
            position="fixed"
          />
          <LeftMenu />

          <Flex
            direction="column"
            mt={['3.2rem', '3.2rem', '4rem', '4rem']}
            ml={['45px', '45px', '45px', '75px']}
            w="100%"
          >
            <Flex maxW="85%">
              <Heading size="lg">Home</Heading>
              <Input
                display={['none', 'none', 'initial', 'initial']}
                ml="5rem"
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
