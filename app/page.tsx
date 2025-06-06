"use server";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Notes from "./notes/page";

import { auth } from "@/auth";
import SignedInBtn from "./component/sign-in-button";
import Link from "next/link";
import SignedOutButton from "./component/sign-out-button";

export default async function Home() {
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
    <div>
      <SignedIn>
        <Notes />
      </SignedIn>

      <SignedOut>
        <div>
          <h1 className="text-center text-black text-2xl font-bold pt-[55px]">
            Hello,Welcome!!
          </h1>
          <p className="text-center text-black text-2xl font-bold pt-[15px]">
            Please SignedIn First!!!
          </p>
          <p className="text-center pt-[10px] hover:text-blue-500 underline">
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
