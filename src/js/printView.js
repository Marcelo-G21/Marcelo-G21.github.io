import { brushes, paints } from "../utils/data.js";
import { containBrushes, containPaints } from "./nodes.js";

const templateBrushCard = (brush) => {
  return `
            <div class="card">
                <figure class="contain-img">
                    <img src="../../public/products/${brush.url}" alt="" class="img-card">
                </figure>
                <div class="description-card">
                <h3 class="name-product">${brush.name}</h3>
            <div>
                <h2 class="price">$${brush.price}</h2>
                <button class="buy" data-id="${brush.id}">Buy</button>
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
        </figure>
        <div class="description-card">
        <h3 class="name-product">${paint.name}</h3>
            <div>
                <h2 class="price">$${paint.price}</h2>
                <button class="buy" data-id="${paint.id}">Buy</button>
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