import React from "react";
import { Stack } from "@/components/ChakraUI";

export default function PostsGrid({ children }: { children: React.ReactNode }) {
  return <Stack w={"100%"}>{children}</Stack>;
}
