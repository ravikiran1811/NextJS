"use client";
import { useState } from "react";
import Link from "next/link";
export default function OrderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [input, setInput] = useState("");
  const NavLinks = [
    { name: "Register", href: "/orderProduct/register" },
    { name: "Login", href: "/orderProduct/login" },
  ];
  return (
    <html lang="en">
      <body>
        <div>
          {NavLinks.map((e) => (
            <Link key={e.name} href={e.href}>
              {e.name}
            </Link>
          ))}

          <input value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
        {children}
      </body>
    </html>
  );
}
