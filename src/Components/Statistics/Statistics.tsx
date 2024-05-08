import "./Statistics.scss";

import { StatisticsDetails } from "@/Components";

export const Statistics = () => {
  return (
    <section className="statistics statistics__container">
      <div className="container">
        <h2 className="statistics__title">Advanced Statistics</h2>
        <p className="statistics__description">
          Track your links are performing across the web with
        </p>
        <p className="statistics__description">
          our advanced statistics dashboard.
        </p>
        <StatisticsDetails />
      </div>
    </section>
  );
};
