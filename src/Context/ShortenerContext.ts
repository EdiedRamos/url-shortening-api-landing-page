import { createContext } from "react";

interface ShortenerContext {}

export const ShortenerContext = createContext<ShortenerContext | null>(null);
