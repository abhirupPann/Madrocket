//Home Page Logic

import Hero from "../components/Hero"
import DivCard from "../components/ui/DivCard"
function Home() {

  //Contents
  const data = [{"title": "Annual Sports Day", "content": "Celebrating Excellence in Sports"},{"title": "Science Exhibition", "content": "Showcasing Student Innovations"},{"title": "Cultural Fest", "content": "Embracing Diversity and Creativity"}]
  return (
    <div className=" font-Poiret ">

      <Hero/>
      <h1 className=" bg-black text-white text-2xl sm:mt-[2vh] mt-[100vh] mb-[2vh] my-[2vh] mx-[5vw] px-[2vw] py-[2vh] font-bold rounded-md">Banner Highlights</h1>
      {data.map((d, i)=>(
        <div className="text-2xl " key={i}>
                  <DivCard title={d.title} content={d.content} key={i} />
        </div>

      ))}
    </div>
  )
}

export default Home
