"use client";

import { Avatar, HStack, Icon, Stack, Text } from "@/components/ChakraUI";
import { BiLike } from "react-icons/bi";
import { PostsProp } from "../../../page";

export default function PostInfo({ post }: { post: PostsProp }) {
  return (
    <HStack my={"24px"} justify={"space-between"}>
      <HStack gap={"12px"}>
        <Avatar src="https://bit.ly/broken-link" />
        <Stack gap={0}>
          <Text>Author</Text>
          <HStack fontSize={"xs"}>
            <Text>12 min read</Text>
            <Text>|</Text>
            <Text>1 day ago</Text>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Text>{post.reactions}</Text>
        <Icon as={BiLike} fontSize={"xl"} />
      </HStack>
    </HStack>
  );
}
