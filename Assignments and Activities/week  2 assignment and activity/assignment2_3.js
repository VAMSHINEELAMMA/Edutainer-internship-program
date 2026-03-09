const product = {
  name: "Laptop",
  brand: "Dell",
  price: 60000,
  quantity: 2,
  category: "Electronics",

  showProduct: function () {
    console.log("Product Name:", this.name);
    console.log("Brand:", this.brand);
    console.log("Category:", this.category);
  },

  totalCost: function () {
    console.log("Total Cost:", this.price * this.quantity);
  }
};

product.showProduct();
product.totalCost();