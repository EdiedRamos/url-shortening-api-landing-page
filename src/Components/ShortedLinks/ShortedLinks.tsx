import "./ShortedLinks.scss";

import { Button } from "../Button/Button";

export const ShortedLinks = () => {
  return (
    <section className="shorted-links">
      <div className="shorted-links__container container">
        <div>
          <p>https://www.frontendmentor.io</p>
          <div>
            <p>https://rel.ink/k4Ikzl</p>
            <Button>Copy</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
