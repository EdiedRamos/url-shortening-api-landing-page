import "./ShortedLinks.scss";

import { ShortedLink } from "../ShortedLink/ShortedLink";
import { useShortener } from "@/Hooks";

export const ShortedLinks = () => {
  const { linkResults } = useShortener();
  return (
    <section className="shorted-links">
      <div className="shorted-links__container container">
        {linkResults.map((info) => (
          <ShortedLink key={info.id} {...info} />
        ))}
      </div>
    </section>
  );
};
