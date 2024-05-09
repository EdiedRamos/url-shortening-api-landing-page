import React, { useState } from "react";

import { useShortener } from "@/Hooks";

export const ShortenerController = () => {
  const shortener = useShortener();

  const [link, setLink] = useState("");
  const [error, setError] = useState(false);

  const handleLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setLink(event.target.value);
  };

  const handleShorten = () => {
    if (link.trim().length === 0) {
      setError(true);
      return;
    }
    shortener.shortenLink(link);
  };

  return { error, link, handleLink, handleShorten };
};
