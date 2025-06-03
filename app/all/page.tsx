import Link from "next/link";

export default function All() {
  return (
    <div className="gap-2 flex justify-between flex-col items-center my-8 font-bold text-black">
      <Link href={"/all/users"}>Users</Link>
      <Link href={"/all/prediction"}>Prediction</Link>
      <Link href={"/all/ui"}>Create Post</Link>
      <Link href={"/all/pages"}>CSR</Link>
      <Link href={"/all/server"}>Server</Link>
    </div>
  );
}
