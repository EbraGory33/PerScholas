const newUser = document.getElementById("new-user-btn");
const userImage = document.getElementById("user-image");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");

async function initialLoad() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  userImage.setAttribute("src", data.results[0].picture.large);
  userName.textContent += `${data.results[0].name.first} ${data.results[0].name.last}`;
  userEmail.textContent += `${data.results[0].email}`;
  console.log(response);
  console.log(data);
}
initialLoad();

newUser.addEventListener("click", (e) => {
  e.preventDefault();
  userName.textContent = "Name: ";
  userEmail.textContent = "Email: ";
  initialLoad();
});
