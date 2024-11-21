"use client";
import { LuGithub } from "react-icons/lu";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

export const Social = () => {
  return (
    <div className="flex items-center justify-center gap-x-2 mt-4 ">
      <Button size={"lg"} variant={"outline"}>
        <LuGithub className="h-5 w-5" />
      </Button>
      <Button size={"lg"} variant={"outline"}>
        <FcGoogle className="h-5 w-5" />
      </Button>
    </div>
  );
};
