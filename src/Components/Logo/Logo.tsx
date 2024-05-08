import "./Logo.scss";

type Color = "dark" | "light";

interface Logo {
  color?: Color;
}

export const Logo = ({ color = "dark" }: Logo) => {
  return (
    <p
      className="logo"
      style={{ color: color === "dark" ? "hsl(260, 8%, 14%)" : "white" }}
    >
      Shortly
    </p>
  );
};
