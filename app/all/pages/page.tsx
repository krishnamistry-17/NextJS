import React from "react";

interface Post {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function PostPerPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts: Post[] = await res.json();

  return (
    <div>
      <h1 className="text-black font-bold text-xl pl-[10px]">
        Posts Using Rendering & map
      </h1>
      {posts.map((post) => (
        <div key={post.id} className="pl-[10px]">
          <p className="pt-[8px]">
            <strong>Id:</strong>
            {post.id}
          </p>
          <p>
            <strong>Name:</strong>
            {post.name}
          </p>
          <p>
            <strong>UserName:</strong>
            {post.username}
          </p>
          <p>
            <strong>Email:</strong>
            {post.email}
          </p>
        </div>
      ))}
    </div>
  );
}
