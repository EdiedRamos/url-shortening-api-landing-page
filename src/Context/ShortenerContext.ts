import type { LinkResult } from "@/Types";
import { createContext } from "react";

interface ShortenerContext {
  linkResults: LinkResult[];
}

export const ShortenerContext = createContext<ShortenerContext | null>(null);
