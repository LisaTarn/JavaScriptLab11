//Base Class productProperties

class productProperties{

    //constructor - initializes the properties

    constructor(name, price, quantity){
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }

    // methods for productProperties

    getTotalValue(){
        let total = this.price * this.quantity;   //The total value would be the price multiplied by quantity
        return total;
    }

    toString(){
        console.log(`Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}` )
    }

    // Static method apply discount

    static applyDiscount(products, discount){ //use for each method to apply discount to each element of array, price is price - (price multiplied by discount)
        products.forEach(product => {
            product.price -= product.price * discount;});
    }
}

// Subclass PerishableProductProperties

class PerishableProductProperties extends productProperties{
    
    // constructor - initializes the properties of PerishableProductProperties - adds expiration date
    
    constructor(name, price, quantity, expirationDate){
        super(name, price, quantity)
        this.expirationDate = expirationDate}
    
// Overide toString() - adds expiration date

        toString(){
        console.log(`Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}` )
    }
}

// 2 instances of perishable product properties

const ribEye = new PerishableProductProperties ('Ribeye', 29.99, 200, 'Jan 15, 2025')
const parsley = new PerishableProductProperties ('parsley', 1.99, 325, "Jan 30, 2025");
console.log(ribEye);
console.log(parsley);

// Class Store to store objects productProperties and PerishableProductProperties

class Store {

    // constructor to store objects in inventory

    constructor(){
        this.inventory = [];
    }

    //Methods

addProduct(product){
    this.inventory.push(product);
};

getInventoryValue(){
    let iValue = 0;
    for(let i=0; i < this.inventory.length; i++){ // for loop to cycle through each element of array, the inventory value is equal to the value of all the elements in array
        iValue += this.inventory[i].getTotalValue();
    }
    return iValue.toFixed(2);
};

findProductByName(name) {
    for (let i = 0; i < this.inventory.length; i++) { // for loop to cycle through each element of array to see if the name of product matches element, and if so returns that particular object
        if (this.inventory[i].name === name) {
            return this.inventory[i];
        }
    }
    return null; 
}};

//5 products including 2 PerishableProduct objects

const beans = new productProperties('beans', 3.98, 100);
const tinnedTomatoes = new productProperties('tinned tomatoes', 4.99, 200);
const apple = new PerishableProductProperties ('apple', 1.99, 398, 'Jan 15, 2025')
const milk = new PerishableProductProperties ('milk', 6.99, 325, "Jan 30, 2025");
const snickers = new productProperties('snickers', 1.99, 432);

// Store object noFrills

const noFrills = new Store();

//Adding products to inventory

noFrills.addProduct(beans);
noFrills.addProduct(tinnedTomatoes);
noFrills.addProduct(apple);
noFrills.addProduct(milk);
noFrills.addProduct(snickers);

//Total inventory value before discount

console.log(`Total inventory value before discount: ${noFrills.getInventoryValue()}`);

// Applying discount and total inventory value after discount

productProperties.applyDiscount(noFrills.inventory, 0.1);
console.log(`Total inventory value after discount: ${noFrills.getInventoryValue()}`);

// Find and print details of specific product by name

console.log(noFrills.findProductByName('milk'));

