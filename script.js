/* 
DOM selection
add eventListener
Basic validation
create element
Append element

*/


const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const addBook = document.getElementById("addBook");
const bookList = document.getElementById("bookList");

addBook.addEventListener('click',function () {
   if (title.value =="" && author.value=="" && year.value =="") {
       alert("Please fill the above field")
   }
   else{
       const newRow =document.createElement('tr');

    //    create new table data

    const newTitle = document.createElement("td");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);
   
     const newAuthor = document.createElement("td");
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);
   

     const newYear = document.createElement("td");
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    bookList.appendChild(newRow);
   }
})


