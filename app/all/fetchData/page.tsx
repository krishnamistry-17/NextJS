type User = {
  id: number;
  name: string;
  email: string;
};

async function getUser(): Promise<User> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    // This forces SSR for every request (no caching)
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}

export default async function UserPage() {
  const user = await getUser();

  return (
    <div className="py-10 pl-5">
      <h1 className="py-3">using Getserversideprops</h1>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}
