import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Card from '@components/Card';

import type { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { prisma } from '@lib/prisma';
import { getSession } from 'next-auth/react';
import { Book } from '@prisma/client';

//TODO: ADD EMAIL - PASSWORD REGISTER
//TODO: ADD TO LIB
//TODO: ADD PAGE DETAIL

type InferedBook = { books: Book[] };

const Dashboard = ({ books }: InferedBook) => {
  return (
    <Flex flexDirection="column" w="100%">
      <Flex
        flexDirection="row"
        justifyContent={['center', 'center', 'space-between', 'space-between']}
        p="2rem"
        alignItems="center"
      >
        <Heading size="4xl">
          <Link href="/">Dashboard</Link>
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

export default Dashboard;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const result = await getSession(context);
  if (!result) {
    return {
      redirect: {
        permanent: false,
        destination: '/sign-in',
      },
    };
  }
  const books = await prisma.book.findMany();
  return {
    props: { books },
  };
};
