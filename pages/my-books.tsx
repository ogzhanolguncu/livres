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

type InferedBook = InferGetServerSidePropsType<typeof getServerSideProps>;

const MyBooks = ({ books }: InferedBook) => {
  console.log({ books });
  return (
    <Flex flexDirection="column" w="100%">
      <Flex
        flexDirection="row"
        justifyContent={['center', 'center', 'space-between', 'space-between']}
        p="2rem"
        alignItems="center"
      >
        <Heading size="4xl">
          <Link href="/">My Books</Link>
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
        {books &&
          books.length > 0 &&
          books.map((book) => <Card book={book} key={book.id} />)}
      </Flex>
    </Flex>
  );
};

export default MyBooks;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const result = await getSession(context);
  if (!result?.user) {
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: '/sign-in',
      },
    };
  }

  const currentUsersBooks = await prisma.book.findMany({
    where: {
      user: {
        some: {
          email: result.user.email,
        },
      },
    },
  });

  return {
    props: { books: currentUsersBooks },
  };
};
