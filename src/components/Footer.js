import * as React from "react";
import { Container, Text, Flex, Link, Icon, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Container
      maxW="full"
      pt="10em"
      pb="2em"
      borderBottomWidth={5}
      borderStyle="solid"
      borderColor="green.400"
      id="Contact"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="container.md"
        margin="auto"
      >
        <Text>Cardoso Nicolás - 2024</Text>
        <HStack>
          <Link
            href="https://www.linkedin.com/in/cardosonicolas/"
            target="_blank"
          >
            <Icon
              as={FaLinkedin}
              w="6"
              h="6"
              fill="green.500"
              _hover={{ fill: "green.600", transition: "fill 0.2s ease-out" }}
            />
          </Link>
          <Link href="https://github.com/cardosonicolas" target="_blank">
            <Icon
              as={FaGithub}
              w="6"
              h="6"
              fill="green.500"
              _hover={{ fill: "green.600", transition: "fill 0.2s ease-out" }}
            />
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Footer;
