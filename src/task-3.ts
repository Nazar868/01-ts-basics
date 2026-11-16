const usernames: string[] = ["Anna", "Oleh", "Marta"];

const ratings: number[] = [4.5, 3.8, 5];

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Keyboard", price: 59.99 },
  { id: 2, name: "Monitor", price: 189.99 },
  { id: 3, name: "Headphones", price: 79.99 },
];

console.log(usernames, ratings, products);
