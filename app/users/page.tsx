export default async function Users() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return (
    <div>
      <p>Users List</p>
      <ul>
        {posts.map((user: { id: number; name: string }) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
