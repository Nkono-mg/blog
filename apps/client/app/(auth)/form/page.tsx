import ParticleCanvas from "@/shared/components/ParticleCanvas";
import Template from "@/shared/components/Template";
import { Box } from "@chakra-ui/react";
import Login from "../login/page";
import SignUp from "../signup/page";

export default function FormLoginSignUp() {
  return (
    <Box position="relative" minH="100vh" overflow="hidden">
      <Template>
        <Login />
      </Template>
      <ParticleCanvas />
    </Box>
  );
}
