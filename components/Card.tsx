import React, { FC } from "react";
import { Flex, VStack, Image, Text, Box } from "@chakra-ui/react";

type Props = {
	book: Livre.Book;
};

const Card: FC<Props> = ({ book }) => {
	return (
		<Flex flexDirection="column" key={book.id}>
			<Box position="relative" width="300px" height="300px">
				<Flex
					transition="all 0.5s ease"
					boxShadow="20px 38px 34px -26px rgb(0 0 0 / 20%)"
					borderRadius="md"
					width="300px"
					backgroundColor="#3d2c8d8c"
					border="3px solid #e76bde"
					height="300px"
					alt="cover"
					justifyContent="center"
					alignItems="center"
				>
					<Text fontSize="5xl" textAlign="center">
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
						padding="1rem"
						fontSize="3xl"
						borderBottomRightRadius="md"
						borderBottomLeftRadius="md"
						cursor="pointer"
					>
						Add To Lib
					</Text>
				)}
			</Box>

			<VStack align="flex-start" px="0.5rem" mt="1.5rem" maxWidth="300px">
				<Text fontSize="3xl">Author: {book.author}</Text>
				<Text fontSize="3xl">Page Number: {book.pageNumber}</Text>
				<Text fontSize="3xl">Completion: {book.isCompleted ? "✔️" : "⌛"}</Text>
			</VStack>
		</Flex>
	);
};

export default Card;
