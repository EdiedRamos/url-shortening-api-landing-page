import { ShortenerContext } from "@/Context";

interface ShortenerProvider {
  children: React.ReactNode;
}

export const ShortenerProvider = ({ children }: ShortenerProvider) => {
  const values = {};

  return (
    <ShortenerContext.Provider value={values}>
      {children}
    </ShortenerContext.Provider>
  );
};
