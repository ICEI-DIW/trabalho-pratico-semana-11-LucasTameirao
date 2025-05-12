document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('book-form');
    const  bookList = document.getElementById('book-list');

    listarLivros();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const livro = {
            titulo: document.getElementById('title').value,
            autor: document.getElementById('author').value,
            nota: document.getElementById('rating').value,
            data: document.getElementById('date').value,
            comentario: document.getElementById('review').value
        }

        fetch('http://localhost:3000/livros', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(livro),
        }).then(response => response.json()).then(() => {
            listarLivros();
            form.reset();
        }).catch(error => {
            console.error('Erro ao adicionar o livro:', error);
          });
    })

    function listarLivros(){
        fetch('http://localhost:3000/livros').then(response => response.json()).then(livros => {
            bookList.innerHTML = '';

            livros.forEach(livro => {
                const div = document.createElement('div');
                div.classList.add('livro-item');

                div.innerHTML = `
                    <h3>${livro.titulo}</h3>
                    <p><strong>Autor:</strong> ${livro.autor}</p>
                    <p><strong>Nota:</strong> ${livro.nota}</p>
                    <p><strong>Data:</strong> ${livro.data}</p>
                    <p><strong>Comentário:</strong> ${livro.comentario}</p>
                    <hr>
                `

                bookList.appendChild(div);
            });
        });
    }
});