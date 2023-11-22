import React from "react";
import { Box, Flex, HStack, Heading, Text } from "@/components/ChakraUI";
import { PostsProp } from "../page";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { Tag } from "@/components";
import LikeButton from "./LikeButton";

export default function PostCard({ post }: { post: PostsProp }) {
  return (
    <Box
      w="auto"
      rounded={"sm"}
      my={5}
      mx={[0, 5]}
      overflow={"hidden"}
      bg="white"
      border={"1px"}
      borderColor="black"
      boxShadow={"6px 6px 0 black"}
    >
      <Box p={4}>
        {post.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
        <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
          {post.title}
        </Heading>
        <Text color={"gray.500"} noOfLines={2}>
          {post.body}
        </Text>
      </Box>
      <HStack borderTop={"1px"} color="black">
        <Link href={`/blogs/post/${post.id}`} style={{ width: "100%" }}>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={"space-between"}
            roundedBottom={"sm"}
            cursor={"pointer"}
            w="full"
          >
            <Text fontSize={"md"} fontWeight={"semibold"}>
              View more
            </Text>
            <BsArrowUpRight />
          </Flex>
        </Link>
        <LikeButton post={post} />
      </HStack>
    </Box>
  );
}
