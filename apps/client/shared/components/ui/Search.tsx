"use client";
import { Input, InputGroup, useMediaQuery } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

export default function Search() {
  const [isDisplaySearch] = useMediaQuery(["(min-width:805px)"]);
  return (
    <InputGroup startElement={<LuSearch />}>
      <Input
        placeholder="Recherche des articles"
        bg="rgb(240, 242, 245)"
        rounded="lg"
        _focus={{
          caretColor: "blue.500",
          borderColor: "blue.500",
          boxShadow: "0 0 0 1px blue.500",
        }}
      />
    </InputGroup>
  );
}
