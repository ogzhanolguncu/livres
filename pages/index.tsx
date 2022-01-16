import { Box, Flex, Text, VStack, Image } from "@chakra-ui/react";
import Card from "@components/Card";
import faker from "@faker-js/faker";
import { nanoid } from "nanoid";

import type { NextPage } from "next";

const mockBookData = [
	{
		id: nanoid(),
		name: faker.name.title(),
		image: "https://via.placeholder.com/300",
		author: faker.name.firstName(),
		pageNumber: faker.datatype.number({
			min: 70,
			max: 250,
		}),
		isCompleted: false,
	},
	{
		id: nanoid(),
		name: faker.name.title(),
		image: "https://via.placeholder.com/300",
		author: faker.name.firstName(),
		pageNumber: faker.datatype.number({
			min: 70,
			max: 250,
		}),
		isCompleted: false,
	},
	{
		id: nanoid(),
		name: faker.name.title(),
		image: "https://via.placeholder.com/300",
		author: faker.name.firstName(),
		pageNumber: faker.datatype.number({
			min: 70,
			max: 250,
		}),
		isCompleted: true,
	},
];

const Home: NextPage = () => {
	return (
		<Flex
			height="100vh"
			width="100%"
			justifyContent="center"
			alignItems="center"
			flexDir="column"
			gap="2.5rem"
		>
			<Flex gap="2.5rem">
				{mockBookData.map((book) => (
					<Card book={book} key={book.id} />
				))}
			</Flex>
		</Flex>
	);
};

export default Home;
