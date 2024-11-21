"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
}: //   asChild = false,
LoginButtonProps) => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <h1>TODO:IMPLEMENT MODAL</h1>;
  }
  return (
    <span className="cursor-pointer" onClick={handleLoginClick}>
      {children}
    </span>
  );
};
