import React from 'react';
import { Flex } from '@chakra-ui/react';
import Card from '@components/Card';

import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';

import { prisma } from '@lib/prisma';
import { getSession } from 'next-auth/react';

export type InferedBook = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

const Home = ({ books }: InferedBook) => {
  return (
    <Flex
      marginTop="2rem"
      gap="3rem"
      flexWrap="wrap"
      justifyContent="flex-start"
      alignItems="flex-start"
      mx="0.5rem"
    >
      {books.length > 0 &&
        books.map((book) => <Card book={book} key={book.id} ownedBook />)}
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
