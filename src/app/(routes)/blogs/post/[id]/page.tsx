import {
  Avatar,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
} from "@/components/ChakraUI";
import { getSinglePost } from "@/services/getSingePost";
import { Tag } from "@/components";
import { PostsProp } from "../../page";
import { SlLike } from "react-icons/sl";
import PostInfo from "./(fragments)/PostInfo";

export default async function PostDetail({
  params,
}: {
  params: { id: number };
}) {
  const post: PostsProp = await getSinglePost(params.id);

  return (
    <>
      <HStack gap={0}>
        {post.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </HStack>
      <Heading>{post.title}</Heading>
      <PostInfo post={post} />
      <Text py={"24px"}>{post.body}</Text>
    </>
  );
}
