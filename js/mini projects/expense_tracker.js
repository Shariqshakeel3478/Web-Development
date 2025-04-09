let items = [];

function takingInput() {
    let totalItems = parseInt(prompt("Enter a number"));

    for (let i = 0; i < totalItems; i++) {
        let productName = prompt("Enter product name");
        let productCost = parseInt(prompt("Product cost?"));
        items.push({
            product: productName,
            price: productCost
        });
    }
    console.log(items);
    findTotal(items);
}

function findTotal(items) {

    let total = items.map((item) => item.price);
    let totalCost = total.reduce((a, b) => a + b, 0);

    console.log("Item names :", itemName)
    console.log("Total Cost:", totalCost);
}

takingInput();