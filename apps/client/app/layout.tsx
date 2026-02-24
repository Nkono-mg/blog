import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/shared/components/ui/Navbar";
import Footer from "@/shared/components/ui/Footer";
import { Box, Flex } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import { px } from "framer-motion";

export const metadata: Metadata = {
  title: "Gestion de contenu",
  description: "Un système de gestion de contenu éditoriaux avec back-office",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ background: "rgb(240, 242, 245)" }}>
        <Provider>
          <Flex direction="column" h="100vh">
            <Box h="60px">
              <Navbar />
            </Box>
            <Box flex="1" overflow={"hidden"}>
              {children}
            </Box>
            <Box position="fixed" bottom="0" width="100%">
              <Footer />
            </Box>
          </Flex>
        </Provider>
      </body>
    </html>
  );
}
