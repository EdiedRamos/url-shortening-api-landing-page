import "./Footer.scss";

import { Listing, Logo, SocialMedia } from "@/Components";

export const Footer = () => {
  return (
    <footer className="footer footer__container">
      <div className="footer__logo">
        <Logo color="light" />
      </div>
      <div className="footer__redirects">
        <section className="footer__sections">
          <Listing
            title="Features"
            items={["Link Shortening", "Branded Links", "Analytics"]}
          />
          <Listing
            title="Resources"
            items={["Blog", "Developers", "Support"]}
          />
          <Listing
            title="Company"
            items={["About", "Our Team", "Careers", "Contact"]}
          />
        </section>
        <SocialMedia />
      </div>
    </footer>
  );
};
