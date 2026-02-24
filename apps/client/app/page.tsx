import Banner from "@/shared/components/ui/Banner";
import { Box, Button, Flex, Grid, HStack } from "@chakra-ui/react";
import Article from "./articles/page";
import Template from "@/shared/components/Template";

export default function Home() {
  return (
    <Template>
      <Article />
    </Template>
  );
}
