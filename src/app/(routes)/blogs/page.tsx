import { getAllPosts } from "@/services/getAllPosts";
import { Heading } from "@/components/ChakraUI";
import PostCard from "./(fragments)/PostCard";
import PostsGrid from "./(fragments)/PostsGrid";

export interface PostsProp {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

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
