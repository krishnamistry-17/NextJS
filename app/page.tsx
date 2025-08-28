"use server";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Notes from "./notes/page";
import { auth } from "@/auth";
import SignedInBtn from "./component/sign-in-button";
import Link from "next/link";
import SignedOutButton from "./component/sign-out-button";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const filters = (await searchParams).filters;
  const session = await auth();
  if (session?.user) {
    return (
      <div>
        <Link href={"/user-info"}>UserInfo</Link>
        <SignedOutButton />
      </div>
    );
  }
  console.log("session :", session);
  return (
    <div className="py-10">
      <SignedIn>
        <Notes />
      </SignedIn>

      <SignedOut>
        <div>
          <p className="text-center  hover:text-blue-500 underline">
            <SignInButton mode="modal">
              <button className="px-4 py-1 rounded border-black border">
                SignIn
              </button>
            </SignInButton>
          </p>
          <p className="text-center py-1.5">OR</p>
          <div>
            <SignedInBtn />
          </div>
        </div>
      </SignedOut>
    </div>
  );
}
