import { viewBrushes, viewPaints } from "./printView.js"
import { containBrushes, containPaints } from "./nodes.js";

const goToBrushes = document.querySelector('.to-brushes')
const templateCart = document.getElementById('list-buy');
let cart  = {}

window.addEventListener('load', viewBrushes);
window.addEventListener('load', viewPaints);


containBrushes.addEventListener('click', e => {
    addCart(e);
})

containPaints.addEventListener('click', e => {
    addCart(e);
})

const addCart = e => {
    if(e.target.classList.contains('buy')){
        setCart(e.target.parentElement.parentElement);
    }
    e.stopPropagation()
}

const setCart = object => {
    console.log(object)
    const product = {
        id: object.querySelector('.buy').dataset.id,
        name: object.querySelector('h3').textContent,
        price: object.querySelector('h2').textContent

    }
    /* cart[product.id] = {...product}
    viewCart() */
}

/* const viewCart = () => {
    console.log(cart)
    Object.values(cart).forEach(product => {
        templateCart.querySelector('')
    })
} */
