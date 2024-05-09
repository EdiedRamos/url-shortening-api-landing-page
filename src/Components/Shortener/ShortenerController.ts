import React, { useState } from "react";

import { useShortener } from "@/Hooks";

export const ShortenerController = () => {
  const shortener = useShortener();

  const [link, setLink] = useState("");
  // default is false
  const [error, setError] = useState(true);

  const handleLink = (event: React.ChangeEvent<HTMLInputElement>) => {};

  return { link, handleLink, error };
};
