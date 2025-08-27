"use client";

import Link from "next/link";
import Image from "next/image";
import {
  SignInButton,
  SignUpButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { SlOptionsVertical } from "react-icons/sl";
import { useState } from "react";
import ThemeToggle from "../theme/page";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <nav
        className="w-full border-b border-gray-200 bg-white shadow-sm 
    px-4 py-3 flex justify-between items-center relative"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={38}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <Link href="/all" className="hover:text-blue-600">
            All
          </Link>
          <div>
            <ThemeToggle />
          </div>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-1 rounded border border-black">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-4 py-1 rounded border border-black">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <Link
              href="/user-profile"
              className="px-4 py-1 rounded border border-black"
            >
              User Profile
            </Link>
            <SignOutButton>
              <button className="px-4 py-1 rounded border border-black">
                Sign Out
              </button>
            </SignOutButton>
          </SignedIn>
        </div>

        {/* Mobile Auth Buttons (outside toggle) */}
        <div className="md:hidden flex items-center gap-2">
          <SignedIn>
            <Link
              href="/user-profile"
              className="text-sm px-3 py-1 rounded border border-black"
            >
              Profile
            </Link>
            <SignOutButton>
              <button className="text-sm px-3 py-1 rounded border border-black">
                Sign Out
              </button>
            </SignOutButton>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-sm px-3 py-1 rounded border border-black">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="text-sm px-3 py-1 rounded border border-black">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          <button onClick={toggleMenu} aria-label="Menu">
            <SlOptionsVertical size={22} />
          </button>
        </div>

        {/* Mobile Dropdown Menu (page links only) */}
        {isMenuOpen && (
          <div className="absolute top-[60px] right-4 w-56 bg-white border border-gray-200 rounded-md shadow-md p-4 z-50 md:hidden">
            <nav className="flex flex-col gap-3 text-sm">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
              <Link href="/all" className="hover:text-blue-600">
                All
              </Link>
            </nav>
          </div>
        )}
      </nav>
    </>
  );
}
