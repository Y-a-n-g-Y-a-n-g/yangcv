import { HomePage } from "@/components/HomePage";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("zh");

export default function Page() {
  return <HomePage lang="zh" />;
}
