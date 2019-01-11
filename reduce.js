// Reduce
// ------
// Combines the items into one final result.
// - Think of adding together the items of an array

var ingredients = [
  { name: "Mushrooms", price: 5 },
  { name: "Pepperoni", price: 2 },
  { name: "Parmesan", price: 3 }
];

var total = 11;

ingredients.forEach(function(oneIngredient) {
  // directly COMBINE the current item's value with our variable
  total += oneIngredient.price;
});

console.log("Final Price €" + total);

// ----------------------------------------

var total = ingredients.reduce(function(sum, oneIngredient) {
  // RETURN the accumulator plus the current item's value
  return sum + oneIngredient.price;
}, 11);
// 11 is the accumulator's initial value

console.log("Final Price €" + total);
