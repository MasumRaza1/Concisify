import "./App.css";

import { Hero, Demo, Footer } from "./components";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Demo />
        <Footer />
      </div>
    </main>
  );
};

export default App;
