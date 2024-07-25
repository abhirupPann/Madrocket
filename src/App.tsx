import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import AboutUs from "./Pages/AboutUs"
import Academics from "./Pages/Academics"
import Admissions from "./Pages/Admissions"
import ContactUs from "./Pages/ContactUs"
import Faculty from "./Pages/Faculty"
import Gallery from "./Pages/Gallery"
import Students from "./Pages/Students"
import Navbar from "./components/Navbar"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <div>
      <Toaster/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/academics" element={<Academics/>}/>
        <Route path="/admission" element={<Admissions/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/faculty" element={<Faculty/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/students" element={<Students/>}/>
      </Routes>
    </div>
  )
}

export default App
