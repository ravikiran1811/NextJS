"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function App() {
  const router = useRouter();
  return (
    <div>
      <h1>Hii bro</h1>
      <Link href="/products">product</Link>
      <button
        onClick={() => {
          router.back();
        }}
      >
        Back
      </button>
    </div>
  );
}
