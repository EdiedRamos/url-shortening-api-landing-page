import type { LinkResult } from "@/Types";
import { ShortenerContext } from "@/Context";
import { useState } from "react";

interface ShortenerProvider {
  children: React.ReactNode;
}

export const ShortenerProvider = ({ children }: ShortenerProvider) => {
  const [linkResults, setLinkResults] = useState<LinkResult[]>([]);

  const shortenLink = (link: string): void => {
    console.log("GOT IT: ", link);
  };

  const values = { linkResults, shortenLink };

  return (
    <ShortenerContext.Provider value={values}>
      {children}
    </ShortenerContext.Provider>
  );
};
