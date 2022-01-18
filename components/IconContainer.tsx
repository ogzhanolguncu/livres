import Link from "next/link";
import React from "react";
import { Flex, Text } from "@chakra-ui/react";

type Props = {
	text: string;
	icon: string;
	href: string;
	showTexts: boolean;
};

const IconContainer = ({ text, icon, showTexts, href }: Props) => {
	return (
		<Flex>
			<Text fontSize={["2xl", "2xl", "4xl", "4xl"]}>
				<Link href={href}>{icon}</Link>
			</Text>

			<Text
				fontSize={["2xl", "2xl", "3xl", "4xl"]}
				display={
					showTexts ? ["block", "block", "block", "block"] : ["none", "none", "none", "block"]
				}
			>
				<Link href={href}>{text}</Link>
			</Text>
		</Flex>
	);
};
export default IconContainer;
