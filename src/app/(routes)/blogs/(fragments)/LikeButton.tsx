"use client";

import { Flex, Icon, Text } from "@/components/ChakraUI";
import { useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { PostsProp } from "../page";
import { updateLikeOfPost } from "@/services/updateLikeOfPost";

export default function LikeButton({ post }: { post: PostsProp }) {
  const [liked, setLiked] = useState(false);
  const [dataPost, setDataPost] = useState<PostsProp>(post);

  const handleOnClickLike = async () => {
    if (!liked) {
      const res = await updateLikeOfPost(post.id, post.reactions + 1);
      setDataPost(res);
    } else {
      const res = await updateLikeOfPost(post.id, post.reactions);
      setDataPost(res);
    }
    setLiked((prev) => !prev);
  };

  return (
    <Flex
      p={4}
      alignItems="center"
      justifyContent={"space-between"}
      roundedBottom={"sm"}
      borderLeft={"1px"}
      cursor="pointer"
      onClick={handleOnClickLike}
      gap={"6px"}
    >
      <Text>{dataPost.reactions}</Text>
      {liked ? (
        <Icon as={BiSolidLike} fontSize={"xl"} />
      ) : (
        <Icon as={BiLike} fontSize={"xl"} />
      )}
    </Flex>
  );
}
