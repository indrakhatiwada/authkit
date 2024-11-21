"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  const router = useRouter();

  return (
    <Button variant={"link"} onClick={() => router.push(href)}>
      {label}
    </Button>
  );
};
