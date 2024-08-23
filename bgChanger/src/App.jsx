import { useState } from "react";
import "./index.css";

function App() {
  const [color, Setcolor] = useState("white");

  function changeColor(newColor) {
    if (newColor != null) {
      Setcolor(newColor);
    }
    else {
      Setcolor("white")
    }
  }

  return (
    <div className='w-full h-screen m-0 p-0' style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2 rounded-3xl">
        <div className="flex flex-wrap justify-center gap-3 rounded-3xl bg-white px-5 py-2 text-lg border-2 border-solid border-black ">
          <button className="text-white bg-red-600 px-5 py-2 rounded-3xl" onClick={() => { changeColor("#dc2626") }}>Red</button>
          <button className="text-white bg-blue-700 px-5 py-2 rounded-3xl" onClick={() => { changeColor("#1d4ed8") }}>Blue</button>
          <button className="text-white bg-pink-400 px-5 py-2 rounded-3xl" onClick={() => { changeColor("#f472b6") }}>Pink</button>
          <button className="text-white bg-black px-5 py-2 rounded-3xl" onClick={() => { changeColor("#000000") }}>Black</button>
          <button className="text-white bg-purple-300 px-5 py-2 rounded-3xl" onClick={() => { changeColor("#d8b4fe") }}>lavender</button>
          <button className="text-white bg-yellow-300 px-5 py-2 rounded-3xl" onClick={() => { changeColor("#fde047") }}>Yellow</button>
          <button className="text-white bg-purple-800 px-5 py-2 rounded-3xl" onClick={() => { changeColor("#6b21a8") }}>purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
