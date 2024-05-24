import { revalidateTag } from "next/cache";

export function GET(request: Request) {
  console.log("calling invalid users");
  revalidateTag("Users");
  return Response.redirect(new URL("/", request.url));
}
