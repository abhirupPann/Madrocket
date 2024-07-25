//A reusable div component
interface Props {
    title : string;
    content: string
}

function DivCard({title, content} : Props) {
  return (
    <div className="Div Card mx-[5vw] mt-[2vh] cursor-default">
      <div className=" bg-uniqueYellow px-[2vw] w-full rounded-md font-bold">{title}</div>
      <div className=" w-full bg-gray-400 border border-black rounded-sm h-full px-[2vw] py-[2vh]">{content}</div>
    </div>
  )
}

export default DivCard
