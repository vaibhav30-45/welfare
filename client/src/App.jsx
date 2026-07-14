import { Routes, Route } from "react-router-dom";

import Layout from "./Layouts/MainLayout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Programs from "./Pages/Programs";
import Contact from "./Pages/Contact";
import Events from "./Pages/Events"
import Blogs from "./Pages/Blogs";
import Gallery from "./Pages/Gallery";
import Donate from "./Pages/Donate";
import BlogDetails from "./Pages/BlogDetails";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/donate" element={<Donate />} />
        
      </Route>
    </Routes>
  );
}

export default App;