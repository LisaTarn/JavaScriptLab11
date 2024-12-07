class productProperties{
    constructor(name, price, quantity){
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }

    getTotalValue(){
        return this.price * this.quantity;
    }

    toString(){
        console.log('Product: ${this.product}, Price: ${this.price}, Quantity: ${this.quantity}' )
    }

    static applyDiscount(products, discount){
        this.products = products;
        this.price = price;
        return price - (price*discount);
    }
}

let product = new productProperties("Apple", 2.50, 2);
console.log(product.getTotalValue());
product.toString();

class PerishableProductProperties extends productProperties{
    constructor(name, price, quantity, expirationDate){
        super(name, price, quantity)
        this.expirationDate = expirationDate}
    toString(){
        console.log(`Product: ${this.product}, Price: ${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}` )
    }
}

let apple = new PerishableProductProperties("apple", 2.50, 2, "2024-12-31");
apple.getTotalValue();
apple.toString();
let cheese = new PerishableProductProperties("cheese", 17.00, 1, "2024-12-29");
cheese.getTotalValue();
cheese.toString();

class Product{
    static applyDiscount(products, discount){
        const price = products.map(item => item.price);
        return price.map(price => price - (price*discount));
}}

let products = [
    new productProperties("orange", 2.50, 3),
    new productProperties("apple", 3.00, 7)
];

console.log(Product.applyDiscount(products, 0.1));


