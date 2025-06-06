import { notFound } from "next/navigation";

async function fetchUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    return null;
  }
  const user = await res.json();
  return user;
}
export default async function UsersPage({
  //in ts params write this for id find
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const user = await fetchUser(userId);
  if (!user) {
    notFound();
  }
  return (
    <div className="text-center pt-[25px] justify-start">
      <h1>
        <strong>Id:</strong>
        {user.id}
      </h1>
      <h1>
        <strong>Name:</strong>
        {user.name}
      </h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {user.website}
        </a>
      </p>
      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
      <p>
        <strong>Address:</strong> {user.address.street}, {user.address.city}
      </p>
    </div>
  );
}
