import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("token"); //get cookies token
  console.log("token  :", token);
  return NextResponse.json({ message: "helloo from api" });
}

export async function POST(req: Request) {
  const data = await req.json();
  const { name } = data;
  return NextResponse.json({
    message: `${name}, This message is from api`,
  });
}
//route handlers-GET/POST/PUT/DELETE
