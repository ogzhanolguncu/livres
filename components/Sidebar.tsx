import React from "react";
import { Flex, VStack, Text, useBoolean, Icon } from "@chakra-ui/react";
import IconContainer from "./IconContainer";
import { FaSignInAlt, FaMeteor, FaHamburger } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";

const Sidebar = () => {
  const [flag, setFlag] = useBoolean(true);

  return (
    <Flex
      height="100vh"
      backgroundColor="#3d2c8d8c"
      width={flag ? ["20%", "15%", "20%", "10%"] : ["55%", "30%", "30%", "25%"]}
      flexDir="column"
      justifyContent="flex-start"
      alignItems="center"
      position="sticky"
      top="0"
      borderRight="3px solid #916BBF"
    >
      <Flex marginTop="2rem" flexDir="column">
        <VStack
          alignItems={
            flag
              ? ["center", "center", "center", "flex-start"]
              : ["flex-start", "flex-start", "flex-start", "flex-start"]
          }
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
            <Icon as={FaHamburger} w={12} h={12} />
          </Text>

          <IconContainer
            icon={FaSignInAlt}
            text="Sign-in"
            showTexts={flag}
            href="#"
          />
          <IconContainer
            icon={FaMeteor}
            text="Join"
            showTexts={flag}
            href="/sign-in"
          />
          <IconContainer
            icon={GiBookshelf}
            text="My Books"
            showTexts={flag}
            href="#"
          />
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
