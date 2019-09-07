import React, { useState } from "react";

const Example = () => {
  // To set the notes
  const [notes, setNotes] = useState([{
    title: 'I wanna drink coffee',
    body: "Please"
  }])
  // To set the title, controlled input
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNote = (ev) => {
    ev.preventDefault()
    setNotes([...notes, {
      title,
      body
    }])
    // Setting the title back to a empty string
    setTitle('')
  }

  const handleNoteRemove = (title) => {
    setNotes(notes.filter((note) => note.title !== title))
  }

  // Important -> First Index -> Value at the moment
  // Second Index -> The function that set a new value
  return (
    <div className="flex w-full flex-col justify-center items-center">
      <h1 className="text-2xl font-light text-gray-700 text-center w-1/3 "> Notes &#8630; </h1>

      <div className="flex flex-col w-1/3 justify-center items-center border-b border-t border-gray-400 mb-2 py-2 mt-2 ">
        {notes.map(note =>
        <div className="flex flex-row text-xl mb-1  justify-between items-center">
            <p key={note.title} className="font-light mr-2 text-gray-700"> {note.title} </p>
            <span className="mr-2 text-gray-700"> - </span>
            <p key={note.body} className="font-light mr-2 text-gray-700"> {note.body} </p>
            <button
            className=" flex justify-center items-center text-white bg-red-400 rounded-full w-6 ml-2"
            onClick={() => handleNoteRemove(note.title)}
            >
               <span className="  text-base self-center">&#10799;</span>
            </button>
        </div>

        )}
      </div>

      <form onSubmit={ev => addNote(ev)} className="flex flex-col   py-2 w-full mt-2 justify-center items-start">
        <div className="flex flex-col md:flex-row  py-2 w-full mt-2 justify-center items-start">
        <div className="flex  flex-col h-30 justify-around items-center w-1/5">
          <label htmlFor="note" className="text-xl mb-1 font-light text-gray-700"> Write a title: </label>
          <input type="text" className="border font-light  h-1/2 text-gray-700 border-gray-700 pl-2  pr-8 py-2 rounded" placeholder="Example: I wanna drink a coffee"
            value={title} onChange={(ev) => setTitle(ev.target.value)}
          />
        </div>

        <div className="flex flex-col h-30 justify-around items-center w-1/5">
         <label htmlFor="body" className="text-xl mb-1 font-light text-gray-700"> Write a body : </label>
          <textarea value={body} id="body" onChange={(ev) => setBody(ev.target.value)} className="rounded text-gray-700 font-light border  border-gray-800 p-1" placeholder="Write the body of your note:"/>
        </div>
        </div>
        <button type="submit" className="bg-red-400 mt-5 w-1/6 self-center hover:bg-red-500 text-white font-light p-2 rounded"> Add note </button>

      </form>

    </div>
  )
}



export default Example;
