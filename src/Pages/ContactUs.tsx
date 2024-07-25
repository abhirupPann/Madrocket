//Contact Us Page Logic

import { useRecoilState } from "recoil"
import DivCard from "../components/ui/DivCard"
import { contactInfoState } from "../Recoil/ContactinfoState"
import { useState } from "react"
import toast from "react-hot-toast"

//Contents 
const data = [{"title": "Address", "content": "Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code"},{"title": "Phone", "content": "1 (123) 456-7890"},{"title": "Email", "content": "info@springdale.edu"}]
function ContactUs() {
  
  //State Management Library(Recoil) is used to store the Contact Informations
  const [contactInfo, setContactInfo] = useRecoilState(contactInfoState)
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //Form Validation functionality
  const handleOnSubmit = (e:any)=>{
       e.preventDefault();
       if(!name || !email || !msg){
         toast.error("Please Fill All The Required Fields!")
       }
       else{
        setContactInfo({
          name: name,
          email: email,
          msg: msg
         })
         toast.success("Form Submitted Successfully!")
         setTimeout(() => {
          toast.success("Printed the form value on the console!")
         }, 1000);
         
         console.log(contactInfo)
       }

  }
  return (
    <div className="flex flex-col items-center pt-[30vh] h-full bg-gray-500 font-Poiret text-2xl ">
    {data.map((d, i)=>(
      <DivCard title={d.title} content={d.content} key={i}/>
    ))}
      <div className="my-[2vh] py-[2vh] px-[2vw] h-full w-[50vw] border border-black rounded-sm shadow-xl">
        <h1 className=" my-[2vh] font-bold bg-uniqueYellow rounded-md px-[2vw] py-[2vh]">Contact Us</h1>
        <p className=" mb-[2vh] text-gray-300">Please fill the form in a decent manner</p>
        <form action="" className="flex-col gap-5 px-[5vw]" onSubmit={(e)=>{handleOnSubmit(e)}}>
          <div className="flex-col sm:flex items-center gap-4">
          <label>Name:</label>
          <input type="text" className="bg-gray-200 py-[2vh] px-[1vw] text-sm" placeholder="Abhirup Pan" onChange={(e)=>{setName(e.target.value)}}/>
          </div>
          <div className="flex-col sm:flex items-center gap-4">
            
          <label>Email:</label>
          <input type="email" className="bg-gray-200 py-[2vh] px-[1vw] text-sm" placeholder="abhhh45@gmail.com"onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div className="flex-col sm:flex items-center gap-4">
          <label>Message:</label>
          <input type="text" className="bg-gray-200 py-[2vh] px-[1vw] text-sm" placeholder="What is the admission process ?
          " onChange={(e)=>{setMsg(e.target.value)}}/>
          <button type="submit" className=" bg-white rounded-md px-[2vw] py-[2vh]">Submit</button>
          </div>

        </form>
      </div>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.258746080677!2d88.44890167519854!3d22.977510879205347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8953b6a7054f3%3A0x957a6cf7d953be2d!2sSpringdale%20High%20School%20(HS)!5e0!3m2!1sen!2sin!4v1721901425265!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}}  loading="lazy" ></iframe>
      </div>
    </div>
  )
}

export default ContactUs
