import { getProperties } from "./server.js";
import { createCards } from "./Cartas.js";

document.addEventListener("DOMContentLoaded", async () => {
    const doCards = document.querySelector("#container-cards");
    const property = await getProperties();
    property.forEach((element) => {
        doCards.innerHTML += createCards(element);
    });
});