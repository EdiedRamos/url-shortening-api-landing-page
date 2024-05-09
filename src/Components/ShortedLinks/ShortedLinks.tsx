import "./ShortedLinks.scss";

import { ShortedLink } from "../ShortedLink/ShortedLink";
import { useShortener } from "@/Hooks";

const MOCK = [
  {
    id: "1",
    originalLink: "https://www.frontendmentor.io",
    shortedLink: "https://rel.ink/k4Ikzl",
  },
  {
    id: "2",
    originalLink: "https://www.youtube.com",
    shortedLink: "https://rel.ink/z5Ilsl",
  },
];

export const ShortedLinks = () => {
  const shortener = useShortener();
  return (
    <section className="shorted-links">
      <div className="shorted-links__container container">
        {MOCK.map((info) => (
          <ShortedLink key={info.id} {...info} />
        ))}
      </div>
    </section>
  );
};
