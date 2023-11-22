export const updateLikeOfPost = async (id: number, reactionCount: number) => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    method: "PATCH" /* or PATCH */,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      reactions: reactionCount,
    }),
  });
  if (!res.ok) {
    throw new Error("Failed to POST");
  }
  return res.json();
};
