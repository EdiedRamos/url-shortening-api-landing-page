import "./ShortedLink.scss";

import { Button } from "../Button/Button";

interface ShortedLink {
  id: string;
  originalLink: string;
  shortedLink: string;
}

export const ShortedLink = ({ id, originalLink, shortedLink }: ShortedLink) => {
  return (
    <div key={id} className="shorted-link shorted-link__container">
      <p className="shorted-link__original">{originalLink}</p>
      <div className="shorted-link__options">
        <p className="shorted-link__shorted">{shortedLink}</p>
        <Button className="shorted-link__copy">Copy</Button>
      </div>
    </div>
  );
};
