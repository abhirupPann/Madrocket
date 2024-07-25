//Navigation Bar

import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { SquigglyUnderline } from "../components/ui/SquigglyUnderline"
function Navbar() {
  return (
    <div className=" flex items-center w-full font-Fjalla tracking-wider justify-center absolute py-[5vh] px-[5vw]  bg-transparent z-20">
       <div className=" flex flex-wrap gap-[1vw] sm:gap-[4vw] items-center w-full">
        <img src={logo} alt="Logo" width={150} className=" hidden sm:block"/>
        <SquigglyUnderline/>
        <Link to="/contactus" aria-label="Link To Contact Us" className="sm:text-sm text-[0.5rem] bg-white px-2 py-2  rounded-md cursor-pointer hover:bg-uniqueYellow hover:text-white transition-all ease-in-out duration-300">Contact Us</Link>
        </div>
    </div>
  )
}

export default Navbar
