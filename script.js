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
const helperTextPost = document.getElementById('helper-text-post')
 
// 2. Funções

function gerarPost(evento){
    helperTextPost.innerText = ''
    evento.preventDefault()

    const jsonBody = JSON.stringify({
        titulo: postTitle.value,
        mensagem: postBody.value
    })

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', 
        headers: {
           "Content-Type": "application/json"
        },
        body: jsonBody
    
    })
    .then(res => res.json())
    .then(data => {
        const post = document.createElement('div')
        post.classList.add('postagem')
        post.innerHTML = `
            <h3>${data.id} - ${data.titulo}</h3>
            <P>${data.mensagem}</P>
        `
        // este evento lo usamo para colocar de primero las ultimas postagens
        postsContainer.prepend(post)
        
        // Limpiar el formulario

        postTitle.value = ''
        postBody.value = ''
        alert('Postagem criada con exito')
        
        
    
        console.log(data)})
    .catch(() => {
        helperTextPost.innerText = 'no fue posible mostrar la pagina'
        console.log(err)
    })
    
}
// 3. Eventos

btnPost.addEventListener('click', (evento) => gerarPost(evento))