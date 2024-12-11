class productProperties{
    constructor(name, price, quantity){
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }

    getTotalValue(){
        let total = this.price * this.quantity;
        return total;
    }

    toString(){
        console.log(`Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}` )
    }

    static applyDiscount(products, discount){
        products.forEach(product => {
            product.price -= product.price * discount;});
    }
}

let product = new productProperties('Apple', 2.50, 2);
console.log(product.getTotalValue());
product.toString();

class PerishableProductProperties extends productProperties{
    constructor(name, price, quantity, expirationDate){
        super(name, price, quantity)
        this.expirationDate = expirationDate}
    
        toString(){
        console.log(`Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}` )
    }
}

