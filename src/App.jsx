import Nav from "./Layout/Nav/Nav";
import Home from "./pages/Home/Home";
import WhyChooseUs from "./pages/Why-Choose-Us/WhyChooseUs";
import AboutUs from "./pages/About-Us/AboutUs";
import OurClass from "./pages/Our-Class/OurClass";
import Testimonial from "./pages/Testimonial/Testimonial";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Footer from "./Layout/Footer/Footer";
import MoveToTop from "./shared-components/Move-To-Top/MoveToTop";

const App = () => {
  return (
    <>
      {/* Navigation */}
      <Nav />

      {/* Main Content Section */}
      <Home />
      <WhyChooseUs />
      <AboutUs />
      <OurClass />
      <Testimonial />
      <Blog />
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Move to Top Button */}
      <MoveToTop />
    </>
  );
};

export default App;
