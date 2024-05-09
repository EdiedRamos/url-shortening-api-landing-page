import { ShortenerContext } from "@/Context";
import { useContext } from "react";

export const useShortener = () => {
  const context = useContext(ShortenerContext);
  if (!context)
    throw new Error("useShortener must to be inside a ShortenerContext");
  return context;
};
