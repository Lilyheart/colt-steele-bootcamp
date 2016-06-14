var faker = require('faker');
var inventory = [];

for (var i = 0; i < 10; i++ ) {
    var product = {
        product: faker.fake('{{commerce.productAdjective}} {{commerce.productMaterial}} {{commerce.product}}'),
        // Faster way to do it, but won't show mustache string examples
        // product: faker.commerce.productName(),
        price: faker.commerce.price()
    };
    
    inventory.push(product);
}

console.log('===================');
console.log('WELCOME TO MY SHOP!');
console.log('===================');

for (i = 0; i < inventory.length; i++) {
    console.log(' * ' + inventory[i].product + ' - $' + inventory[i].price);
}


// Rowan Nikolaus var randomEmail = Faker.Internet.email(); 
// Kassandra.Haley@erich.biz var randomCard = Faker.Helpers.createCard(); 
// random contact card containing many properties ## API
