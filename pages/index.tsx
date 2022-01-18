import { Flex, Grid } from "@chakra-ui/react";
import Card from "@components/Card";
import Sidebar from "@components/Sidebar";
import { mockBookData } from "lib/constants";

import type { NextPage } from "next";

//TODO: Make sidebar menu toggleable
//TODO: Connect to supabase

const Home: NextPage = () => {
  return (
    <Flex>
      <Sidebar />
      <Flex
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="3rem"
        my="2.5rem"
      >
        {mockBookData.map((book) => (
          <Card book={book} key={book.id} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Home;
