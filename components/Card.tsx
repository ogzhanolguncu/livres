import React, { FC } from 'react';
import { Flex, VStack, Text, Box } from '@chakra-ui/react';
import { Book } from '@prisma/client';

type Props = {
  book: Book;
};

const cardBreakPoints = ['100px', '240px', '240px', '300px'];
const fontSizeBreakPoints = ['md', '2xl', '2xl', '3xl'];
const bookNameBreakPoints = ['md', '4xl', '4xl', '5xl'];

const Card: FC<Props> = ({ book }) => {
  return (
    <Flex
      flexDirection="column"
      key={book.id}
      alignItems={['center', 'center', 'flex-start', 'flex-start']}
    >
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
        {/* {book.status === 0 && (
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
				)} */}
      </Box>

      <VStack align="flex-start" px="0.5rem" mt="1.5rem" maxWidth="300px">
        <Text fontSize={fontSizeBreakPoints}>Author: {book.author}</Text>
        <Text fontSize={fontSizeBreakPoints}>
          Page Number: {book.pageNumber}
        </Text>
        {/* <Text fontSize={fontSizeBreakPoints}>Completion: {book.status === 0 ? "✔️" : "⌛"}</Text> */}
      </VStack>
    </Flex>
  );
};

export default Card;
