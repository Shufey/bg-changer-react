import { useState } from "react"


function App() {
  const [color, setColor] = useState("Olive")

  return (
    <div className="w-full h-screen duration-200 " style={{backgroundColor : color}}>
      <div className="flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 rounded-3xl p-2">
          <button onClick={() => {setColor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>

          <button onClick={() => {setColor("green")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>

          <button onClick={() => {setColor("blue")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>

          <button onClick={() => {setColor("olive")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "olive"}}>Olive</button>

          <button onClick={() => {setColor("white")}} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "white"}}>White</button>

          <button onClick={() => {setColor("black")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>

          <button onClick={() => {setColor("purple")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}}>Purple</button>

          <button onClick={() => {setColor("skyblue")}} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "skyblue"}}>sky Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
