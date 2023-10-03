import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Homepage</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        suscipit ducimus itaque autem architecto aliquid molestias
        exercitationem, illo sint. Unde sed accusantium optio iste blanditiis
        facere est quasi maxime. Inventore!
      </p>
      <h3>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
        tenetur porro assumenda. Cum suscipit distinctio explicabo fugiat
        inventore esse, similique labore ex ad voluptatem et obcaecati magnam
        voluptate ea nulla!
      </h3>
    </>
  );
};

export default Home;
