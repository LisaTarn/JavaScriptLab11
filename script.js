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

const beans = new productProperties('beans', 3.98, 100);
const tinnedTomatoes = new productProperties('tinned tomatoes', 4.99, 200);
const apple = new PerishableProductProperties ('apple', 1.99, 398, 'Jan 15, 2025')
const milk = new PerishableProductProperties ('milk', 6.99, 325, "Jan 30, 2025");
const snickers = new productProperties('snickers', 1.99, 432);


