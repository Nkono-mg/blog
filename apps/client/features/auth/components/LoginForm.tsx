"use client";
import { Box, Button, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { FormEvent, useState } from "react";
import { authService } from "../services/auth.service";
import { notFound, useRouter } from "next/navigation";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  //les fonctions
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    //recuperation de donnés de form
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    try {
      const user = await authService.login({ email, password });
      if (!user) {
        notFound();
      }
      router.push("/");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
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
      <form onSubmit={handleSubmit}>
        <Stack p={4}>
          <Stack gap="4">
            <Field label="Adesse mail" required>
              <Input
                type="email"
                placeholder="me@example.com"
                variant="outline"
                autoComplete="off"
                name="email"
              />
            </Field>

            <Field label="Mot de passe" required>
              <Input
                type="password"
                placeholder="********"
                variant="outline"
                autoComplete="off"
                name="password"
              />
            </Field>
            {error && (
              <Box color="red.500" fontSize="sm">
                {error}
              </Box>
            )}
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
      </form>
    </Box>
  );
}
