import React from "react";
import * as UserInfo from "../data/user"


function Home() {
  return (
    <div id="home">
      <h1>
        {UserInfo.username} is a Web Developer from {UserInfo.city}
      </h1>
    </div>
  );
}

export default Home;

