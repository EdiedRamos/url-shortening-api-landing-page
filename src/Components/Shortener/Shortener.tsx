import "./Shortener.scss";

import { Button } from "@/Components";

export const Shortener = () => {
  return (
    <section className="shortener">
      <div className="shortener__container">
        <input
          className="shortener__input"
          placeholder="Shorten a link here..."
          type="text"
        />
        <Button className="shortener__button">Shorten It!</Button>
      </div>
    </section>
  );
};
