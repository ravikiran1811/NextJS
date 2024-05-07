import Modal from "@/components/modal";
import { data } from "../../../Data";
import Image from "next/image";

export default function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: any = data.find((p) => p.id === id)!;
  console.log(photo);
  return (
    <>
      <p>hello {photo.name}</p>
    </>
  );
}
