import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Counter from "../components/Counter/Counter";
import AboutHome from "../components/About/AboutHome";
import Programs from "../components/Programs/Programs";
import Events from "../components/EventCard/EventCard";
import Testimonials from "../components/Testimonial/Testimonial";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      
      <Hero />
      <Counter />
      <AboutHome />
      <Programs />
      <Events />
      <Testimonials />
      <CTA />
     
    </>
  );
};

export default Home;