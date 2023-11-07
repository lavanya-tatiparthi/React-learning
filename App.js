import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", {id: "heading"}, "hello");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);




// const parent = React.createElement("div", {}, [
//     React.createElement("div", { id: "child" }, [
//       React.createElement("h1", {}, "this is h1 tag"),
//       React.createElement("h2", {}, "this is h2 tag"),
//     ]),
//     React.createElement("div", { id: "child2" }, [
//       React.createElement("h1", {}, "this is h1 tag"),
//       React.createElement("h2", {}, "this is h2 tag"),
//     ]),
//   ]);


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);


// const parent = React.createElement('div',{},[
//   React.createElement('div',{id:'child'},[
// React.createElement('div',{className:'header'},'This is Main Heading'),
// React.createElement('h1',{},'This is first element'),
// React.createElement('h2',{},'This issecond element'),
// React.createElement('h3',{},'This is third element'),
//   ]),
//   React.createElement('div',{id:'child2'},[
//     React.createElement('h1',{},'This is first element'),
// React.createElement('h2',{},'This is second element'),

//   ])
// ]);

// const root1 = ReactDOM.createRoot(document.getElementById("root1"));
// root1.render(parent);



