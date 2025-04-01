let senhaUsuario;

fetch('a_passwords.json')
    .then(response => response.json())
    .then(data => {
        senhaUsuario = data.senhas[0].senhaAdmin;
    })

let itens = document.querySelector('.itens');
let elemento = document.querySelector('.elemento');

itens.addEventListener('mouseover', () => {
    elemento.classList.add('active');
});

itens.addEventListener('mouseout', () => {
    elemento.classList.remove('active');
});

let textoSenhaUm = document.querySelector('.textoSenha');

window.addEventListener('load', () => {
    setTimeout(() => {
        textoSenhaUm.classList.add('fadeout');
    },2000);
});

let senha = document.querySelector('.senha');
let senhaUm = document.querySelector('.senhaUm');
const input = document.querySelector('#inputSenha');

window.addEventListener('load', () => {
    setTimeout(() => {
        senha.classList.add('fadein');
    },4000)
    setTimeout(() => {
        senha.classList.add('active');
    }, 8000);
})

senha.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (input.value === senhaUsuario) {
            senha.classList.add('inactive');
            senhaUm.classList.add('inactive');
        }
    }
})