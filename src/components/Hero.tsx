//Hero component used in HomePage

import { FlipWords } from "./ui/FlipWords"
import { IconQuote } from "@tabler/icons-react";
import { IconArrowDownBar } from "@tabler/icons-react";
import video1 from "../assets/vid1.mp4"
function Hero() {

//Flipword values
const words = ["learn", "grow", "study", "educate", "develop", "explore"];
  return (
    <div className=" font-Poiret" >
    <div className=" absolute top-[45%] left-[30%] hidden sm:block text-white text-5xl z-10">A School Is A Place To<FlipWords words={words} className=" text-5xl  font-Monarda text-uniqueYellow"/></div>
    <div className=' class w-[100%] absolute h-[50vh] sm:h-[114vh] bg-black/[.70]' ></div>
    <div className=" px-[10vw] py-[5vh] w-[90%] bg-uniqueYellow absolute h-[50vh] -bottom-[1vh] sm:-bottom-[14vh]  sm:flex  gap-[5vw]">
      <div className="absolute h-[70%] left-[5vw] border border-l border-uniqueBrown"></div>
      <div className="w-[90%]">  
        <p className="  tracking-widest text-uniqueBrown font-bold">Established in 1990</p>
        <p className=" mt-[2vh] text-2xl font-bold">Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
        </div>
      <div className="absolute h-[70%]  left-[45vw] border border-l border-uniqueBrown hidden sm:block"></div>
      <div className="ml-[15vw] hidden sm:block">
        <div className=" flex gap-[1vw] ">
          <div className=""><IconQuote stroke={2}/></div>
          <p className=" text-4xl ">Empowering Minds, Shaping Futures.</p>
          
        </div>
        <p className="mt-[2vh] ml-[3vw] font-semibold tracking-wider">“The function of education is to teach one to think intensively and to think critically. Intelligence plus character—that is the goal of true education.” <span className=" leading-loose tracking-wider px-2 py-1 rounded-md bg-uniqueBrown text-white ml-[10vw] mt-[2vh]">– Martin Luther King Jr.</span> </p>
      </div>
      
    </div>
    <div className="absolute h-[94%]  left-[94%] top-[20%] border border-l border-uniqueBrown hidden sm:block"></div>
    <div className="absolute text-white -right-[7vw] sm:right-0 bottom-[19.5vh]"><p className=" -rotate-90 flex items-center gap-[1vw] "> <IconArrowDownBar className=" rotate-90 text-uniqueYellow"/>Scroll Down To Explore</p></div>

    <video src={video1} autoPlay loop muted ></video>
  </div>
  )
}

export default Hero
