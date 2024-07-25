//About Us Page Logic

import DivCard from "../components/ui/DivCard"


function AboutUs() {

  // all the contents stored in an array of objects
  const data = [{"title":"History", "content": "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students."}, {"title":"Vision", "content": "To create a learning environment that fosters academic excellence, critical thinking, and ethical values"}, {"title":"Mission", "content": "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world"}, {"title":"Principal's Message", "content": "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future"}]
  
  
  return (
    <div className="pt-[30vh] h-full bg-gray-500 font-Poiret text-2xl">
      {data.map((d, i)=>(
        <DivCard title={d.title} content={d.content} key={i}/>
      ))}
          <div className="Div Card mx-[5vw] mt-[2vh] cursor-default">
      <div className=" bg-uniqueYellow px-[2vw] w-full rounded-md font-bold">Infrastructure And Facilities</div>
      <ul className=" w-full bg-gray-400 border border-black rounded-sm h-full px-[2vw] py-[2vh]">
        <li>"State-of-the-art science and computer labs"</li>
        <li>"Spacious and well-equipped classrooms"</li>
        <li>"Library with a vast collection of books and digital resources"</li>
        <li>"Sports facilities including a playground, gymnasium, and swimming pool"</li>
      </ul>
    </div>
    </div>
  )
}

export default AboutUs
