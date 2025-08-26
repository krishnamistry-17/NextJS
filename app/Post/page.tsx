import React from "react";

export default async function getPostData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();
  console.log("posts :", posts);
}
