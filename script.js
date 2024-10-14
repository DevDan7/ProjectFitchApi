// -------- Gerador de usuarios -------- //
// 1. Captura de elementos
const btnUsuario = document.getElementById('btn-usuario')
const usuariosContainer = document.getElementById('usuarios-container')
const helperTextUsuario = document.getElementById('helper-text-usuario')

// 2. Funções
function gerarUsuario(){

// Agregamos este metodo con el mesaje Carregando . . .

    helperTextUsuario.innerText = 'Carregando. . .'

    fetch('https://random-data-api.com/api/v2/users')
     .then((res) => res.json())
     .then((data) => {
        const usuario = document.createElement('div')
        usuario.innerHTML = `
        <img src="${data.avatar}" />
        <span><strong>Username:</strong>${data.username}</span>
         `
        usuario.classList.add('usuario')
        usuariosContainer.appendChild(usuario) 
        // Se agrego al final para despues de aparecer la imagen el aviso carregando desaparesca
        helperTextUsuario.innerText = ''
        console.log(data)
    })

    //Metodo para ejecutar y avisar cualquier error en la pagina
    .catch((error) => {
        helperTextUsuario.innerHTML = ''
        alert('No fue posible generar un usuario')
        console.log(error)



    })

}

// 3. Eventos
btnUsuario.addEventListener('click', gerarUsuario)

// -------- Gerador de postagens -------- //
// 1. Captura de elementos
const postTitle = document.getElementById('post-title')
const postBody = document.getElementById('post-body')
const btnPost = document.getElementById('btn-post')
const postsContainer = document.getElementById('posts-container')

// 2. Funções

function gerarPost(){
    evento.prevenDefault()

}
// 3. Eventos

btnPost.addEventListener('click', (evento) => gerarPost(evento))