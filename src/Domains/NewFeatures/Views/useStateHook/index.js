import React from 'react';
import Layout from "../../../../Core/Layout"
import Example from "./Example"
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const UseStateView = () => {
  const content = `
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
  `

  return (
  <Layout>
    <section className="flex flex-col justify-center items-center">
        <p className="text-2xl text-gray-700 mb-6"> useState Hook - Example </p>
        <Example initialCount={2}/>
        <div className="p-2 flex flex-col mt-6 items-center">    
            <p className="font-light text-xl text-gray-700"> See the code: </p>
        </div>
        <textarea
                className="w-1/2 h-full text-gray-800" 
                  disabled
                  rows="10"
                  value={content}
                />
    </section>
  </Layout>
)}

export default UseStateView;