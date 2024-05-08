import "./StatisticsDetails.scss";

import {
  BrandRecognitionIcon,
  DetailedRecordsIcon,
  FullyCustomizableIcon,
} from "@/Resources/Images";

import { StatisticsDetail } from "@/Components";

export const StatisticsDetails = () => {
  return (
    <div className="statistics-details statistics-details__container">
      <StatisticsDetail
        title="Brand Recognition"
        text="Boost your brand recognition with each click. Generic links don't mean a
        thing. Branded links help instil confidence in your content."
        img={BrandRecognitionIcon}
      />
      <StatisticsDetail
        className="statistics-detail__container--line"
        title="Detailed Records"
        text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        img={DetailedRecordsIcon}
      />
      <StatisticsDetail
        className="statistics-detail__container--line"
        title="Fully Customizable"
        text="Improve brand awareness and content discoverability through customizable links, supercharching audience engagement."
        img={FullyCustomizableIcon}
      />
    </div>
  );
};
