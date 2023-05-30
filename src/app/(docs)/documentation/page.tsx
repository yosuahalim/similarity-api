import DocumentationTabs from "@/components/DocumentationTabs";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { Metadata } from "next";
import React from "react";
import "simplebar-react/dist/simplebar.min.css";

type Props = {};

export const metadata: Metadata = {
  title: "Similarity API | Documentation",
  description: "Free API for calculating similarity between two texts.",
};

const page = (props: Props) => {
  return (
    <div className="container max-w-7xl mx-auto mt-12">
      <div className="flex flex-col items-center gap-6">
        <LargeHeading>Making a request</LargeHeading>
        <Paragraph>api/v1/similarity</Paragraph>

        <DocumentationTabs />
      </div>
    </div>
  );
};

export default page;
