import { LogoIcon } from "@/Generals/Icons/LogoIcon";

type Color = "dark" | "light";

interface Logo {
  color?: Color;
}

export const Logo = ({ color = "dark" }: Logo) => {
  return (
    <LogoIcon
      style={{ color: color === "dark" ? "hsl(260, 8%, 14%)" : "white" }}
    />
  );
};
