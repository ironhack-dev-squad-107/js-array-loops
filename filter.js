// Filter
// ------
// Create a new array with some of the items
// - The LENGTH DOES change
// - Does NOT modify the original array

var people = [
  { name: "Candice", age: 25 },
  { name: "Stuart", age: 17 },
  { name: "Alain", age: 49 },
  { name: "Nettie", age: 14 },
  { name: "Bill", age: 38 }
];

var drinkers = people.filter(function(onePerson) {
  // RETURN the CONDITION for items you keep
  return onePerson.age >= 18;
});

console.log(people.length);
// 5

console.log(drinkers.length);
// 3
console.log(drinkers);

// -----------------------------------------------

var drinkers = [];

people.forEach(function(onePerson) {
  if (onePerson.age >= 18) {
    // PUSH only IF they meet the condition
    drinkers.push(onePerson);
  }
});

console.log(drinkers.length);
// 3
console.log(drinkers);

// -----------------------------------------------

var numbers = [1, 60, 112, 123, 100, 99, 73];

var filteredNumbers = numbers.filter(function(oneNumber) {
  // Keep ONLY EVEN numbers that are GREATER than 42
  return oneNumber % 2 === 0 && oneNumber > 42;
});

console.log(filteredNumbers);
