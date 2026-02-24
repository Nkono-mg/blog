import { Box, Button, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

export default function LoginForm() {
  return (
    <Box
      maxW={"2xl"}
      mx={"auto"}
      mt={10}
      textAlign={"center"}
      bg={"rgb(255, 255, 255)"}
      rounded={"md"}
      shadow={"2xl"}
    >
      <Stack p={4}>
        <Stack gap="4">
          <Field label="Adesse mail" required>
            <Input
              type="email"
              placeholder="me@example.com"
              variant="outline"
              autoComplete="off"
            />
          </Field>

          <Field label="Mot de passe" required>
            <Input
              type="password"
              placeholder="********"
              variant="outline"
              autoComplete="off"
            />
          </Field>
          <Button
            type="submit"
            maxW={"md"}
            mx={"auto"}
            bg="gray.400"
            fontSize={{ base: "md" }}
          >
            Se connecter
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
