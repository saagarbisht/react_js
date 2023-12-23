import { useState } from 'react'
function App() {
  const [color, setColor] = useState("Alabaster");

  function Btn({color}){
    return(
        <>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : color}} onClick={() => setColor(color)}>{color}</button>
        </>
    )
  }

  return (
    <>
    <div className='w-full h-screen' style={{backgroundColor : color}}></div>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-3xl bg-white px-3 py-2 rounded-3xl'>
        <Btn color={"Maroon"}/>
        <Btn color={"Purple"}/>
        <Btn color={"Black"}/>
        <Btn color={"Olive"}/>
        <Btn color={"Teal"}/>
        <Btn color={"Fuchsia"}/>
        <Btn color={"Lime"}/>
      </div>
    </div> 
    </>
  )
}

export default App
