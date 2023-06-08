"use client";

import { ButtonHTMLAttributes, FC } from "react";
import { Button } from "./ui/Button";
import { Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "./ui/Toast";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
}

const CopyButton: FC<Props> = ({ valueToCopy, className, ...props }) => {
  return (
    <Button
      {...props}
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(valueToCopy);

        toast({
          title: "Copied",
          message: "API key copied to clipboard",
          type: "success",
        });
      }}
      variant="ghost"
      className={cn(className)}
    >
      <Copy className="h-5 w-5" />
    </Button>
  );
};

export default CopyButton;
