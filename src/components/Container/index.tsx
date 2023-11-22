import React from "react";
import { Container } from "../ChakraUI";

export function index({ children }: { children: React.ReactNode }) {
  return (
    <Container
      py={{ base: "32px" }}
      w={"100%"}
      maxW={"4xl"}
      color={"black"}
      minH={"100vh"}
    >
      {children}
    </Container>
  );
}
