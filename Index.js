 Pizzas = [
{
  id: 1,
  nombre: 'Mozzarella',
  ingrendientes: ['Mozzarella', 'Salsa', 'Aceitunas'],
  precio: 900
},
{
  id: 2,
  nombre: 'Fugazzeta',
  ingrendientes: ['Mozzarella','Cebolla', 'Oliva', 'Oregano', 'Aceituna'],
  precio: 1000
},
{
  id: 3,
  nombre: 'Roquefort',
  ingrendientes: ['Salsa', 'Mozzarella', 'Jamon', 'Roquefort', 'Aceitunas'],
  precio: 590
},
{
  id: 4,
  nombre: 'Napolitana',
  ingrendientes: ['Salsa', 'Mozzarella', 'Cherrys', 'Ajo', 'Perejil', 'Aceitunas'],
  precio: 1200
},
{
  id: 5,
  nombre: 'Rucula y crudo',
  ingrendientes: ['Salsa', 'Mozzarella', 'Jamon crudo', 'Rucula', 'Parmesano', 'Aceitunas'],
  precio: 1400
},
{
  id: 6,
  nombre: 'Espinaca',
  ingrendientes: ['Salsa blanca', 'Espinaca', 'Mozarella', 'Nueces', 'Aceituna'],
  precio: 280
}
]

/* Tomo los elementos necesarios */
const nombrePizza = document.getElementById('nombre-pizza');
const precioPizza = document.getElementById('precio');
const form = document.getElementById('form');
const valorInput = document.getElementById('input');
const botonEnviar = document.getElementById('boton');

const Reseth2 = () => {
 // form.reset();
  nombrePizza.innerHTML = ` Seleccione el número de la pizza que desee `;
  precioPizza.innerHTML = ``
  return;
};

const capturoNumero = () => {
  const findPizzas = Pizzas.find(item => item.id === valorInput.valueAsNumber)
  if(!findPizzas) {
    Reseth2();
    return alert('No hay pizzas identificadas con ese número');
  }else {
    return nombrePizza.innerHTML = `La pizza seleccionada es la N° ${findPizzas.id}: ${findPizzas.nombre}`, 
           precioPizza.innerHTML = `El precio de esa pizza es: $${findPizzas.precio}`
  }
}

const submitForm = (e) => {
  e.preventDefault();

  capturoNumero();

};

const init = () => {
  Reseth2();

  window.addEventListener("DOMContentLoaded", Reseth2);
  
  form.addEventListener("submit", submitForm);
};

init();