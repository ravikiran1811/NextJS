import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const comment = comments.find((e) => e.id === params.id);
  if(parseInt(params.id)>comments.length){
    redirect("/comments")
  }
  return Response.json(comment);
}
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex((e) => e.id === params.id);
  const body = await req.json();
  comments[index].id = body.id;
  comments[index].text = body.text;
  return Response.json("updated the object");
}
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex((e) => e.id === params.id);
  const deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json(deletedComment);
}
