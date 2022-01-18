import React from "react";
import { Flex, VStack, Text, useBoolean } from "@chakra-ui/react";
import IconContainer from "./IconContainer";

const Sidebar = () => {
	const [flag, setFlag] = useBoolean(true);

	return (
		<Flex
			height="100vh"
			backgroundColor="#3d2c8d8c"
			width={["50%", "30%", "40%", "15%"]}
			flexDir="column"
			justifyContent="flex-start"
			alignItems="center"
			position="sticky"
			top="0"
			borderRight="3px solid #916BBF"
		>
			<Flex marginTop="3rem" flexDir="column">
				<VStack
					align={[`${flag ? "flex-start" : "center"}`, "center", "flex-start", "flex-start"]}
					px="1rem"
					gap="3"
				>
					<Text
						width="100%"
						textAlign="center"
						fontSize="4xl"
						cursor="pointer"
						onClick={setFlag.toggle}
						display={["block", "block", "block", "none"]}
					>
						🍔
					</Text>

					<IconContainer icon="🔐" text="Sign-in" showTexts={flag} href="#" />
					<IconContainer icon="☄️" text="Join" showTexts={flag} href="#" />
					<IconContainer icon="📚" text="My Books" showTexts={flag} href="#" />
				</VStack>
			</Flex>
		</Flex>
	);
};

export default Sidebar;
