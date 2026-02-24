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
} from "@chakra-ui/react";
import { FaList } from "react-icons/fa";
import NextLink from "next/link";

export default function Banner() {
  return (
    <Box>
      <Container>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="left"
          justify="space-between"
          gap={6}
          width={"full"}
        >
          <VStack align="start" width="full">
            <Heading size="4xl" lineHeight="1.2">
              <Link
                as={NextLink}
                href="/"
                position="relative"
                zIndex={2}
                bg={"rgb(255, 255, 255)"}
                fontSize={{ base: "2xl" }}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  color: "rgb(28, 30, 33)",
                  font: "bold",
                  rounded: "md",
                }}
                p={2}
                border={"none"}
                shadow={"lg"}
              >
                <Icon as={FaList} boxSize={6} color="rgb(24, 119, 242)" />
                Liste Articles
              </Link>
            </Heading>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}
