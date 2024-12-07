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