import { Flex, Grid } from "@chakra-ui/react";
import Card from "@components/Card";
import Sidebar from "@components/Sidebar";
import { mockBookData } from "lib/constants";

import type { NextPage } from "next";

//TODO: Make sidebar menu toggleable
//TODO: Connect to supabase

const Home: NextPage = () => {
	return (
		<Flex height="100vh">
			<Sidebar />
			<Flex flexDir="column" justifyContent="center" alignItems="center" width="100%">
				<Grid
					templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
					columnGap="7rem"
					rowGap="3rem"
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
