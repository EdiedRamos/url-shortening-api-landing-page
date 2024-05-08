import { Button, Logo } from "@/Components";

const NAV_MOCK = ["Features", "Pricing", "Resources"];

export const Header = () => {
  return (
    <header>
      <Logo />
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
      {/* mobile version */}
      <div>
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
    </header>
  );
};
