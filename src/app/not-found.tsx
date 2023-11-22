//import ChakraUI library
import { Heading, Stack, Text } from "@/components/ChakraUI";

//import Link from next
import Link from "next/link";

export default function NotFound() {
  return (
    <Stack align={"center"} justify={"center"} gap={4} minH={"50vh"}>
      <Heading>404 | Not Found</Heading>
      <Link href={"/"}>
        <Text
          textDecoration={"underline"}
          textUnderlineOffset={"2px"}
          fontWeight={"semibold"}
        >
          Back to home
        </Text>
      </Link>
    </Stack>
  );
}
