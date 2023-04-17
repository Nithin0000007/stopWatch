let openModal = document.querySelector("#open-btn");
console.log(openModal)
let modal = document.querySelector(".modal-div");
console.log(modal)
let closeBtn = document.querySelector('#close-btn');
console.log(closeBtn)

openModal.addEventListener("click",function(){
    modal.style.display = "block";
})

closeBtn.addEventListener("click",function(){
    modal.style.display = "none";
})