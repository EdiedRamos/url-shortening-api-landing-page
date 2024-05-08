import { Button } from "@/Components";

export const Shortener = () => {
  return (
    <section>
      <div>
        <input placeholder="Shorten a link here..." type="text" />
        <Button>Shorten It!</Button>
      </div>
    </section>
  );
};
