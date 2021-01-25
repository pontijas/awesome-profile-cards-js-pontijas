'use strict';

const collapsibleTrigger = document.querySelectorAll('.collapsible__trigger');

function updateCollapsible (event){
    const currentCollapsible = event.currentTarget.parentElement;

    if (currentCollapsible.classList.contains("collapsible-open")) {
        // Si está abierto, lo puedo cerrar
        currentCollapsible.classList.remove("collapsible-open");
      } else {
        // Si está cerrado:
        // Los cierro todos
        for (const item of collapsibleTrigger) {
          item.parentElement.classList.remove("collapsible-open");
        }
        // Abro el correcto
        currentCollapsible.classList.add("collapsible-open");
      }
}

for (const item of collapsibleTrigger) {
    item.addEventListener('click', updateCollapsible); 
}
