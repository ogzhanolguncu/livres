import Link from "next/link";
import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";

import type { IconType } from "react-icons";

type Props = {
	text: string;
	icon: IconType;
	href: string;
	showTexts: boolean;
};

const showTextFontSizeBreakPoints = ["2xl", "2xl", "3xl", "4xl"];
const noShowTextFontSizeBreakPoints = ["xl", "2xl", "3xl", "4xl"];
const showTextDisplayBreakPoints = ["none", "none", "none", "block"];
const noShowTextDisplayBreakPoints = ["block", "block", "block", "none"];
const fontSizeBreakPoints = ["2xl", "2xl", "4xl", "4xl"];

const IconContainer = ({ text, icon, showTexts, href }: Props) => {
	return (
		<Flex>
			<Text fontSize={fontSizeBreakPoints}>
				<Link href={href} passHref>
					<Icon as={icon} w={12} h={12} />
				</Link>
			</Text>

			<Text
				marginLeft="1rem"
				fontSize={showTexts ? showTextFontSizeBreakPoints : noShowTextFontSizeBreakPoints}
				display={showTexts ? showTextDisplayBreakPoints : noShowTextDisplayBreakPoints}
			>
				<Link href={href}>{text}</Link>
			</Text>
		</Flex>
	);
};
export default IconContainer;
