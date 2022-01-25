import React from 'react';
import { Flex, Text, Box, Center, Button } from '@chakra-ui/react';
import { MdLibraryAdd } from 'react-icons/md';
import { Book } from '@prisma/client';
import { prisma } from '@lib/prisma';

type Props = {
  book: Book;
};

const cardBreakPoints = ['100px', '240px', '240px', '300px'];
const fontSizeBreakPoints = ['md', '2xl', '2xl', '3xl'];
const bookNameBreakPoints = ['md', '4xl', '4xl', '5xl'];
const addToLibButBreakPoints = ['xs', 'xl', 'xl', '2xl'];

const Card = ({ book }: Props) => {
  const addBookToLibrary = async () => {
    console.log('çalıştı');
  };

  return (
    <Flex
      flexDirection="column"
      key={book.id}
      alignItems={['center', 'center', 'flex-start', 'flex-start']}
      textAlign="left"
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
      </Box>
      <Button
        fontSize={addToLibButBreakPoints}
        my="1rem"
        bg="#916bbf"
        _hover={{ background: '#fff', color: '#3d2c8d8c' }}
        _focus={{ outline: 'none' }}
        leftIcon={<MdLibraryAdd />}
        onClick={addBookToLibrary}
      >
        Add to Library
      </Button>

      <Center
        flexDir="column"
        textAlign={['center', 'center', 'start', 'start']}
      >
        <Text w="100%" fontSize={fontSizeBreakPoints}>
          Author: {book.author}
        </Text>
        <Text w="100%" fontSize={fontSizeBreakPoints}>
          Page Number: {book.pageNumber}
        </Text>
      </Center>
    </Flex>
  );
};

export default Card;
