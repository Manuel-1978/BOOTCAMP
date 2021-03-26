const listItems= document.getElementsByTagName("li");
const image = document.querySelector("img");
const changeImage = (e)=> image.src = e.target.textContent;

listItems[0].addEventListener("click", changeImage);
listItems[1].addEventListener("click", changeImage);
listItems[2].addEventListener("click", changeImage);