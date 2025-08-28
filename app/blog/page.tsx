"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "./loading";

export default function Post() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPost() {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const postss = await response.json();
      setPosts(postss);
      setLoading(false);
    }
    getPost();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="py-10 max-w-lg mx-auto">
      {posts?.map((post: { id: number; name: string }) => {
        return (
          <div className=" border border-gray-400">
            <div
              key={post.id}
              className="p-2 flex items-center justify-between"
            >
              <div>
                <p>{post.name}</p>
              </div>
              <div className="flex justify-end">
                <Link href={`/blog/${post.id}`} className="underline">
                  view details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
