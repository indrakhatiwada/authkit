import { LoginButton } from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-center bg-slate-50">
      <div className="space-y-6">
        <h1
          className={cn("text-5xl font-bold drop-shadow-md ", font.className)}
        >
          AUTHKIT
        </h1>
        <p>Auth First Nextjs starter for myself and anybody that needs</p>
        <LoginButton>
          <Button size={"lg"} className="mt-6">
            Get Started
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
