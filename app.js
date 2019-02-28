//Book constructor 
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


//UI constructor 
function UI() {}

//Creating prototype
//Add Book to List
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list')
    //Create tr element
    const row = document.createElement('tr')
    //Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td>
        <a href='#' class='delete'>X</a>
    </td>
    `
    list.appendChild(row)
}

//Clear Fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
}

//Show Alert Error
UI.prototype.showAlert = function(message, className){
    //Create div
    const div = document.createElement('div')
    //Add Class
    div.className = `alert ${className}`
    //Add Text
    div.textContent = message
    //Get parent
    const container = document.querySelector('.container')
    const form = document.querySelector('#book-form')
    //Insert alert
    container.insertBefore(div, form)

    //Timeout after 3 second
    setTimeout(()=> {
        document.querySelector('.alert').remove()
    }, 3000)

    // Delete Book
    UI.prototype.deleteBook = function(target) {
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove()
        }
    }

}

//Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
    //getting our values
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value

    //Instantiate book 
    const book = new Book(title, author, isbn)
    
    //Instantiate UI
    const ui = new UI()

    //Validate
    if(title === '' || author === '' || isbn === ''){
        //error alert
        ui.showAlert('Please fill in all fields', 'error')
    } else {
        //Add book to the list
        ui.addBookToList(book)

        //Show Alert Sucess
        ui.showAlert('Book Added', 'success')

        //Clear fields
        ui.clearFields()
    }

    e.preventDefault()
})

//Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    
    //Instantiate UI
    const ui = new UI()

    //delete book
    ui.deleteBook(e.target)

    //Show message
    ui.showAlert('Book removed!', 'success')


    e.preventDefault()
})