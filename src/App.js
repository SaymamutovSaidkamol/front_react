import "./App.css";
import Card1 from "./card1/Card1";
import Card2 from "./card2/Card2";
import Card3 from "./card3/Card3";
import Card4 from "./card4/card4";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Footer />
      </div>
    </>
  );
}

export default App;
