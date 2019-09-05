import React, { useState } from "react"; 

const Example =  ({initialCount}) => { 
  const [count, setCount] = useState(initialCount)

  return (
  <div className="flex flex-col justify-between items-start">
      <p className="text-xl text-gray-700 font-light"> The current count is <span className="italic text-red-400">{ count  } </span></p>
      <div className="self-center mt-5 flex flex-row justify-around items-center">
      <button className="bg-red-400 text-white p-1" onClick={() => setCount(count + 1)}> +1 </button>
      <button className="bg-red-400 text-white ml-2 p-1" onClick={() => setCount(count - 1)}> -1 </button>
      <button className="bg-red-400 text-white ml-2 p-1" onClick={() => setCount(0)}> Reset </button>
      </div>
      
  </div>
)
}

Example.defaultProps = {
  initialCount: 0,
}

export default Example;