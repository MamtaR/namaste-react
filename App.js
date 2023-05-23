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


const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello I am h1 tag"),
    React.createElement("h2", {}, "Hello I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello I am h1 tag"),
    React.createElement("h2", {}, "Hello I am h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
