"use client";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
