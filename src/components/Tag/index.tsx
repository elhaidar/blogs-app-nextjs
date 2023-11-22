import React from "react";
import { Box, Text } from "@/components/ChakraUI";

export function index({ tag }: { tag: string }) {
  return (
    <Box
      bg="black"
      display={"inline-block"}
      px={2}
      py={1}
      color="white"
      mb={2}
      mr={"8px"}
    >
      <Text fontSize={"xs"} fontWeight="medium">
        {tag}
      </Text>
    </Box>
  );
}
