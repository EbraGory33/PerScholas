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

const inputField = document.querySelector("#input .add-input");
const inputContainer = document.getElementById("input");

function createExtraFields() {
  if (document.getElementById("extra-fields")) return;

  const wrapper = document.createElement("div");
  wrapper.id = "extra-fields";

  wrapper.innerHTML = `
    <div class="add-input" style="display: flex">
      <p>Date</p>
      <input name="date" type="date" placeholder="Add Todo" required />
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
      <input id="todo-tag" name="tag" type="text" class="add-input" placeholder="Add Tag" />
    </div>
    <button type="submit">Add</button>
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
  // e.preventDefault();
  if (!inputContainer.contains(e.target)) {
    removeExtraFields();
  }
});

function createTodoItem(title, date, priority, tag) {
  const list = document.getElementById("todo-list");
  // Create todo-card
  const card = document.createElement("div");
  card.className = "todo-card";

  card.innerHTML = `
    <input type="checkbox" class="todo-check" />
    <div class="todo-content">
      <div><span>${date}</span> ${title} (${priority})</div>
      <div class="tag">#${tag}</div>
    </div>
  `;

  const fragment = document.createDocumentFragment();
  fragment.appendChild(card);
  if (list.firstChild) {
    list.insertBefore(card, list.firstChild);
  } else {
    list.appendChild(card);
  }

  inputField.value = "";
  removeExtraFields();
  window.alert("Task added!");
}

inputContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = inputField.value.trim();
  if (title.length < 3) {
    alert("Todo must be at least 3 characters long.");
    return;
  }
  const date = inputContainer.elements["date"].value;
  const priority = inputContainer.elements["priority"].value;
  const tag = inputContainer.elements["tag"]?.value.trim() || "general";

  createTodoItem(title, date, priority, tag);
});

document.getElementById("todo-list").addEventListener("change", (e) => {
  if (e.target.classList.contains("todo-check")) {
    const card = e.target.parentNode;
    card.classList.toggle("completed", e.target.checked);

    if (e.target.checked) {
      card.setAttribute("aria-checked", "true");
    } else {
      card.setAttribute("aria-checked", "false");
    }
  }
});

// Clear completed button functionality
document.getElementById("clear-completed").addEventListener("click", () => {
  const todos = document.querySelectorAll(".todo-card");
  todos.forEach((todo) => {
    const checkbox = todo.querySelector(".todo-check");
    if (checkbox && checkbox.checked) {
      todo.remove();
    }
  });
  window.alert("Cleared all completed");
});

window.document.title = "Todos";
