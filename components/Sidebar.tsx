import Link from "next/link";
import React from "react";
import { Flex, VStack, Heading, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Flex
      height="100vh"
      backgroundColor="#3d2c8d8c"
      width="15%"
      flexDir="column"
      justifyContent="flex-start"
      alignItems="center"
      position="sticky"
      top="0"
    >
      <Flex marginTop="1.5rem" flexDir="column">
        <VStack align="flex-start" px="1rem" gap="3">
          <Heading size="4xl">
            <Link href="/">Livres</Link>
          </Heading>
          <Text fontSize="4xl">
            <Link href="#">Login</Link>
          </Text>
          <Text fontSize="4xl">
            <Link href="#">My Profile</Link>
          </Text>
          <Text fontSize="4xl">
            <Link href="#">My Book</Link>
          </Text>
          <Text fontSize="4xl">
            <Link href="#">All time favorite</Link>
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
