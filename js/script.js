const modal = document.querySelector(".modal");
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".close");

loginBtn.addEventListener("click", function openModal() {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function closeModal() {
    modal.style.display = "none";
});

window.addEventListener("click", function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}); 

