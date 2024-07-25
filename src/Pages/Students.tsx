// Students Page Logic

import DivCard from "../components/ui/DivCard"

//Contents
const data = [{"title": "Extracurricular Activities", "content": "Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club"},{"title": "Clubs and Societies", "content": "Literary Society, Environmental Club, Astronomy Club, Coding Club"},{"title": "Achievements", "content": 
  "John Smith - National Level Math Olympiad Winner ,Sarah Lee - Gold Medalist in State Swimming Championship, Tech Innovators Club - Winners of Inter-School Robotics Competition"}]


function Students() {
  return (
    <div className="pt-[30vh] h-screen bg-gray-500 font-Poiret text-2xl">
    {data.map((d, i)=>(
      <DivCard title={d.title} content={d.content} key={i}/>
    ))}
     </div>
  )
}

export default Students
