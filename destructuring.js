/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
  mike: "designer",
  jill: "developer",
  huan: "accountant",
};
let { mike, jill, huan } = jobs;
console.log(mike, jill, huan);

// Destructuring subsets
let languages = ["englisch", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
  firstLanguage: "english",
  secondLanguage: "french",
  thirdLanguage: "german",
  fourthLanguage: "japanese",
};

let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "oraange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
  brian: "pizza",
  anna: "pasta",
  sarah: "vegetarian",
  huan: "steak"
};
let { brian, anna, ...rest } = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest); 
