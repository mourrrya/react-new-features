import React from 'react';
import Layout from "../../../../Core/Layout"
import Example from "./Example"
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const View = () => {
  const content = `
  import React, { useState } from "react"; 

  const Example =  ({initialCount}) => { 
    const [count, setCount] = useState(initialCount)
    const [text, setText] = useState('')
  
    return (
    <div className="flex flex-col justify-between items-center">
        <div className="flex flex-col mb-4 items-center justify-center">
            <label htmlFor="name-count" className="text-gray-700 font-light text-xl"> Enter a name for the current count: </label>
            <input value={text} onChange={(ev) => setText(ev.target.value)} className="py-2 pr-10 pl-2 text-gray-700 rounded outline-none border border-red-400 mt-2" type="text" placeholder="Type the name, example: age"/>
        </div>
  
        <p className="text-xl text-gray-700 text-center font-light"> The current { text || 'count'} is <span className="italic text-red-400">{ count  } </span></p>
        <div className="self-center mt-5 flex flex-row justify-around items-center">
        <button className="bg-red-400 text-white py-1 px-2 rounded" onClick={() => setCount(count + 1)}> +1 </button>
        <button className="bg-red-400 text-white ml-2 py-1 px-2 rounded" onClick={() => setCount(count - 1)}> -1 </button>
        <button className="bg-red-400 text-white ml-2 py-1 rounded px-2" onClick={() => setCount(0)}> Reset </button>
        </div>
        
    </div>
  )
  }
  
  Example.defaultProps = {
    initialCount: 0,
  }
  
  export default Example;
  )
  `

  return (
  <Layout>
    <section className="flex flex-col justify-center items-center">
        <p className="text-2xl text-gray-700 mb-6"> Complex State with useState </p>
        <Example/>
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

export default View;