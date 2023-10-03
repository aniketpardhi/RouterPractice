import React from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

const About = () => {
  const NavigateTohome=useNavigate();
   const GotoHome=()=>{
  NavigateTohome("/")
  }
  return (
    <>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        voluptatum quaerat ut ratione reiciendis libero facilis dolore ipsa
        necessitatibus aut aliquam magni voluptate commodi minima recusandae
        provident, labore, sed tempora.loer
      </p>
      <button onClick={GotoHome}>Click</button>
    </>
  );
};

export default About;
