// ----------------Part 1: Getting Started--------------------

// 1. Select <main> and store in mainEl
const mainEl = document.querySelector("main");

// 2. Set background color to CSS variable --main-bg
mainEl.style.backgroundColor = "var(--main-bg)";
// 3. Set innerHTML to <h1>DOM Manipulation</h1>
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// 4. Add class flex-ctr
mainEl.classList.add("flex-ctr");

// ----------------Part 2: Creating a Menu Bar--------------------

// 1. Select <nav id="top-menu"> and store in topMenuEl
const topMenuEl = document.getElementById("top-menu");

// 2. Set height to 100%
topMenuEl.style.height = "100%";
// 3. Set background color to CSS variable --top-menu-bg
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// 4. Add class flex-around
topMenuEl.classList.add("flex-around");

// ----------------Part 3: Adding Menu Buttons--------------------

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// 1. Iterate over menuLinks
menuLinks.forEach((link) => {
  // 2. For each link object, create an <a> element
  const aEl = document.createElement("a");
  // 3. On the new element, add an href attribute with its value set to link.href
  aEl.setAttribute("href", link.href);
  // 4. Set the new element's content to link.text
  aEl.textContent = link.text;
  // 5. Append the new element to topMenuEl
  topMenuEl.appendChild(aEl);
});

// ----------------Part 4: Adding Interactivity--------------------
// TODO: Add interactivity in the future
