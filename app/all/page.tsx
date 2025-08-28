import Link from "next/link";

export default function All() {
  return (
    <div className="gap-2 flex justify-between flex-col my-8 font-bold text-black pl-[15px]">
      <Link href={"/all/users"}>Users</Link>
      <Link href={"/all/prediction"}>Prediction</Link>
      <Link href={"/all/ui"}>Create Post</Link>
      <Link href={"/all/pages"}>CSR</Link>
      <Link href={"/all/server"}>Server</Link>
      <Link href={"/all/form"}>Form</Link>
      <Link href={"/all/fetchData"}>fetchData</Link>
      <Link href={"/all/posts"}>fetchdata-path</Link>
      <Link href={"/all/pages"}>Rendering</Link>
    </div>
  );
}
