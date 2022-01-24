import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Card from '@components/Card';

import type { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { prisma } from '@lib/prisma';

//TODO: ADD GITHUB LOGIN
//TODO: FIX VALIDATION ERROR
//TODO: FIX NEXT LINK ERROR

type InferedBook = InferGetStaticPropsType<typeof getStaticProps>;

const Home = ({ books }: InferedBook) => {
  return (
    <Flex flexDirection="column" w="100%">
      <Flex
        flexDirection="row"
        justifyContent={['center', 'center', 'space-between', 'space-between']}
        p="2rem"
        alignItems="center"
      >
        <Heading size="4xl">
          <Link href="/">Livres</Link>
        </Heading>
        <Text fontSize="4xl" display={['none', 'none', 'block', 'block']}>
          Book Goal: 4 out of 5
        </Text>
      </Flex>

      <Flex
        gap="3rem"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        mx="0.5rem"
      >
        {books.length > 0 &&
          books.map((book) => <Card book={book} key={book.id} />)}
      </Flex>
    </Flex>
  );
};

export default Home;

export async function getStaticProps() {
  const books = await prisma.book.findMany();
  return {
    props: { books },
  };
}
