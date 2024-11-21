import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  labelText: string;
}

export const Header = ({ labelText }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className={cn("text-3xl font-semibold", font.className)}>
        {labelText}
      </h1>
    </div>
  );
};
