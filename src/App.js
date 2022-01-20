import GlobalStyle from "./Globalstyle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Landingpage from "./components/landingpage/Landingpage";
import About from "./pages/aboutpage/About";
// import Footer from "./components/footer/Footer";
import { Services, Footer } from "./components";
import Games from "./components/games/Games";
import Contact from "./components/contact/Contact";
import ScrollUp from "./components/ScrollUp";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollUp />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landingpage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/ourgames" element={<Games />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
