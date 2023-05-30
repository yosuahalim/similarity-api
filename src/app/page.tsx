import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Similarity API | Home",
  description: "Free API for calculating similarity between two texts.",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading
            size="lg"
            className="three-d text-black dark:text-light-gold"
          >
            Easily determine <br /> text similarity.
          </LargeHeading>

          <Paragraph className="max-x-xl lg:text-left">
            With the text similarity API, you can easily determine the
            similarity between two texts. The API is free to use and has no rate
            limits.{" "}
            <Link
              href="/login"
              className="underline underline-offset-2 text-black dark:text-light-gold"
            >
              API key
            </Link>
          </Paragraph>

          <div className="relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
            <Image
              src={"/typewriter.png"}
              alt="Typewriter"
              priority
              className="img-shadow object-contain"
              fill
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
