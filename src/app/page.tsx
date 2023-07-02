'use client'
import { signOut } from "next-auth/react";

export default async function Home() {
  return (
    <div>
      <button onClick={() => signOut()}>serrarcecion</button>
    </div>
  );
}
