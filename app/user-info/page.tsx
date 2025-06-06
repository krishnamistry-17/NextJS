import { auth } from "@/auth";

export default async function UserInfo() {
  const session = await auth();

  return (
    <div>
      <p>UserName-{session?.user?.name}</p>
      <p>Email-{session?.user?.email}</p>
    </div>
  );
}
