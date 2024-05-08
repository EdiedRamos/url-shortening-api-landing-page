import "./SocialMedia.scss";

import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
} from "@/Generals/Icons";

export const SocialMedia = () => {
  return (
    <section className="social-media social-media__container">
      <FacebookIcon className="social-media__icon" />
      <TwitterIcon className="social-media__icon" />
      <PinterestIcon className="social-media__icon" />
      <InstagramIcon className="social-media__icon" />
    </section>
  );
};
