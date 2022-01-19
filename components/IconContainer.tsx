import Link from "next/link";
import React from "react";
import { Flex, Text } from "@chakra-ui/react";

type Props = {
	text: string;
	icon: string;
	href: string;
	showTexts: boolean;
};

const showTextFontSizeBreakPoints = ["2xl", "2xl", "3xl", "4xl"] 
const noShowTextFontSizeBreakPoints = ["xl","2xl","3xl","4xl"] 
const showTextDisplayBreakPoints = ["none", "none", "none", "block"]
const noShowTextDisplayBreakPoints = ["block", "block", "block", "none"]
const fontSizeBreakPoints = ["2xl", "2xl", "4xl", "4xl"]

const IconContainer = ({ text, icon, showTexts, href }: Props) => {
	const test=""
	console.warn("showTexts",showTexts)
	return (
		<Flex>
			<Text fontSize={fontSizeBreakPoints}>
				<Link href={href}>{icon}</Link>
			</Text>

			<Text
				fontSize={ showTexts ? showTextFontSizeBreakPoints : noShowTextFontSizeBreakPoints } 
				display={ showTexts ? showTextDisplayBreakPoints : noShowTextDisplayBreakPoints }
			>
				<Link href={href}>{text}</Link>
			</Text>
		</Flex>
	);
};
export default IconContainer;
