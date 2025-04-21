import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./Layout/Nav/Nav";
import WhyChooseUs from "./pages/Why-Choose-Us/WhyChooseUs";
import AboutUs from "./pages/About-Us/AboutUs";
import MoveToTop from "./shared-components/Move-To-Top/MoveToTop";
import OurClass from "./pages/Our-Class/OurClass";
import Testimonial from "./pages/Testimonial/Testimonial";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Footer from "./Layout/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-class" element={<OurClass />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <MoveToTop />
    </Router>
  );
};

export default App;
