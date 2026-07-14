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
import AdminLayout from "./Admin/Layout/AdminLayout";
import Dashboard from "./Admin/Dashbaord/Dashbaord";
import ProgramList from "./Admin/ProgramsAdmin/ProgramList";
import AddProgram from "./Admin/ProgramsAdmin/AddProgram";
import ProgramEdit from "./Admin/ProgramsAdmin/ProgramEdit";
import EventList from "./Admin/AdminEvents/EventList";
import AddEvent from "./Admin/AdminEvents/AddEvent";
import EventEdit from "./Admin/AdminEvents/EventEdit";
import GalleryList from "./Admin/GalleryAdmin/GalleryList";
import AddGallery from "./Admin/GalleryAdmin/AddGallery";
import EditGallery from "./Admin/GalleryAdmin/EditGallery";


function App() {
  return (
    <Routes>
       
       <Route path="/admin" element={<AdminLayout />}>

    <Route index element={<Dashboard />} />
    <Route path="programs" element={<ProgramList />} />
    <Route
  path="programs/add"
  element={<AddProgram />}
/>
<Route
  path="programs/edit/:id"
  element={<ProgramEdit />}
/>
<Route
path="events"
element={<EventList />}
/>

<Route
path="events/add"
element={<AddEvent />}
/>

<Route
path="events/edit/:id"
element={<EventEdit />}
/>
<Route
path="gallery"
element={<GalleryList />}
/>

<Route
path="gallery/add"
element={<AddGallery />}
/>

<Route
path="gallery/edit/:id"
element={<EditGallery />}
/>
</Route>

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