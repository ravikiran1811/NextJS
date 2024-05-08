import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? comments.filter((e) => e.text.toLowerCase().includes(query.toLowerCase()))
    : comments;
  return Response.json(filteredComments);
}
export async function POST(req: Request) {
  const comment = await req.json();
  const newComment = {
    id: (comments.length + 1).toString(),
    text: comment.text as string,
  };
  comments.push(newComment);
  return Response.json(newComment);
}
