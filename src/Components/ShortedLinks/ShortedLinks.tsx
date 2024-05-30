import "./ShortedLinks.scss";

import { EmptyList, ShortedLink } from "@/Components";

import { useShortener } from "@/Hooks";

export const ShortedLinks = () => {
  const { linkResults } = useShortener();
  return (
    <section className="shorted-links">
      <div className="shorted-links__container container">
        {linkResults.length === 0 ? (
          <EmptyList />
        ) : (
          linkResults.map((info) => <ShortedLink key={info.id} {...info} />)
        )}
      </div>
    </section>
  );
};
