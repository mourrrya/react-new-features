import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({name, description, route}) => (
  <NavLink to={`/new-features/${route}`} className="rounded border mb-4 cursor-pointer p-2 border-red-200 bg-white flex flex-row w-full justify-around">
    <p className="font-bold text-gray-700 w-2/5">{name}</p>
    <p className="font-light text-gray-700 w-1/5">{description}</p>
  </NavLink>
)

export const topics = [{
  name: "useState Hook",
  description: "I don't know yet",
  route: "usestate"
},
{
  name: "useState vs. setState",
  description: "I don't know yet",
  route: "usestate-vs-setstate"
},
{
  name: "Complex State with useState",
  description: "I don't know yet",
  route: "complex-state"
},{
  name: "The useEffect Hook",
  description: "I don't know yet",
  route: "use-effect-hook"
},
{
  name: "useEffect Dependencies",
  description: "I don't know yet",
  route: "use-effect-dependendy"
}]


export let topics_routes = []; 


