import { viewBrushes, viewPaints } from "./printView.js"

window.addEventListener('load', viewBrushes);
window.addEventListener('load', viewPaints);

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-btn');
const closeModal = document.querySelector('.close-btn');

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})