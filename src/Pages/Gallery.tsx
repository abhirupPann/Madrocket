//Gallery Page Logic

import img1 from "../assets/images/sportsimg.jpg";
import img2 from "../assets/images/scienceimg.jpg"
import img3 from "../assets/images/culturalfestimg.jpg"
import img4 from "../assets/images/classroomimg.jpg"
import img5 from "../assets/images/libraryimg.jpg"

//Contents
const data = [{"title": "Students participating in various sports events", "content": img1 },{"title": "Students presenting their science projects.", "content": img2},{"title": "Students performing in the cultural fest.", "content":img3 },{"title": "A glimpse of our interactive classrooms.", "content":img4 },{"title": "Students reading and studying in the school library.", "content": img5 }]

function Gallery() {
  return (
    <div className="pt-[30vh] h-full bg-gray-500 font-Poiret text-2xl">
      {data.map((d, i)=>(
       <div key={i} className="Div Card mx-[5vw] mt-[2vh] cursor-default">
         <div className=" bg-uniqueYellow px-[2vw] w-full rounded-md font-bold">{d.title}</div>
         <img loading="lazy" className=" w-full bg-gray-400 border border-black rounded-sm h-full px-[2vw] py-[2vh]" src={d.content}></img>
       </div>
      ))}
    </div>
  )
}

export default Gallery
