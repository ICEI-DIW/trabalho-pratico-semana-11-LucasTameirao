document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('book-form');
    const  bookList = document.getElementById('book-list');

    

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
        }).catch(error => {
            console.error('Erro ao adicionar o livro:', error);
          });
    })


});