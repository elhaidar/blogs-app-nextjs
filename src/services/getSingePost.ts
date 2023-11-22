export async function getSinglePost(id: number) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
