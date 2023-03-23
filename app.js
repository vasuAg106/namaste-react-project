import React from "react";
import  ReactDOM  from "react-dom/client";

const parent = React.createElement("div", {id:"parent"}, 
    React.createElement("div" , {id:"child"}, 
        [ React.createElement("h1", {}, "Nested loop"), React.createElement("h2", {}, "Sibling")]
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);