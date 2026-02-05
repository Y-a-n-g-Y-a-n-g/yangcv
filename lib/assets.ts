import fs from "fs";
import path from "path";
import { site } from "@/content/site";

const normalizePublicPath = (file: string) => file.replace(/^\//, "");

export const getAssetFlags = () => {
  const avatarPath = path.join(process.cwd(), "public", normalizePublicPath(site.avatar.file));
  const cvPath = path.join(process.cwd(), "public", normalizePublicPath(site.cv.file));

  return {
    hasAvatar: fs.existsSync(avatarPath),
    hasCv: fs.existsSync(cvPath)
  };
};

export const getInitials = (name: string) => {
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
};
