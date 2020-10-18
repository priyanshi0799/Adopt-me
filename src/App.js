import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";
//its just a stamp, it will be useful only if we'll be use it
//Everytime App is called it is going to stamp a div and inside it an h1
const App = () => {
  // return React.createElement(
  //   "div",
  //   {}, //any attribute will go here like class or id in key-value pair
  //   [
  //     React.createElement("h1", {}, "Adopt-Me"), //it can be multiple as well, as a div can have multiple children
  //     React.createElement(Pet, {
  //       name: "Joey",
  //       animal: "Dog",
  //       breed: "Havenese",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Chandler",
  //       animal: "Bird",
  //       breed: "Cockateail",
  //     }),
  //     React.createElement(Pet, { name: "Ross", animal: "Cat", breed: "Mixed" }),
  //   ]
  // );

  return (
    <div>
      <header>
        <Link to="/">Adopt-Me</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

//it'll overwrite anything inside "root" div
render(<App />, document.getElementById("root"));
