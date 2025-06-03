"use server";

export async function myServerAction(data: string) {
  console.log("server action recieved :", data);
  return { message: `Processed ${data}` };
}
//prevstate-Formstate
async function createPost(prevState: any, formData: FormData) {
  const title = formData.get("title");
  const body = formData.get("body");

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });
  const json = await res.json();
  if (!res.ok) {
    return { message: "Failed to create Post" };
  }
  return { message: "Post Created successfully", post: json };
}
export default createPost;
