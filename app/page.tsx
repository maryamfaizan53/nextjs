import React from 'react'
import About from './components/about'
import Head from './components/head'
import Contact from './components/contact'
import Project from './components/projects'

const Page = () => {
  return (
    <div>
        <Head/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Page