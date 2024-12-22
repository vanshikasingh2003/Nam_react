import React from 'react'
import User from './User';
import Userclass from './Userclass'

const About = () => {
  return (
    <div>
      <h1>This is the about page...</h1>
      <h2>welcome</h2>
      {/* <User name={"Vanshika Singh"} city={"Noida"}/> */}
      <Userclass name={"Parul Singh"} city={"Noida"}/>
    </div>
  )
}

export default About;
