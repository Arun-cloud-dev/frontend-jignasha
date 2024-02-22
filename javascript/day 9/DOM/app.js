// Dom manuplation 



const title = document.querySelector('#main-heading')


title.style.color = "Red"

const listItems = document.querySelectorAll(".list-items");



for (i=0; i<listItems.length; i++){
 listItems [i].style.fontSize = "0.6rem"
}





const ul = document.querySelector('ul');

const li = document.createElement("li");


//add element
ul.append(li)


// modyfy the text 


li.innerHTML = "x-men"


li.classList.add("list-items")




li.classList(li.classList.contains("list-items"))