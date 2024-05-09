import type { LinkResult } from "@/Types";
import { createContext } from "react";

interface ShortenerContext {
  linkResults: LinkResult[];
  shortenLink: (link: string) => void;
}

export const ShortenerContext = createContext<ShortenerContext | null>(null);
