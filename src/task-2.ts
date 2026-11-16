interface Product {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
}

const product: Product = {
  id: 1,
  name: "Wireless Mouse",
  price: 29.99,
  description: "A comfortable wireless mouse",
};

console.log(product);
