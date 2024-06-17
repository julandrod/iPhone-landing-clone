import {
  Features,
  Footer,
  Hero,
  Highlights,
  HowItworks,
  Model,
  Navbar,
} from "./components";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItworks />
      <Footer />
    </main>
  );
};

export default App;
