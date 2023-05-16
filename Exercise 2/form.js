// Changed var to const declaration and variable name
const form = document.querySelector("#form");

// Changed "e" to "event" parameter
// Changed var to const declarations
const createGuest = event => {
  // Disable form submit
  event.preventDefault();

  // Changed and combined name variables
  // Added innerText property
  const formElements = form.elements;
  const nameElement = formElements[0];
  const ageElement = formElements[1];

  // Getting values in string and number
  const name = nameElement.value;
  const age = parseInt(ageElement.value);

  // Getting nationality
  // Changed value to innerText property
  const nationalityDropdown = form.elements[2];
  const index = nationalityDropdown.selectedIndex;
  const nationality = nationalityDropdown.options[index].innerText;

  if (name.length === 0)
    nameElement.classList.add("error");
  else 
    nameElement.classList.remove("error");

  if (age < 18 || age > 120 || isNaN(age))
    ageElement.classList.add("error");
  else 
    ageElement.classList.remove("error");

  if (name.length > 0 && age >= 18 && age <= 120)
    addGuest(name, age, nationality);
}

// Deleted nationality if statement
function addGuest(name, age, nationality) {
  // Getting reference
  const list = document.getElementById("guest-list");

  // Creating list element
  const listElement = document.createElement("div");
  listElement.classList.add("list-element");
  list.appendChild(listElement);

  // Deleted extra tags and function created
  createElement("Nombre", name, listElement);
  createElement("Edad", age, listElement);
  createElement("Nacionalidad", nationality, listElement);

  // Creating delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar invitado";
  listElement.appendChild(deleteButton);
  deleteButton.onclick = () => deleteButton.parentNode.remove();
};

// Created separated function
const createElement = (description, value, list) => {
  const tag = document.createElement("p");
  tag.textContent = `${description}: ${value}`;
  list.appendChild(tag);
};