const products = [];

module.exports = class Product {
  constructor(t) {
    this.productName = t;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
};
