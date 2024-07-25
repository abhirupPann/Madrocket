//Academics Page Logic

import DivCard from "../components/ui/DivCard"
function Academics() {

  //Contents
  const data = [{"title": "Teaching Methodologies", "content":"We use a blend of traditional and modern teaching techniques to cater to different learning styles."},{"title": "Educational Resources", "content":"Digital classrooms, interactive learning modules, and access to online educational platforms."}]
  
  return (
    <div className="pt-[30vh] h-screen bg-gray-500 font-Poiret text-2xl">
       <div className="Div Card mx-[5vw] mt-[2vh] cursor-default">
      <div className=" bg-uniqueYellow px-[2vw] w-full rounded-md font-bold">Curriculum</div>
      <ul className=" w-full bg-gray-400 border border-black rounded-sm h-full px-[2vw] py-[2vh]">
        <li><span className=" font-bold">Primary (Grades 1-5):</span> English, Mathematics, Science, Social Studies, Art, Physical Education</li>
        <li><span className=" font-bold">Secondary (Grades 6-10):</span> English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</li>
      
        <li><span className=" font-bold">Senior Secondary (Grades 11-12):</span>
        <li><span className=" font-bold">Science Stream:</span> Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
        <li><span className=" font-bold">Commerce Stream:</span> Accountancy, Business Studies, Economics, Mathematics, English
        </li></li>
      </ul>
    </div>
    {data.map((d, i)=>(
      <DivCard title={d.title} content={d.content} key={i}/>
    ))}
      
    </div>
  )
}

export default Academics
