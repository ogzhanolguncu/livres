import { Flex, Heading, Skeleton, Text } from "@chakra-ui/react";
import Card from "@components/Card";
import Sidebar from "@components/Sidebar";
import { mockBookData } from "lib/constants";
import { supabase } from "lib/supabaseClient";

import type { PostgrestError } from "@supabase/supabase-js";

import type { NextPage } from "next";
import Link from "next/link";

//TODO: add livres dashboard icon to return to home
//TODO: ADD GITHUB LOGIN
//TODO: FIX VALIDATION ERROR
//TODO: FIX NEXT LINK ERROR

type Props = {
	books: Livre.Book[] | null;
	error: PostgrestError | null;
};

const Home: NextPage<Props> = ({ books, error }) => {
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

				<Flex gap="3rem" flexWrap="wrap" justifyContent="center" alignItems="center" mx="0.5rem">
					{books && books.length > 0 ? (
						books.map((book) => <Card book={book} key={book.id} />)
					) : (
						<Skeleton />
					)}
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Home;

export async function getServerSideProps() {
	let { data: books, error } = await supabase.from<Livre.Book[]>("books").select("*");

	return {
		props: { books, error },
	};
}
