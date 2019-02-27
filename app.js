//Book constructor 
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


//UI constructor 
function UI() {

}

//Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    //getting our variables
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value

    e.preventDefault()
})