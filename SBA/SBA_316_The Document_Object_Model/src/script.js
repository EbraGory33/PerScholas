const today = new Date();
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
document.getElementById("month").textContent = months[today.getMonth()];
document.getElementById("day").textContent = today.getDate();

// const inputField = document.querySelector("#input .add-input");
// const extraFields = document.getElementById("extra-fields");
// const inputContainer = document.getElementById("input");

// // Show fields when clicking inside the input
// inputField.addEventListener("focus", () => {
//   extraFields.style.display = "block";
// });

// // Hide fields when clicking outside the container
// document.addEventListener("click", (e) => {
//   if (!inputContainer.contains(e.target)) {
//     extraFields.style.display = "none";
//   }
// });

const inputField = document.querySelector("#input .add-input");
const inputContainer = document.getElementById("input");

function createExtraFields() {
  // Prevent duplicates
  if (document.getElementById("extra-fields")) return;

  const wrapper = document.createElement("div");
  wrapper.id = "extra-fields";

  wrapper.innerHTML = `
    <div class="add-input" style="display: flex">
      <p>Date</p>
      <input type="date" placeholder="Add Todo" />
    </div>

    <div class="add-input" style="display: flex">
      <p>Priority</p>
      <div style="display: flex; margin: 16px; gap: 16px">
        <div>
          <input type="radio" id="High" name="priority" value="High" checked />
          <label for="High">High</label>
        </div>
        <div>
          <input type="radio" id="Mid" name="priority" value="Mid" />
          <label for="Mid">Mid</label>
        </div>
        <div>
          <input type="radio" id="Low" name="priority" value="Low" />
          <label for="Low">Low</label>
        </div>
      </div>
    </div>

    <div class="add-input" style="display: flex">
      <p>Tag</p>
      <input type="text" class="add-input" placeholder="Add Tag" />
    </div>
  `;

  inputContainer.appendChild(wrapper);
}

function removeExtraFields() {
  const wrapper = document.getElementById("extra-fields");
  if (wrapper) wrapper.remove();
}

// Show when focusing input
inputField.addEventListener("focus", createExtraFields);

// Remove when clicking outside
document.addEventListener("click", (e) => {
  if (!inputContainer.contains(e.target)) {
    removeExtraFields();
  }
});
