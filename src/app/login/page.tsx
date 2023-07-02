"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Page() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleUserLogIn = async () => {
    await signIn("credentials", {
      ...login,
      redirect: true,
      callbackUrl: "/challenge",
    });
  };

  return (
    <div>
      <span>REGISTER</span>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setLogin({ ...login, email: e.currentTarget.value })}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) =>
          setLogin({ ...login, password: e.currentTarget.value })
        }
      />
      <button onClick={handleUserLogIn}>LOG</button>
    </div>
  );
}
