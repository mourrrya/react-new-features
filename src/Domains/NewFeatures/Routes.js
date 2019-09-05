import React from 'react'
import { Route } from 'react-router-dom'

import NewFeaturesHome from "./Views"
import UseStateHook from "./Views/useStateHook"

const Routes = [<Route exact path="/" component={NewFeaturesHome} key={NewFeaturesHome}/>, 
<Route path="/new-features" component={UseStateHook} key={UseStateHook}/>]

export default Routes;