import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

// export async function POST(request: Request) {
//   const comment = await request.json();
//   const newcomment = {
//     id: comments.length + 1,
//     message: comment.message,
//   };
//   comments.push(newcomment);
//   return new Response(JSON.stringify(newcomment), {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     status: 201,
//   });
// }

export async function POST(request: Request) {
  try {
    const comment = await request.json();

    if (!comment.message) {
      return new Response(JSON.stringify({ error: "Message is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const newComment = {
      id: comments.length + 1,
      message: comment.message,
    };

    comments.push(newComment);

    return new Response(JSON.stringify(newComment), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("POST error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
