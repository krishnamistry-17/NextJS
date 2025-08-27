import { UpdateUser } from "./action";

export default function userProfile({ userId }: { userId: string }) {
  const changeId = UpdateUser.bind(null, "12345");
  return (
    <form action={changeId}>
      <input type="text" />
      <button type="submit">Update user</button>
    </form>
  );
}
