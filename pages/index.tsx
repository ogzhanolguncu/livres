import { Flex, Grid } from "@chakra-ui/react";
import Card from "@components/Card";
import Sidebar from "@components/Sidebar";
import { mockBookData } from "lib/constants";

import type { NextPage } from "next";

//TODO: Make book name generator for image placeholders.
//TODO: Connect to supabase
//TODO: Deploy to vercel

const Home: NextPage = () => {
	return (
		<Flex height="100vh">
			<Sidebar />
			<Flex flexDir="column" justifyContent="center" alignItems="center" width="100%">
				<Grid
					templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
					gap={14}
				>
					{mockBookData.map((book) => (
						<Card book={book} key={book.id} />
					))}
				</Grid>
			</Flex>
		</Flex>
	);
};

export default Home;
