// Refactor: deleted baseEndpoint variable
const usersEndpoint = 'https://api.github.com/users';

// Fix: constant and id names
// Feat: new variables for DOM manipulation
const $username = document.querySelector('#name');
const $blog = document.querySelector('#blog');
const $location = document.querySelector('#location');
const $box = document.querySelector('#box');
const $userDiv = document.querySelector('#user-div');

// Feat: new function to handle request
const handleRequest = name =>
  fetch(`${usersEndpoint}/${name}`)
    .then(response => {
      if(response.ok)
        return response.json();
      else 
        throw 'Usuario no encontrado!';
    });

// Fix: changed name variable and added classlist
const handleError = error => $username.textContent = `Algo salió mal: ${error}`;

// Fix: added async word
async function displayUser() {
  // Feat: getting input username
  const $name = document.querySelector('#username').value;

  // Feat: added display property and hide elements
  $username.textContent = 'cargando...';
  $blog.style.display = 'none';
  $userDiv.style.display = 'none';
  $location.style.display = 'none';

  // Feat: try-catch
  try {
    // Feat: then-catch request and classlist property
    const data = await handleRequest($name);
    $box.classList.add('success');

    // Feat: data validation
    if(data !== null && data !== undefined && data.name !== null) {
      // Fix: changed single quotes to template literals
      $username.textContent = `${data.name}`;
      $blog.action = `${data.blog}`;
      $location.textContent = `${data.location}`;

      // Feat: show elements
      $blog.style.display = 'block';
      $location.style.display = 'block';
    } else {
      $username.textContent = `Algo salió mal: Usuario no encontrado!`
    }
  } catch(error) {
    handleError(error);
    $box.classList.add('error');
  }

  // Feat: show element
  $userDiv.style.display = 'block';
}