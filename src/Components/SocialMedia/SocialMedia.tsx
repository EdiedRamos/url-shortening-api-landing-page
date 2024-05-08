import "./SocialMedia.scss";

import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
} from "@/Resources/Images";

export const SocialMedia = () => {
  return (
    <section className="social-media social-media__container">
      <img src={FacebookIcon} alt="facebook icon" />
      <img src={TwitterIcon} alt="twitter icon" />
      <img src={PinterestIcon} alt="pinterest icon" />
      <img src={InstagramIcon} alt="instagram icon" />
    </section>
  );
};
