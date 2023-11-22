export async function getAllPosts() {
  const res = await fetch("https://dummyjson.com/posts", {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
