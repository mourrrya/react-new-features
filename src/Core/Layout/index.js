import React, { Fragment } from 'react';
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children}) => (
  <Fragment>
    <main className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 mx-auto p-4 md:px-8 md:py-16 w-full bg-gray-100">
       {children}   
      </main>
      <Footer />
      </main>
    
  </Fragment> 
)

export default Layout;