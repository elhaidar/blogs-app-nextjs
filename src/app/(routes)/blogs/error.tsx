"use client";
import { Heading, Stack, Text } from "@/components/ChakraUI";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <Stack align={"center"}>
      <Heading>Oops, something went wrong!</Heading>
      <Text mb={"32px"}>Error: {error.message}</Text>
      <Text
        onClick={reset}
        cursor={"pointer"}
        _hover={{ textDecoration: "underline", textUnderlineOffset: "6px" }}
      >
        Try again
      </Text>
    </Stack>
  );
}
