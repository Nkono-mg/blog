import Banner from "@/shared/components/ui/Banner";
import { Box, Button, Flex, Grid, HStack } from "@chakra-ui/react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Grid templateColumns="15% 85%" h="100vh">
      <Box
        bg="rgb(255, 255, 255)"
        py={{ base: 10, md: 20 }}
        shadow={"2xl"}
        height="100%"
        p={5}
      >
        <Banner />
      </Box>
      <Box overflowY="auto" height="100vh" mt={50} pb={60}>
        {children}
      </Box>
    </Grid>
  );
}
