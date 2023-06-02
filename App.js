import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1", {
//     id: "heading"
// }, "Hello from React");


/**
 * 
 * 
 * <div class = "parent">
 *  <div class ="child1">
 *      <h1> Hello I am h1 tag </h1>
 *      </h2> Hello I am h2 tag </h2>
 *  </div>
 * <div class ="child2">
 *      <h1> Hello I am h1 tag </h1>
 *      </h2> Hello I am h2 tag </h2>
 *  </div>
 * </div>
 * 
 * 
 * 
 */


// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "Hello I am h1 tag"),
//     React.createElement("h2", {}, "Hello I am h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Hello I am h1 tag"),
//     React.createElement("h2", {}, "Hello I am h2 tag"),
//   ]),
// ]);

// React Element
const jsxHeading = <h1 className="head">Hello from React app Element</h1>;

//React Functional Component
const HeadingComponent = () => {
  return <h1 className="head">Hello from React app</h1>;
};

const HeadingComponentWithoutReturn = () => (
    <div className="container">
      {jsxHeading}
   <h1 className="header">Hello from React app headingComponentWithoutReturn</h1>
   </div>
); 

console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<><HeadingComponent /><HeadingComponentWithoutReturn /></>
);
