// Map
// ---
// Creates a new array with changed values
// - The LENGTH does NOT change
// - Does NOT change the original array

var array = [11, 75, 8];

var doubleArray = array.map(function(oneNumber) {
  // var oneNumber = 75;
  // RETURN the value for the new array
  return oneNumber * 2;
});

// -----------------------------------------------

var doubleArray = [];

array.forEach(function(oneNumber) {
  // PUSH the value for the new array
  doubleArray.push(oneNumber * 2);
});

console.log(doubleArray);
// [22, 150, 16]

// -----------------------------------------------

var cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris"
];

var capsCities = cities.map(function(oneCity) {
  // var oneCity = "amsterdam";
  var firstLetter = oneCity.charAt(0);
  var restOfWord = oneCity.slice(1);

  // RETURN the value for the new array
  return firstLetter.toUpperCase() + restOfWord;
});

console.log(capsCities);
// ['Miami', 'Barcelona', 'Madrid', 'Amsterdam', 'Berlin', 'Sao paulo', 'Lisbon', 'Mexico city', 'Paris' ]
