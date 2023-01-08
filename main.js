import { valida } from './src/js/valida.js'

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target);
    });

    input.addEventListener('submit', (evento) => {
        evento.preventDefault();
    });

    input.addEventListener('invalid', (evento) => {
        evento.preventDefault();
    });
});