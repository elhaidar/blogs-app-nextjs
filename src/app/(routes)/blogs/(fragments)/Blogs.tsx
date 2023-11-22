import { getAllPosts } from "@/services/getAllPosts";
import { PostsProp } from "../page";
import { Heading } from "@/components/ChakraUI";
import PostsGrid from "./PostsGrid";
import PostCard from "./PostCard";

export default async function Blogs() {
  const { posts }: { posts: PostsProp[] } = await getAllPosts();

  return (
    <>
      <Heading mb={4}>Blogs</Heading>
      <PostsGrid>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostsGrid>
    </>
  );
}
