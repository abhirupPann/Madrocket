// Faculty Page Logic

import DivCard from "../components/ui/DivCard"
function Faculty() {

  // all the contents stored in an array of objects
  const data = [{"title":"John Doe", "content":  "Principal, M.Ed, 20 years of experience in educational administration"
  }, {"title":"Jane Smith", "content": "Vice Principal, M.Sc. in Physics, 15 years of teaching experience."},
  {"title":"Emily Johnson", "content": " English Teacher, M.A. in English, 10 years of teaching experience."},
  {"title":"Michael Brown", "content": "Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience."},
  {"title":"Sophia Davis", "content": "Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience."},
  {"title":"David Wilson", "content": "Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience"}]
  
  
  return (

    <div className="pt-[30vh] h-full bg-gray-500 font-Poiret text-2xl">
      <h1 className=" bg-white text-black text-2xl my-[2vh] mx-[5vw] px-[2vw] py-[2vh] font-bold rounded-md">Profiles</h1>
    {data.map((d, i)=>(
      <DivCard title={d.title} content={d.content} key={i}/>
    ))}
        <div className="Div Card mx-[5vw] mt-[2vh] cursor-default">
    <div className=" bg-uniqueYellow px-[2vw] w-full rounded-md font-bold">Important Dates:</div>
    <ul className=" w-full bg-gray-400 border border-black rounded-sm h-full px-[2vw] py-[2vh]">
      <li>"Admission Form Availability: March 1st"</li>
      <li>"Last Date for Submission: March 31st"</li>
      <li>"Entrance Test: April 15th"</li>
      <li>"Announcement of Results: April 30th"</li>
    </ul>
  </div>
  </div>
  )
}

export default Faculty
