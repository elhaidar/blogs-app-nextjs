//import library ChakraUI
import { Heading, Stack, Text } from "@/components/ChakraUI";

//import Link from next
import Link from "next/link";

export default function Home() {
  return (
    <Stack align={"center"} justify={"center"} minH={"50vh"} gap={"32px"}>
      <Heading>Welcome to Blog App</Heading>
      <Link href={"/blogs"}>
        <Text
          _hover={{ textDecoration: "underline", textUnderlineOffset: "4px" }}
        >
          See blog posts
        </Text>
      </Link>
    </Stack>
  );
}
