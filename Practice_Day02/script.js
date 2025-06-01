/* Mini Product Inventory System */

let Cart = [
  { Product: "Laptop", Quantity: 2, Price: 67000 },
  { Product: "Smartphone", Quantity: 4, Price: 24000 },
  { Product: "Tablet", Quantity: 5, Price: 26000 },
  { Product: "Smartwatch", Quantity: 1, Price: 2400 },
];

const listitems = () => {
    for(item of Cart){
        console.log(`${item.Product} :- ${item.Quantity} Total-Price :- ${item.Price*item.Quantity}`);
    }
}

const addtoCart = (Name, Quantity, Price) => Cart.push({Product: Name, Quantity: Quantity, Price: Price});
