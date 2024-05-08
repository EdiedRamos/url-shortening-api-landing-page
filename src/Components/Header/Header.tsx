import "./Header.scss";

import { Button, Logo } from "@/Components";

const NAV_MOCK = ["Features", "Pricing", "Resources"];

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      {/* desktop version */}
      <div className="header__container--desktop">
        <nav>
          <ul>
            {NAV_MOCK.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
        <div>
          <Button>Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
      {/* mobile version */}
      <div className="header__container--mobile container">
        <nav className="header__navbar--mobile">
          <ul>
            {NAV_MOCK.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
        <hr className="header__container--separator" />
        <div className="header__access--mobile">
          <Button>Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  );
};
