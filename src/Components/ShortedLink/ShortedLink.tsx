import { Button } from "../Button/Button";

interface ShortedLink {
  id: string;
  originalLink: string;
  shortedLink: string;
}

export const ShortedLink = ({ id, originalLink, shortedLink }: ShortedLink) => {
  return (
    <div key={id} className="">
      <p>{originalLink}</p>
      <div>
        <p>{shortedLink}</p>
        <Button>Copy</Button>
      </div>
    </div>
  );
};
