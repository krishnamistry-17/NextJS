import { myServerAction } from "../../action";
import Button from "../../button";

export default function serverActions() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const data = formData.get("name") as string;
    const result = await myServerAction(data);
    console.log("result  :", result);
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <h1 className="text-3xl font-semibold mb-8 text-gray-800">
        Server Actions in Next.js
      </h1>

      <form
        action={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
      >
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter name..."
        />
        <div className="w-full bg-blue-500 hover:bg-blue-600 text-white text-center font-medium py-2 rounded-md ">
          <Button />
        </div>
      </form>
    </div>
  );
}
