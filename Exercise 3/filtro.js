const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

// Se cambio el nombre de la variable y getElementsByName por getElementById
const productsList = document.getElementById("lista-de-productos");

// Se creo esta funcion
const displayProductos = productos => { //se reemplazo la funcion por un arrow function
  for (let i = 0; i < productos.length; i++) {
    // Se cambio el tipo de Var a Const y el nombre de la variable
    const productDiv = document.createElement("div");
    productDiv.classList.add("producto");
    
    //se cambiaron los nombres li, ti y $i por nombres que fueran más entendibles
    
    // Se cambio el tipo de Var a Const y el nombre de la variable
    const productTitle = document.createElement("p");
    productTitle.textContent = productos[i].nombre;
    // Se elimino el classList.add("titulo") debido a que no se tiene en CSS
    
    // Se cambio el tipo de Var a Const y el nombre de la variable
    const productImg = document.createElement("img");
    productImg.setAttribute('src', productos[i].img);

    productDiv.appendChild(productTitle);
    productDiv.appendChild(productImg);

    productsList.appendChild(productDiv);
  }
};

// Se cambio el argumento de button a #filter-button
const botonDeFiltro = document.querySelector("#filter-button");

botonDeFiltro.onclick = () => { //se reemplazo la funcion por un arrow function
  // Se cambio el nombre de la variable a productsList
  while (productsList.firstChild);
    productsList.removeChild(productsList.firstChild);

  // Se agrego el valor del input en lugar de tenerlo como variable global
  // Se cambio el nombre de la variable
  const filterInputText = document.querySelector('#filter').value;
  const productosFiltrados = filtrado(productos, filterInputText);

  // Se reutilizo la funcion creada para mostrar los productos
  displayProductos(productosFiltrados);
  
  //se quitó el ciclo for ya que era redundante
};

const filtrado = (productos = [], texto) => {  
  return productos.filter(item => item.nombre.includes(texto)
    || item.tipo.includes(texto) || item.color.includes(texto)); //se añadio el item.nombre para filtrar
};  

displayProductos(productos);