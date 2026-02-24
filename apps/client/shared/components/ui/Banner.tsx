"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  Stack,
  Link,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaList } from "react-icons/fa";
import NextLink from "next/link";

export default function Banner() {
  const [isLargerThan660] = useMediaQuery(["(min-width: 660px)"]);
  const [isLargerThan846] = useMediaQuery(["(min-width: 846px)"]);
  return (
    <Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="left"
        justify="space-between"
        width={"full"}
      >
        <Link
          as={NextLink}
          href="/"
          bg={isLargerThan660 ? "rgb(255, 255, 255)" : "none"}
          fontSize={isLargerThan846 ? "md" : "sm"}
          rounded={"md"}
          p={2}
          border={"none"}
          shadow={"lg"}
          _hover={{
            textDecoration: "none",
            font: "bold",
          }}
        >
          <Icon display={isLargerThan660 ? "none" : "flex"}>
            <FaList />
          </Icon>
          <Text display={isLargerThan660 ? "flex" : "none"}>
            {" "}
            Liste Articles
          </Text>
        </Link>
      </Flex>
    </Box>
  );
}
