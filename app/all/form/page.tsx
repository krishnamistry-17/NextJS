"use client";
import { useFormState } from "react-dom";
import { updateUser } from "./formaction";

export default function UserPage() {
  const initialState = { message: null };
  const [formState, formAction] = useFormState(updateUser, initialState);

  return (
    <div className="py-10 max-w-md mx-auto">
      <form action={formAction}>
        <h1 className="mb-2">Update User</h1>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="border p-2 mb-2 block"
        />
        {formState.message && (
          <p className="text-red-600">{formState.message}</p>
        )}
        <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2">
          Update
        </button>
      </form>
    </div>
  );
}
