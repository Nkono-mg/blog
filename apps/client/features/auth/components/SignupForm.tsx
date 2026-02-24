import ParticleCanvas from "@/shared/components/ParticleCanvas";
import Template from "@/shared/components/Template";
import { Box, Button, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

export default function SignupForm() {
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
          <Field label="Nom" required>
            <Input
              type="text"
              placeholder="vote nom"
              variant="outline"
              autoComplete="off"
            />
          </Field>
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
          <Field label="Confirmer mot de passe" required>
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
            Valider
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
