import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));
  const headerList = headers();
  console.log(headerList.get("Authorization"));
  const theme = request.cookies.get("theme");
  cookies().set("resultsPerPage","20");
  console.log(cookies().get("resultsPerPage"))
  console.log(theme);
  return new Response("<h1>Api data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark; Path=/; Secure; HttpOnly; SameSite=Strict",
    },
  });
}
