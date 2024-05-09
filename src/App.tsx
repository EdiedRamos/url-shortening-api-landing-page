import {
  BoostLink,
  Footer,
  Header,
  Hero,
  ShortedLinks,
  Shortener,
  Statistics,
} from "@/Components";

import { ShortenerProvider } from "./Providers";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ShortenerProvider>
        <Shortener />
        <ShortedLinks />
      </ShortenerProvider>
      <Statistics />
      <BoostLink />
      <Footer />
    </div>
  );
}

export default App;
