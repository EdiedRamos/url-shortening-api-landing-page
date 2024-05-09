import type { LinkResult } from "@/Types";
import { ShortenerContext } from "@/Context";
import { useState } from "react";

interface ShortenerProvider {
  children: React.ReactNode;
}

export const ShortenerProvider = ({ children }: ShortenerProvider) => {
  const [linkResults, setLinkResults] = useState<LinkResult[]>([]);

  const shortenLink = (link: string): void => {
    try {
      const encodedLink = encodeURIComponent(link);

      fetch("https://cleanuri.com/api/v1/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: link }),
      })
        .then((response) => response.json())
        .then((data) => {
          setLinkResults((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              originalLink: link,
              shortedLink: data.result_url,
            },
          ]);
        });
      console.log("GOT IT: ", link);
    } catch {}
  };

  const values = { linkResults, shortenLink };

  return (
    <ShortenerContext.Provider value={values}>
      {children}
    </ShortenerContext.Provider>
  );
};
