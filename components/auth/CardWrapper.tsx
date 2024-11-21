import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
import { Social } from "./Social";
import { BackButton } from "./BackButton";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backLabel: string;
  backhref: string;
  showIcon?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backLabel,
  backhref,
  showIcon = false,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header labelText={headerLabel} />
      </CardHeader>

      <CardContent>
        {children}

        {showIcon && <Social />}
      </CardContent>
      <CardFooter className="">
        <BackButton href={backhref} label={backLabel} />
      </CardFooter>
    </Card>
  );
};
