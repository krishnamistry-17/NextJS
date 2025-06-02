export async function GET() {
  //route handlers cache by default using GET method
  return Response.json({
    time: new Date().toLocaleTimeString(), // this shows current time
  });
}
