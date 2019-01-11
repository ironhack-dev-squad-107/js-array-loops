// Sort
// ----
// Reorders the array by comparing items TWO AT A TIME
// - return a NEGATIVE number if "itemA" & "itemB" have a GOOD ORDER
// - return a POSITIVE number if "itemA" & "itemB" NEED TO SWITCH
// - Modifies the array DIRECTLY (no copy)

var numbers = [9, 1000, 30, 15];

numbers.sort(function(itemA, itemB) {
  if (itemA < itemB) {
    // return ANY NEGATIVE number if the order is good
    return -88;
  } else {
    // return ANY POSITIVE number if they need to switch
    return 222;
  }
});

console.log(numbers);
// [9, 15, 30, 1000]

// ----------------------------------------

var people = [
  { name: "Candice", age: 25 },
  { name: "Stuart", age: 17 },
  { name: "Alain", age: 49 },
  { name: "Nettie", age: 14 },
  { name: "Bill", age: 38 }
];

people.sort(function(itemA, itemB) {
  if (itemA.name < itemB.name) {
    // return ANY NEGATIVE number if the order is good
    return -999;
  } else {
    // return ANY POSITIVE number if they need to switch
    return 500;
  }
});

console.log(people);

// ----------------------------------------

var animals = [
  "seal",
  "giraffe",
  "frog",
  "lobster",
  "llama",
  "goat",
  "hedgehog",
  "Osprey",
  "Sloth"
];

// for STRINGS ONLY
animals.sort(function(itemA, itemB) {
  if (itemA.toLowerCase() < itemB.toLowerCase()) {
    // return ANY NEGATIVE number if the order is good
    return -999;
  } else {
    // return ANY POSITIVE number if they need to switch
    return 500;
  }
});

console.log(animals);
