import "./Header.scss";

import { BurgerIcon, CloseIcon } from "@/Generals/Icons";
import { Button, Logo } from "@/Components";

import { useState } from "react";

const NAV_MOCK = ["Features", "Pricing", "Resources"];

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShow = () => setShowMenu((prev) => !prev);

  return (
    <header className="header">
      <div className="header__controls--mobile container">
        <Logo />
        <div className="header__container--toggle">
          <button onClick={handleShow}>
            {showMenu ? <CloseIcon /> : <BurgerIcon />}
          </button>
        </div>
      </div>
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
      <div
        className={`header__container--mobile container ${
          showMenu ? "show" : "hide"
        }`}
      >
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
