"use client";

import { useState } from "react";
import { Box, Flex, Button, useMediaQuery } from "@chakra-ui/react";
import LoginForm from "@/features/auth/components/LoginForm";
import SignupForm from "@/features/auth/components/SignupForm";
import Template from "@/shared/components/Template";

export default function FormLoginSignUp() {
  const [isConnectForm, setIsConnectForm] = useState(true);
  const [isLargerThan210] = useMediaQuery(["(min-width: 210px)"]);
  return (
    <Box position="relative" minH="100vh">
      <Template>
        <Flex
          direction={isLargerThan210 ? "row" : "column"}
          mb={2}
          justify="center"
          maxW={"2xl"}
          mx={"auto"}
          gapX={10}
          shadow={"md"}
          py={2}
          rounded={"md"}
        >
          <Button
            fontSize={{ base: "lg" }}
            variant={isConnectForm ? "solid" : "outline"}
            onClick={() => setIsConnectForm(true)}
            bg={isConnectForm ? "gray.400" : "transparent"}
          >
            Connexion
          </Button>
          <Button
            fontSize={{ base: "lg" }}
            variant={!isConnectForm ? "solid" : "outline"}
            onClick={() => setIsConnectForm(false)}
            bg={!isConnectForm ? "gray.400" : "transparent"}
          >
            Inscription
          </Button>
        </Flex>
        <Box p={4}> {isConnectForm ? <LoginForm /> : <SignupForm />}</Box>
      </Template>
    </Box>
  );
}
