import "./Hero.scss";

import { Button } from "@/Components";
import { WorkingIcon } from "@/Resources/Images";

export const Hero = () => {
  return (
    <section className="hero hero__container container">
      <div className="hero__img">
        <img src={WorkingIcon} alt="working icon" />
      </div>
      <article className="hero__group">
        <h1 className="hero__title">More than just shorter links</h1>
        <p className="hero__description">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button>Get Started</Button>
      </article>
    </section>
  );
};
