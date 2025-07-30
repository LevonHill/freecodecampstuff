// Initialize the lunches array
let lunches = [];

// Function to add lunch to the end of the array
function addLunchToEnd(array, lunchItem) {
  array.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return array;
}

// Function to add lunch to the start of the array
function addLunchToStart(array, lunchItem) {
  array.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return array;
}

// Function to remove the last lunch item
function removeLastLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
    return array;
  }
  const removedItem = array.pop();
  console.log(`${removedItem} removed from the end of the lunch menu.`);
  return array;
}

// Function to remove the first lunch item
function removeFirstLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
    return array;
  }
  const removedItem = array.shift();
  console.log(`${removedItem} removed from the start of the lunch menu.`);
  return array;
}

// Function to get a random lunch item
function getRandomLunch(array) {
  if (array.length === 0) {
    console.log("No lunches available.");
    return;
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomItem = array[randomIndex];
  console.log(`Randomly selected lunch: ${randomItem}`);
}

// Function to show the current lunch menu
function showLunchMenu(array) {
  if (array.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${array.join(', ')}`);
  }
}


//this burger variable rerferences to lunch array, it doesnt alter the OG array just links to its location in memory... note to levon


