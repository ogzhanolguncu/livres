import React, { FC } from "react";
import { Flex, VStack, Image, Text } from "@chakra-ui/react";

type Props = {
	book: Livre.Book;
};

const Card: FC<Props> = ({ book }) => {
	return (
		<Flex flexDirection="column" key={book.id}>
			<Image
				background="transparent"
				margin="0 1rem"
				transition="all 0.5s ease"
				color="#000"
				fontSize="2rem"
				letterSpacing="1px"
				outline="none"
				boxShadow="20px 38px 34px -26px rgb(0 0 0 / 20%)"
				borderRadius="255px 15px 225px 15px/15px 225px 15px 255px"
				border="solid 7px #41403E"
				src={book.image}
				width="300px"
				height="300px"
				alt="cover"
			/>
			<VStack align="flex-start" ml="1.5rem" mt="1.5rem" maxWidth="300px">
				<Text fontSize="3xl">Name: {book.name}</Text>
				<Text fontSize="3xl">Author: {book.author}</Text>
				<Text fontSize="3xl">Page Number: {book.pageNumber}</Text>
				<Text fontSize="3xl">Completion: {book.isCompleted ? "Finished" : "On going"}</Text>
			</VStack>
		</Flex>
	);
};

export default Card;
