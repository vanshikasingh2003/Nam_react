
const heading=React.createElement("h1",{id:"headsup"},"Hello from React");
     const root=ReactDOM.createRoot(document.getElementById("root"));
     root.render(heading);

// say you want to created nested elements like
// <div id="parent">
//   <div id="child">
//     <h1>Hello</h1>
// </div>
// </div>

const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},React.createElement("h1",{},"Hello part2")));
console.log(parent);
root.render(parent);

