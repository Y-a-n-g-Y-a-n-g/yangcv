import { notFound } from "next/navigation";
import { HomePage } from "@/components/HomePage";
import { getPageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export const generateStaticParams = () => [{ lang: "en" }];

export const generateMetadata = ({ params }: { params: { lang: string } }) => {
  if (params.lang !== "en") {
    return {};
  }
  return getPageMetadata("en");
};

export default function Page({ params }: { params: { lang: string } }) {
  if (params.lang !== "en") {
    notFound();
  }

  return <HomePage lang="en" />;
}
