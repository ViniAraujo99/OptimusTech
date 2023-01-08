export function valida(input) {
    const tipoInput = input.dataset.tipo;

    if(input.validity.valid) {
        input.parentElement.classList.remove('footer__input-container--invalido');
    } else {
        input.parentElement.classList.add('footer__input-container--invalido');
        input.placeholder = mensagemDeErro(tipoInput, input);
        input.value = '';
    }
}

const tiposErro = [
    "valueMissing",
    "typeMismatch"
]

const mensagemErro = {
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "O e-mail digitado não é válido."
    }
}

function mensagemDeErro(tipoInput, input) {
    let mensagem = '';

    tiposErro.forEach(erro => {
        if(input.validity[erro]) {
                mensagem = mensagemErro[tipoInput][erro];
    }});

    return mensagem;
}