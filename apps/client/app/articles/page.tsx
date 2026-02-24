import DateField from "@/shared/components/ui/DateField";
import { Button, Card, Image, Text, Grid, Flex, Box } from "@chakra-ui/react";

export default function Article() {
  const data = Array.from({ length: 20 }, (_, i) => i);

  return (
    <Box>
      <Flex justifyContent={"space-between"} alignItems={"center"} maxW={"6xl"}>
        <Text pl={4} fontSize={{ base: "2xl" }}>
          Liste des articles
        </Text>
        <Box display={"flex"} gap={2}>
          <Text>
            Début <DateField />
          </Text>
          <Text>
            Fin <DateField />
          </Text>
        </Box>
      </Flex>

      <Grid
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap="4"
        p="4"
      >
        {data.map((item) => (
          <Card.Root key={item} overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
              alt="Sofa"
            />
            <Card.Body>
              <Card.Title>Article {item}</Card.Title>
              <Text mt="2">${item * 30}</Text>
            </Card.Body>

            <Card.Footer>
              <Flex
                justifyContent={"space-between"}
                width={"full"}
                alignItems={"center"}
                gap={2}
              >
                <Button size="sm">Voir</Button>
                <Text fontSize={{ base: "xs" }}>Pulbié le 21/02/2026</Text>
              </Flex>
            </Card.Footer>
          </Card.Root>
        ))}
      </Grid>
    </Box>
  );
}
