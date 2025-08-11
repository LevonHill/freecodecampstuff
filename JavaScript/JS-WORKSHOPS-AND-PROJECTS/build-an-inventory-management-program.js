//For this lab, you'll build an inventory management program using JavaScript. You'll use JavaScript array of objects to manage the inventory.
// 1. Declare an empty array named inventory
const inventory = [];

// 2. Function to find product index in inventory (case-insensitive)
function findProductIndex(productName) {
  return inventory.findIndex(
    item => item.name.toLowerCase() === productName.toLowerCase()
  );
}

// 6. Function to add product
function addProduct(product) {
  const name = product.name.toLowerCase();
  const index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({ name, quantity: product.quantity });
    console.log(`${name} added to inventory`);
  }
}

// 11. Function to remove product
function removeProduct(name, quantityToRemove) {
  name = name.toLowerCase();
  const index = findProductIndex(name);

  if (index === -1) {
    console.log(`${name} not found`);
    return;
  }

  const product = inventory[index];

  if (product.quantity < quantityToRemove) {
    console.log(`Not enough ${name} available, remaining pieces: ${product.quantity}`);
    return;
  }

  product.quantity -= quantityToRemove;

  if (product.quantity === 0) {
    inventory.splice(index, 1);
  } else {
    console.log(`Remaining ${name} pieces: ${product.quantity}`);
  }
}

