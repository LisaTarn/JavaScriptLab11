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

class PerishableProductProperties extends productProperties{
    constructor(name, price, quantity, expirationDate){
        super(name, price, quantity)
        this.expirationDate = expirationDate}
    
        toString(){
        console.log(`Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}` )
    }
}

class Store {
    constructor(){
        this.inventory = [];
    }


addProduct(product){
    this.inventory.push(product);
};

getInventoryValue(){
    let iValue = 0;
    for(let i=0; i < this.inventory.length; i++){
        iValue += this.inventory[i].getTotalValue();
    }
    return iValue;
};

findProductByName(name) {
    for (let i = 0; i < this.inventory.length; i++) {
        if (this.inventory[i].name === name) {
            return this.inventory[i];
        }
    }
    return null; 
}};
