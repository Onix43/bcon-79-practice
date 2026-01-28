class Goods {
  constructor(name, price, image, count) {
    ((this.name = name),
      (this.price = price),
      (this.image = image),
      (this.count = count));
  }
  draw() {
    const div = document.createElement("div");
    div.innerHTML = `<div class="goods"><h1>${this.name}</h1><p class="price">${this.price}</p><img src="${this.image}" alt="${this.name}" width="300"></div>`;
    return div;
  }
}
