import React from 'react';
import { Flex, Grid, GridItem, Image } from '@chakra-ui/react';

import type { InferGetServerSidePropsType } from 'next';

// import { prisma } from '@lib/prisma';
// import { getSession } from 'next-auth/react';
import axios from 'axios';

import type { DataList } from '../typings/types';
import { MOVIE_API_URL } from '@constants/movieUrls';
export type InferedMovies = InferGetServerSidePropsType<typeof getStaticProps>;

const Home = ({ movies }: InferedMovies) => {
  return (
    <Flex
      justifyContent="flex-start"
      alignItems="flex-start"
      height="100%"
      my="2rem"
    >
      <Grid
        templateColumns={[
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
          'repeat(6, 1fr)',
        ]}
        w="85%"
        gap={6}
      >
        {movies &&
          movies.results.map((movie) => (
            <GridItem key={movie.id}>
              <Flex borderRadius="lg">
                <Image
                  src={`${MOVIE_API_URL.imagePath}/${movie.poster_path}`}
                  alt={movie.title}
                  rounded="lg"
                  width="auto"
                  height="auto"
                  objectFit="cover"
                />
              </Flex>
            </GridItem>
          ))}
      </Grid>
    </Flex>
  );
};

export default Home;

export async function getStaticProps() {
  const result = await axios.get<DataList>(MOVIE_API_URL.popular);

  return {
    props: { movies: result.data },
  };
}
