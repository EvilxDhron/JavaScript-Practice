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
};

const addtoCart = (Name, Quantity, Price) => Cart.push({Product: Name, Quantity: Quantity, Price: Price});

const getMostExpensive = () => {
    let max = Cart[0];
    for(item of Cart){
        if(item.Price > max.Price){
            max = item;
        }
    }
    return `${max.Product} is the most expensive product in your cart, and it's price is ${max.Price}.`;
};

const getCheapest = () => {
    let cheapest = Cart[0];
    for(item of Cart){
        if(item.Price < cheapest.Price){
            cheapest = item;
        }
    }
    return `${cheapest.Product} is the cheapest product available in your cart and it's price is ${cheapest.Price}`
};
