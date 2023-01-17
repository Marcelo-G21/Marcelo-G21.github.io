import { brushes, paints } from "../utils/data.js";
import { containBrushes, containPaints } from "./nodes.js";

const templateBrushCard = (brush) => {
  return `
            <div class="card">
                <figure class="contain-img">
                    <img src="../../public/products/${brush.url}" alt="" class="img-card">
                    <h2 class="name-product">${brush.name}</h2>
                </figure>
                
                <div class="description-card">
            <div>
                <h2 class="price">$ ${brush.price}</h2>
                <button class="buy" id="btn-modal">Buy</button>
            </div>
        </div>
            </div>
    `;
};

const templatePaintCard = (paint) => {
    return `
    <div class="card">
        <figure class="contain-img">
            <img src="../../public/products/${paint.url}" alt="" class="img-card">
            <h2 class="name-product">${paint.name}</h2>
        </figure>
        <div class="description-card">
            <div>
                <h2 class="price">$ ${paint.price}</h2>
                <button class="buy">Buy</button>
            </div>
        </div>
        
    </div>
`;
};


const viewBrushes = () => {
    const viewBrushes = brushes.map((brush) => templateBrushCard(brush));
    containBrushes.innerHTML = viewBrushes.join("");
}

const viewPaints = () => {
    const viewPaints = paints.map((paint) => templatePaintCard(paint));
    containPaints.innerHTML = viewPaints.join("");
}
export {viewBrushes, viewPaints}