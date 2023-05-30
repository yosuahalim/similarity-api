import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Similarity - A tool for comparing text",
  description: "A tool for comparing text",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body
        className={"min-h-screen bg-slate-50 dark:bg-slate-900 antialiased"}
      >
        <Providers>
          {children}

          <Toaster position="bottom-right" />

          {/* @ts-expect-error Server Component */}
          <Navbar />
        </Providers>

        <div className="h-40 md:hidden"></div>
      </body>
    </html>
  );
}
