//Admission Page Logic

import DivCard from "../components/ui/DivCard"
function Admissions() {

  // all the contents stored in an array of objects
  const data = [{"title":"Process", "content":  "Admission forms are available for download. Submit the completed form along with required documents at the school office."
  }, {"title":"Criteria", "content": "Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades"}]
  
  
  return (
    <div className="pt-[30vh] h-screen bg-gray-500 font-Poiret text-2xl">
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

export default Admissions
