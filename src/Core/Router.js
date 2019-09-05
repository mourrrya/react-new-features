import React from 'react';
import { BrowserRouter } from "react-router-dom"

import NewFeatureRoutes from "../Domains/NewFeatures/Routes"

const Routes = [].concat(NewFeatureRoutes)
const AppRouter = () => (
 <BrowserRouter>
    { Routes }
 </BrowserRouter>
)

export default AppRouter;