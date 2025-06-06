"use client";

import { logout } from "@/lib/actions/auth";

export default function SignedOutButton() {
  return (
    <div>
      <div className="">
        <button
          className="border border-black py-2 px-3 rounded-md text-center
              "
          onClick={() => logout()}
        >
          SignOut
        </button>
      </div>
    </div>
  );
}
