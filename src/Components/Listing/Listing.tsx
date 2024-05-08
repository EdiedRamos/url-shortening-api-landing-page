import "./Listing.scss";

interface Listing {
  title: string;
  items: string[];
}

export const Listing = ({ title, items }: Listing) => {
  return (
    <article className="listing listing__container">
      <h3 className="listing__title">{title}</h3>
      <ul className="listing__list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
};
