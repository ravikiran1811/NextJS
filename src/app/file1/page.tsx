import Link from "next/link";
import { data } from "./Data";
import Image from "next/image";
export default function File1() {
  return (
    <div>
      <div style={{ display: "flex", gap: "30px", margin: "20px" }}>
        {data.map((e) => (
          <Link key={e.id} href={`/file1/${e.id}`}>
            <Image width={100} height={100} src={e.src} alt={"Locations"} />
            <p>{e.location}</p>
          </Link>
        ))}
      </div>
      <Link href="/file1/file2">F2</Link>
    </div>
  );
}
