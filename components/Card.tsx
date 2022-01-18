import React, { FC } from "react";
import { Flex, VStack, Image, Text, Box } from "@chakra-ui/react";

type Props = {
  book: Livre.Book;
};

const cardBreakPoints = ["100px", "240px", "240px", "300px"];
const fontSizeBreakPoints = ["xl", "2xl", "2xl", "3xl"];
const bookNameBreakPoints = ["2xl", "4xl", "4xl", "5xl"];
const addButtonPaddingBreakPoints = ["0.25rem", "0.5rem", "0.75rem", "1rem"];

const Card: FC<Props> = ({ book }) => {
  return (
    <Flex flexDirection="column" key={book.id}>
      <Box position="relative" width={cardBreakPoints} height={cardBreakPoints}>
        <Flex
          transition="all 0.5s ease"
          boxShadow="20px 38px 34px -26px rgb(0 0 0 / 20%)"
          borderRadius="md"
          width={cardBreakPoints}
          backgroundColor="#3d2c8d8c"
          border="3px solid #e76bde"
          height={cardBreakPoints}
          alt="cover"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize={bookNameBreakPoints} textAlign="center">
            {book.name}
          </Text>
        </Flex>
        {!book.isCompleted && (
          <Text
            position="absolute"
            bottom="0"
            background="rgb(15 14 14 / 29%)"
            color="#f1f1f1"
            width="100%"
            padding={addButtonPaddingBreakPoints}
            borderBottomRightRadius="md"
            borderBottomLeftRadius="md"
            cursor="pointer"
            fontSize={fontSizeBreakPoints}
          >
            Add To Lib
          </Text>
        )}
      </Box>

      <VStack align="flex-start" px="0.5rem" mt="1.5rem" maxWidth="300px">
        <Text fontSize={fontSizeBreakPoints}>Author: {book.author}</Text>
        <Text fontSize={fontSizeBreakPoints}>
          Page Number: {book.pageNumber}
        </Text>
        <Text fontSize={fontSizeBreakPoints}>
          Completion: {book.isCompleted ? "✔️" : "⌛"}
        </Text>
      </VStack>
    </Flex>
  );
};

export default Card;
