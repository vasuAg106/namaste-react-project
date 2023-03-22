/**
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 * </div>
 */


const parent = React.createElement("div", {id:"parent"}, 
    React.createElement("div" , {id:"child"}, 
        [ React.createElement("h1", {}, "Nested loop"), React.createElement("h2", {}, "Sibling")]
    )
)
const heading = React.createElement("h1", {id: "heading"}, "Hello World from react");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);