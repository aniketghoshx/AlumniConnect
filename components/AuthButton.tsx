'use client';

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";


export function AuthButton({ type}:{type: string}) {
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        router.push(`/${type === "signin" ? "signin" : "signup/alumni"}`);
      }}
      variant={`${type === "signin" ? "ghost" : "default"}`}
    >
      {type === "signin" ? "Log In" : "Sign up"}
    </Button>
  );
}
