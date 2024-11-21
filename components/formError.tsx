import { CheckCircle } from "lucide-react";
import { BsExclamationCircle } from "react-icons/bs";

export const FormError = ({ message }: { message: string }) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/15 flex items-center justify-center p-4 rounded-md gap-4 text-destructive">
      <BsExclamationCircle className="h-5 w-5 text-destructive" />
      <p>{message}</p>
    </div>
  );
};

export const FormSuccess = ({ message }: { message: string }) => {
  if (!message) return null;
  return (
    <div className="bg-emerald-500/15 flex items-center justify-center p-4 rounded-md gap-4 text-emerald-500">
      <CheckCircle className="h-5 w-5 text-emerald-500" />
      <p>{message}</p>
    </div>
  );
};
