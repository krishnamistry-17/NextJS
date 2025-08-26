import React from "react";
import Link from "next/link";

export default async function Post() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return (
    <div className="py-10">
      {posts?.map((post: { id: number; name: string }) => (
        <div key={post.id} className="p-2">
          <Link href={`/blog/${post.id}`}>{post.name}</Link>
        </div>
      ))}
    </div>
  );
}
