// Repeat 2 times: first iteration creates a <ul>, second creates an <ol>
for (let i = 0; i < 2; i++) {
  // Create a <div> to hold the list
  let div = document.createElement("div");
  document.body.appendChild(div); // Add the div to the <body>

  // Decide whether to create a <ul> (first iteration) or <ol> (second iteration)
  const listType = i == 1 ? "ol" : "ul";
  let list = document.createElement(listType);

  // Place the list inside the div
  div.appendChild(list);

  // Create 3 list items inside the current list
  for (let j = 0; j < 3; j++) {
    let li = document.createElement("li"); // Make a new <li>
    list.appendChild(li); // Add it to the list
    li.textContent = `Item ${j + 1}`; // Give li some text
  }
}
