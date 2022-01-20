import React from "react";
import { Button, Center, Tooltip, Text, Box } from "@chakra-ui/react";
import { FaSignInAlt, FaMeteor } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import Link from "next/link";

const Sidebar = () => {
	return (
		<Center
			w={["15%", "15%", "10%", "7.5%", "6%", "5%"]}
			h="100vh"
			pos="sticky"
			top="0"
			left="0"
			borderRight="1px solid white"
			flexDir="column"
			bg="#3d2c8d8c"
		>
			<Link href="/" passHref>
				<div>
					<Tooltip label="Livres" placement="right" fontSize="1.5rem" hasArrow>
						<Center
							width={["40px", "40px", "65px", "65px"]}
							height={["40px", "40px", "65px", "65px"]}
							borderRadius="0.3rem"
							backgroundColor="#916BBF"
							aria-label="livres"
							fontSize={["2rem", "2rem", "3rem", "5rem"]}
							_hover={{ background: "#916BBF", color: "#fff" }}
							_focus={{ background: "transparent", outline: "none" }}
							_active={{ background: "transparent" }}
						>
							<Text marginTop="0.5rem">Li</Text>
						</Center>
					</Tooltip>
				</div>
			</Link>
			<Link href="/sign-in" passHref>
				<div>
					<Tooltip label="Sign In" placement="right" fontSize="1.5rem" hasArrow>
						<Button
							my="1rem"
							aria-label="sign-in"
							leftIcon={<FaSignInAlt />}
							bg="transparent"
							fontSize={["2rem", "2rem", "2.5rem", "3rem"]}
							_hover={{ background: "transparent", color: "#e76bde" }}
							_focus={{ background: "transparent", outline: "none" }}
							_active={{ background: "transparent" }}
						/>
					</Tooltip>
				</div>
			</Link>
			<Link href="#" passHref>
				<div>
					<Tooltip label="Sign Up" placement="right" fontSize="1.5rem" hasArrow>
						<Button
							my="1rem"
							aria-label="sign-up"
							leftIcon={<FaMeteor />}
							bg="transparent"
							fontSize={["2rem", "2rem", "2.5rem", "3rem"]}
							_hover={{ background: "transparent", color: "#e76bde" }}
							_focus={{ background: "transparent", outline: "none" }}
							_active={{ background: "transparent" }}
						/>
					</Tooltip>
				</div>
			</Link>
			<Link href="#" passHref>
				<div>
					<Tooltip label="My Books" placement="right" fontSize="1.5rem" hasArrow>
						<Button
							my="1rem"
							aria-label="my-books"
							leftIcon={<GiBookshelf />}
							bg="transparent"
							fontSize={["2rem", "2rem", "2.5rem", "3rem"]}
							_hover={{ background: "transparent", color: "#e76bde" }}
							_focus={{ background: "transparent", outline: "none" }}
							_active={{ background: "transparent" }}
						/>
					</Tooltip>
				</div>
			</Link>
		</Center>
	);
};

export default Sidebar;
