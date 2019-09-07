import React from 'react'
import { Route } from 'react-router-dom'

import NewFeaturesHome from "./Views"
import UseStateHook from "./Views/useStateHook"
import UseStateVsSetState from "./Views/useState-vs-setState"
import ComplexState from "./Views/complexState"


const Routes = [<Route exact path="/" component={NewFeaturesHome} key={NewFeaturesHome}/>, 
<Route exact path="/new-features" component={NewFeaturesHome} key={NewFeaturesHome}/>,
<Route path="/new-features/usestate" component={UseStateHook} key={UseStateHook}/>,
<Route path="/new-features/usestate-vs-setstate" component={UseStateVsSetState} key={UseStateVsSetState}/>,
<Route path="/new-features/complex-state" component={ComplexState} key={ComplexState}/>,
]


export default Routes;