"use client";

import { Flex, Spinner, VStack, Icon } from "@chakra-ui/react";
import { FaGift } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionIcon = motion(Icon);

export default function Loading() {
  return (
    <Flex minH="100vh" align="center" justify="center">
      <VStack gap={6}>
        <Spinner size="xl" color="gray.500" />

        <MotionIcon
          as={FaGift}
          boxSize={12}
          color="gray.400"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
        />
      </VStack>
    </Flex>
  );
}
