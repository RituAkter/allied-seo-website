const sing_in_btn = document.querySelector("#sign-in-btn");
const sing_in_btn_2 = document.querySelector("#sign-in-btn-2");
const sing_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".home-page");

sing_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sing_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

sing_in_btn_2.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});