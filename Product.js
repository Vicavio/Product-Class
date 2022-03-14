class Product {
    constructor(id, category, name, image, price) {
        this.id = id
        this.category = category
        this.name = name
        this.image = image
        this.price = price
    }
    log() {
        console.log(`This product has the id: ${this.id} and is part of ${this.name} brand. It is part of ${this.category} category and has a price of ${this.price}. Take a look at the picture ${this.image}`)
    }
    
}

let tshirt = new Product("#3017", "Sport", "Nike", "images/nike.jpg", "euro 69");
let pants = new Product("#7539", "Yoga", "Reebook", "yogaPants.jpg", "euro 37");
let shoes = new Product("61397", "Running", "Under Armour", "womanShoes.jpg", "euro 117")
console.log(tshirt)
tshirt.log();
pants.log();
shoes.log();