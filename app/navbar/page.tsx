import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Image from "next/image";

export default function Navbar() {
  return (
    <div
      className="w-full border-b border-gray-200 bg-white px-4
    py-3 shadow-sm flex justify-between items-center
    "
    >
      <Link href={"/"} className="flex items-center gap-2">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={38}
          priority
          className="mt-[20px] ml-[15px]"
        />
        <span className="sr-only">Next.js Home</span>
      </Link>

      {/*link navugation of pages */}
      <div className=" text-xl flex items-center gap-6 justify-end ">
        <Link href={"/"} className="hover:text-blue-600">
          Home
        </Link>
        <Link href={"/about"} className="hover:text-blue-600">
          About
        </Link>
        <Link href={"/contact"} className="hover:text-blue-600">
          Contact
        </Link>
        <Link href={"/all"} className="hover:text-blue-600">
          All
        </Link>

        {/*signin & signup */}
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-4 py-1 rounded border-black border">
              SignIn
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="px-4 py-1 rounded border-black border">
              SignUp
            </button>
          </SignUpButton>
        </SignedOut>

        {/*user profile and logout */}
        <SignedIn>
          <Link
            href={"/user-profile"}
            className="px-4 py-1 rounded border-black border"
          >
            UserProfile
          </Link>
          <SignOutButton>
            <button className="px-4 py-1 rounded border-black border">
              Signout
            </button>
          </SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
}
