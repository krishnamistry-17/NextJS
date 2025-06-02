import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  //make request header
  const requestHeader = new Headers(request.headers);
  const headerList = headers();

  (await cookies()).set("resultperPage", "20");
  const theme = request.cookies.get("theme");

  console.log("theme :", theme); //cookies
  console.log((await cookies()).get("resultperPage")); //cookies
  console.log((await headerList).get("Authorization"));

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html", //pass the response into html format
      "Set-Cookie": "theme=dark", //pass the cookie
    },
  });
}
