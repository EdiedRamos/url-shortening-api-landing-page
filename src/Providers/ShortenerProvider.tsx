import type { LinkResult } from "@/Types";
import { ShortenerContext } from "@/Context";
import { useState } from "react";

interface ShortenerProvider {
  children: React.ReactNode;
}

export const ShortenerProvider = ({ children }: ShortenerProvider) => {
  const [linkResults, setLinkResults] = useState<LinkResult[]>([]);

  const values = { linkResults };

  return (
    <ShortenerContext.Provider value={values}>
      {children}
    </ShortenerContext.Provider>
  );
};
