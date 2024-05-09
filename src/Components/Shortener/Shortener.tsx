import "./Shortener.scss";

import { Button } from "@/Components";
import { ShortenerController } from "./ShortenerController";

export const Shortener = () => {
  const { error, link, handleLink, handleShorten } = ShortenerController();

  return (
    <section className="shortener container">
      <div className="shortener__container">
        <div className="shortener__input-group">
          <input
            className={`shortener__input ${
              error ? "shortener__input--error" : ""
            }`}
            error-message="edied ramos"
            placeholder="Shorten a link here..."
            type="text"
            value={link}
            onChange={handleLink}
          />
          {error && <p className="shortener__error">Please add a link</p>}
        </div>
        <Button className="shortener__button" onClick={handleShorten}>
          Shorten It!
        </Button>
      </div>
    </section>
  );
};
