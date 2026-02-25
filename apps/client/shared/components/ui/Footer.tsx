"use client";
import { useColorModeValue } from "@/components/ui/color-mode";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const bgColor = useColorModeValue("rgb(255, 255, 255)", "rgb(255, 255, 255)");
  const textColor = useColorModeValue("rgb(28, 30, 33)", "gray.200");

  return (
    <Box
      bg={bgColor}
      color={textColor}
      py={6}
      mt={10}
      boxShadow="0 -4px 6px rgba(0,0,0,0.1)"
    >
      <Flex
        maxW="6xl"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px={4}
      >
        <Text fontWeight="bold" mb={{ base: 4, md: 0 }}>
          Designed by{" "}
          <Link
            as={NextLink}
            href="#"
            color="rgb(24, 119, 242)"
            _hover={{ textDecoration: "underline" }}
          >
            Nkono RAKOTOARISOA
          </Link>
        </Text>
        <Text fontSize="md">&copy; {currentYear} Tous droits réservés.</Text>
      </Flex>
    </Box>
  );
}
