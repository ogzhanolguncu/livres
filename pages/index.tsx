import { Flex, Heading, Text } from "@chakra-ui/react";
import Card from "@components/Card";
import Sidebar from "@components/Sidebar";
import { mockBookData } from "lib/constants";

import type { NextPage } from "next";
import Link from "next/link";

//TODO: Make sidebar menu toggleable
//TODO: Connect to supabase
//TODO: Move book goal to below livres in mobile view

const Home: NextPage = () => {
	return (
		<Flex>
			<Sidebar />

			<Flex flexDirection="column" width="100%">
				<Flex
					flexDirection="row"
					justifyContent={["center", "center", "space-between", "space-between"]}
					p="2rem"
					alignItems="center"
				>
					<Heading size="4xl">
						<Link href="/">Livres</Link>
					</Heading>
					<Text fontSize="4xl" display={["none", "none", "block", "block"]}>
						Book Goal: 4 out of 5
					</Text>
				</Flex>

				<Flex gap="3rem" flexWrap="wrap" justifyContent="center" alignItems="center">
					{mockBookData.map((book) => (
						<Card book={book} key={book.id} />
					))}
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Home;
