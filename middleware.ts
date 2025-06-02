import { NextResponse, type NextRequest } from "next/server";

export default function Middleware(request: NextRequest) {
  const response = NextResponse.next();

  const themePrefrence = request.cookies.get("theme");
  if (!themePrefrence) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custome-header", "custome-value"); //add custome-header value

  return response;
  //   if (request.nextUrl.pathname === "/profile") //conditional statemnet for middleware
  //     //this is using conditional statement
  //     return NextResponse.redirect(new URL("/about", request.url));
  //   return NextResponse.redirect(new URL("/", request.url));
}

// export const config = {
//   matcher: "/profile", //matcher for middleware
// };
