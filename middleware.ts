import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

{
  /*for authenticated user 
  
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { redirectToSignIn, userId } = await auth();

  if (!userId && isPublicRoute(req)) {
    return redirectToSignIn();
  }
});
  
  */
}

// function Middleware(request: NextRequest) {
//   const response = NextResponse.next();

//   const themePrefrence = request.cookies.get("theme");
//   if (!themePrefrence) {
//     response.cookies.set("theme", "dark");
//   }
//   response.headers.set("custome-header", "custome-value"); //add custome-header value

//   return response;
//   //   if (request.nextUrl.pathname === "/profile") //conditional statemnet for middleware
//   //     //this is using conditional statement
//   //     return NextResponse.redirect(new URL("/about", request.url));
//   //   return NextResponse.redirect(new URL("/", request.url));
// }
// export default Middleware

// export const config = {
//   matcher: "/profile", //matcher for middleware
// };
