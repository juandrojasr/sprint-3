export const createCards = (element) => {
    const card = `
        <a class="card" href="seleccionada.html?id=${element.id}">
          <div class="card-img" style="background-image: url(img/properties/${element.img})">
            <div class="card-top">
              <span class="card-p-type">${element.type}</span>
              <span class="card-p-status">${element.status}</span>
            </div>
            <div class="card-botton">
              <span class="card-p-price">${element.price}</span>
            </div>
          </div>
          <div class="card-info">
            <h4 class="card-p-location">${element.location}</h4>
            <h3 class="card-full-location">${element.general_details}</h3>
            <div class="card-p-owner">
              <img src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-person_90382.png" class="owner-icon" alt="">
              <p class="owner-name">${element.owner}</p>
              <span class="card-p-date">${element.ago}</span>
            </div>
            <div class="card-p-features">
              <p class="medidas">${element.measure}</p>
              <span>p:${element.parking}</span>
              <span>b:${element.bathrooms}</span>
              <span>r:${element.rooms}</span>
            </div>
          </div>
        </a>`
    return card
};