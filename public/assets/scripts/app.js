const container = document.getElementById("filmes-container");


function listarFilmes(){

    fetch("http://localhost:3000/filme").then(response => response.json()).then(listaFilmes => {

        const div = document.createElement('div');

        listaFilmes.forEach(filme => {
            const image = document.createElement('img');
            image.src = filme.imagem;
            image.classList.add('capa-filme');
            div.appendChild(image);
            container.appendChild(div);
        });
    })
}

listarFilmes();