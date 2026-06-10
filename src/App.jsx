import "./App.css";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Manifest from "./components/Manifest.jsx";
import Suites from "./components/Suites.jsx";
import Table from "./components/Table.jsx";
import HeureBleue from "./components/HeureBleue.jsx";
import Lieu from "./components/Lieu.jsx";
import CinematicFooter from "./components/CinematicFooter.jsx";

export default function App() {
  return (
    <div className="canvas-sheen min-h-screen bg-canvas text-cream overflow-x-hidden">
      <Nav />

      <main
        className="relative z-10 bg-canvas rounded-b-[24px] md:rounded-b-[48px]
                   border-b border-cream/10
                   shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]"
      >
        <Hero />
        <Manifest />
        <Suites />
        <Table />
        <HeureBleue />
        <Lieu />
      </main>

      <CinematicFooter />
    </div>
  );
}
