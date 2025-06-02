import ButtonComponent from "./button";

export default async function Contact() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(posts);
  console.log("hey is this server or client component?");
  return (
    <div>
      <p>Contact Page</p>
      <ButtonComponent />
    </div>
  );
}
