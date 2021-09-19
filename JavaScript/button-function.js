const modalBtn = document.querySelector('.model_btn');
const modalBg = document.querySelector('.model_bg');
const closeModal = document.querySelector('.close-modal');

modalBtn.addEventListener('click', () => {
    modalBg.classList.add('bg_active');
});

closeModal.addEventListener('click', () => {
    modalBg.classList.remove('bg_active');
});