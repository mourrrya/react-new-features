import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({name, description}) => (
  <NavLink to="/new-features" className="rounded border mb-4 cursor-pointer p-2 border-red-200 bg-white flex flex-row w-full justify-around">
    <p className="font-bold text-gray-700 w-2/5">{name}</p>
    <p className="font-light text-gray-700 w-1/5">{description}</p>
  </NavLink>
)

export const topics = [{
  name: "useState Hook",
  description: "I don't know yet"
},
{
  name: "useState vs. setState",
  description: "I don't know yet"
},
{
  name: "Complex State with useState",
  description: "I don't know yet"
},{
  name: "The useEffect Hook",
  description: "I don't know yet"
},
{
  name: "useEffect Dependencies",
  description: "I don't know yet"
}]