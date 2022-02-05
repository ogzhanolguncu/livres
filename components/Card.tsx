import React from 'react';
import { Flex, Text, Box, Button } from '@chakra-ui/react';
import { MdLibraryAdd } from 'react-icons/md';
import { Book } from '@prisma/client';

type Props = {
  ownedBook?: boolean;
  book: Book & {
    user?: {
      email: string | null;
    }[];
  };
};

const Card = ({ book, ownedBook }: Props) => {
  const isBookOwned = book.user?.[0]?.email || !ownedBook;

  return (
    <Flex
      flexDirection="column"
      key={book.id}
      alignItems={['center', 'center', 'flex-start', 'flex-start']}
      textAlign="left"
    >
      <Box position="relative" width={'150px'} height={'150px'}>
        <Flex
          borderRadius="md"
          width="160px"
          height="210px"
          backgroundColor="#3d2c8d8c"
          border="3px solid #e76bde"
          alt="cover"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Text fontSize="md">{book.name}</Text>
        </Flex>
      </Box>
      {!isBookOwned && (
        <Button
          fontSize="xs"
          my="1rem"
          bg="#916bbf"
          _hover={{ background: '#fff', color: '#3d2c8d8c' }}
          _focus={{ outline: 'none' }}
          leftIcon={<MdLibraryAdd />}
        >
          Add to Library
        </Button>
      )}
    </Flex>
  );
};

export default Card;
