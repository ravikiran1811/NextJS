
import Image from "next/image";
import { data } from "../Data";

export default function Photopage({ params: { id } }: { params: { id: string } }) {
    const photo: any = data.find((p) => p.id === id)!;
    return (
        <div>
            <p>{photo.name}</p>
            <Image src={photo.src} alt={"Locations"} width={500} height={500} />
            <p>{photo.location}</p>
        </div>
    );
}
