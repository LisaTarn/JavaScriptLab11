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
        console.log(`Product: ${this.product}, Price: ${this.price}, Quantity: ${this.quantity}` )
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

