"use client";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Notes from "./notes/page";

export default function Home() {
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
        </div>
      </SignedOut>
    </div>
  );
}
