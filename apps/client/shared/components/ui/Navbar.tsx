"use client";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  HStack,
  Icon,
  Link,
  useBreakpointValue,
  useMediaQuery,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaHeart, FaWhatsapp, FaUser } from "react-icons/fa";
import Search from "./Search";
import NextLink from "next/link";

const MotionBox = motion.create(Box);

export default function Navbar() {
  const { open, onToggle } = useDisclosure();
  const scaleAnimation = useBreakpointValue({
    base: 1,
    lg: [0, 1.02, 1, 0.5, 0],
  });

  const [isLargeScreen] = useMediaQuery(["(min-width: 320px)"]);
  const [isDisplayIcon] = useMediaQuery(["(min-width: 432px)"]);
  const [isDisplayIconNavBar] = useMediaQuery(["(min-width: 805px)"]);
  const [isDisplayText] = useMediaQuery(["(min-width: 1102px)"]);

  return (
    <Box
      bg="rgb(255, 255, 255)"
      px={{ base: 5, lg: 20 }}
      shadow="lg"
      position="fixed"
      zIndex={50}
      width={"full"}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <MotionBox
          display={{ base: "none", lg: "flex" }}
          color="rgb(28, 30, 33)"
          fontWeight="bold"
          animate={{ scale: scaleAnimation }}
          transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
        >
          <Text px={1} fontSize={{ base: "xs" }}>
            {isDisplayText ? "Thank you for your visit" : "Thank you"}
          </Text>
          <Icon as={FaHeart} color="red.500" fontSize={{ base: "xs" }} />
        </MotionBox>
        <Box display={isLargeScreen ? "flex" : "none"}>
          <Search />
        </Box>

        {/* Bouton hamburger pour mobile */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={onToggle}
          variant="ghost"
          color="rgb(28, 30, 33)"
          size="lg"
          _hover={{ bg: "gray.100" }}
        >
          {" "}
          {open ? <CloseIcon /> : <HamburgerIcon />}
        </IconButton>

        {/* Liens desktop */}
        <HStack
          gap={{ base: 1, sm: 2, md: 4, lg: 6 }}
          display={{ base: "none", md: "flex" }}
        >
          <Link
            as={NextLink}
            href="https://wa.me/0329865868"
            target="_blank"
            rel="noopener noreferrer"
            p={{ base: 1, md: 2 }}
            _hover={{
              textDecoration: "none",
              bg: "gray.200",
              color: "rgb(28, 30, 33)",
              font: "bold",
              rounded: "md",
            }}
          >
            <Icon
              as={FaWhatsapp}
              color="green.500"
              fontSize={{ base: "xs", xl: "lg" }}
              display={isDisplayIconNavBar ? "flex" : "none"}
            />
            <Text fontSize={{ base: "xs", xl: "lg" }}> +261 32 98 658 68</Text>
          </Link>
          <Link
            as={NextLink}
            href="mailto:nkono.rakotoarisoa@malatec-consulting.com"
            target="_blank"
            rel="noopener noreferrer"
            color="black"
            p={{ base: 1, md: 2 }}
            _hover={{
              textDecoration: "none",
              bg: "gray.200",
              color: "rgb(28, 30, 33)",
              font: "bold",
              rounded: "md",
            }}
          >
            <Icon
              as={FaEnvelope}
              fontSize={{ base: "xs", xl: "lg" }}
              display={isDisplayIconNavBar ? "flex" : "none"}
            />
            <Text fontSize={{ base: "xs", xl: "lg" }}>
              {" "}
              nkono.rakotoarisoa@malatec-consulting.com
            </Text>
          </Link>
          <Link
            as={NextLink}
            href="/form"
            p={{ base: 1, md: 2 }}
            rounded="md"
            bg="rgb(240, 242, 245)"
            _hover={{
              textDecoration: "none",
              bg: "gray.200",
              color: "rgb(28, 30, 33)",
              font: "bold",
            }}
          >
            <Icon
              as={FaUser}
              color="gray.700"
              fontSize={{ base: "xs", xl: "lg" }}
            />
            <Text fontSize={{ base: "xs", xl: "lg" }}> S'inscrire</Text>
          </Link>
        </HStack>
      </Flex>
      {/* Menu mobile animé */}
      <AnimatePresence>
        {open && (
          <MotionBox
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            overflow="hidden"
            display={{ md: "none" }}
            bg="rgb(255, 255, 255)"
            shadow="lg"
          >
            <Stack p={isLargeScreen ? 4 : 1} gap={isLargeScreen ? 4 : 1}>
              <Link
                as={NextLink}
                href="https://wa.me/0329865868"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200",
                  color: "rgb(28, 30, 33)",
                  font: "bold",
                  rounded: "md",
                }}
                p={isLargeScreen ? 2 : 1}
              >
                <Icon
                  as={FaWhatsapp}
                  color="green.500"
                  display={isDisplayIcon ? "flex" : "none"}
                />

                <Text fontSize={isLargeScreen ? "md" : "xs"}>
                  {" "}
                  +261 32 98 658 68
                </Text>
              </Link>
              <Link
                as={NextLink}
                href="mailto:nkono.rakotoarisoa@malatec-consulting.com"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200",
                  color: "rgb(28, 30, 33)",
                  font: "bold",
                  rounded: "md",
                }}
                p={isLargeScreen ? 2 : 1}
              >
                <Icon
                  as={FaEnvelope}
                  display={isDisplayIcon ? "flex" : "none"}
                  fontSize={isLargeScreen ? "md" : "xs"}
                />
                <Text fontSize={isLargeScreen ? "md" : "xs"}>
                  {" "}
                  nkono.rakotoarisoa@malatec-consulting.com
                </Text>
              </Link>
              <Link
                as={NextLink}
                href="/form"
                p={{ base: 1, md: 2 }}
                rounded="md"
                bg="rgb(240, 242, 245)"
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200",
                  color: "rgb(28, 30, 33)",
                  font: "bold",
                }}
              >
                <Icon as={FaUser} color="gray.700" fontSize={{ base: "md" }} />
                <Text fontSize={{ base: "md" }}> S'inscrire</Text>
              </Link>
            </Stack>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
}
