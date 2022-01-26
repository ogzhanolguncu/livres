import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Card from '@components/Card';

import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import Link from 'next/link';
import { prisma } from '@lib/prisma';
import { getSession } from 'next-auth/react';

//TODO: ADD EMAIL - PASSWORD REGISTER
//TODO: ADD TO LIB
//TODO: ADD PAGE DETAIL

export type InferedBook = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

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
        alignItems="flex-start"
        mx="0.5rem"
      >
        {books.length > 0 &&
          books.map((book) => <Card book={book} key={book.id} ownedBook />)}
      </Flex>
    </Flex>
  );
};

export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const result = await getSession(context);

  const books = await prisma.book.findMany({
    include: {
      user: {
        where: {
          email: result?.user?.email,
        },
        select: {
          email: true,
        },
      },
    },
  });

  return {
    props: { books },
  };
}
