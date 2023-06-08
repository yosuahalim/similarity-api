import React from "react";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import ApiDashboard from "@/components/ApiDashboard";
import RequestApiKey from "@/components/RequestApiKey";

type Props = {};

export const metadata: Metadata = {
  title: "Similarity API | Dashboard",
  description: "Free API for calculating similarity between two texts.",
};

const page = async (props: Props) => {
  const user = await getServerSession(authOptions);
  if (!user) return notFound();

  const apiKey = await db.apiKey.findFirst({
    where: {
      userId: user.user.id,
      enabled: true,
    },
  });
  return (
    <div className="max-w-7xl mx-auto mt-16">
      {/* @ts-expect-error Server Component */}
      {apiKey ? <ApiDashboard /> : <RequestApiKey />}
    </div>
  );
};

export default page;
