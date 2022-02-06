import React from 'react';
import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react';

import type { InferGetServerSidePropsType } from 'next';

// import { prisma } from '@lib/prisma';
// import { getSession } from 'next-auth/react';
import axios from 'axios';
// import styled from '@emotion/styled';

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
            <GridItem
              key={movie.id}
              backgroundImage="linear-gradient(45deg, darken(#13abdb,5%), #B10DC9)"
            >
              <Image
                src={`${MOVIE_API_URL.imagePath}/${movie.poster_path}`}
                alt={movie.title}
                rounded="lg"
                width="auto"
                height="auto"
                objectFit="cover"
              />
              {/* <CustomImage
                  src={`${MOVIE_API_URL.imagePath}/${movie.poster_path}`}
                  width="auto"
                  height="auto"
                  objectFit="cover"
                  alt={movie.title}
                  rounded="lg"
                /> */}
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

// const CustomImage = styled(Box)`
//   width: 100%;
//   height: 200px;
//   object-fit: 'cover';
//   background-image: ${(props) => `linear-gradient(
//       to bottom,
//       rgba(245, 246, 252, 0.52),
//       rgba(117, 19, 93, 0.73)
//     ),
//     url(${props.src});`};
// `;
