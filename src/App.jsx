import HealtyHabits from "./Components/HealtyHabits";
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import Limitations from "./Components/Limitations";

function App() {
  return (
    <main className="font-sans">
        <Hero />
        <Info />
        <HealtyHabits />
        <Limitations />
    </main>
  );
}

export default App;
