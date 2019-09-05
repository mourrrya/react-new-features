import React, { Fragment, Component } from "react";

import Layout from "../../../Core/Layout"
import TopicComponent, { topics } from "../Inc/Topics"


const Home = () => (
  <Layout>
   <section className="flex flex-col justify-center items-center">
   <p className="lg:px-20 font-light text-2xl text-gray-800 mb-10 border-b border-gray-200"> Here's the menu with the new features of React that you can learn </p>
    <div className=" flex w-1/2 flex-col justify-center items-start">
      {
      topics.map((topic) => (
        <TopicComponent route={topic.route} key={topic} name={topic.name} description={topic.description} />
      ))
    }
    </div>
   </section>

  </Layout>
)

export default Home;