import "./StatisticsDetail.scss";

interface StatisticsDetail {
  title: string;
  text: string;
  img: string;
  className?: string;
}

export const StatisticsDetail = ({
  className = "",
  title,
  text,
  img,
}: StatisticsDetail) => {
  return (
    <article
      className={`statistics-detail statistics-detail__container ${className}`}
    >
      <div className="statistics-detail__icon">
        <img src={img} alt="icon" />
      </div>
      <h3 className="statistics-detail__title">{title}</h3>
      <p className="statistics-detail__text">{text}</p>
    </article>
  );
};
