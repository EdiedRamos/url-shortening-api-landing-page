import "./BoostLink.scss";

import { Button } from "../Button/Button";

export const BoostLink = () => {
  return (
    <section className="boost-link">
      <div className="boost-link__container container">
        <h2 className="boost-link__title">Boost your links today</h2>
        <div className="boost-link--center">
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
};
