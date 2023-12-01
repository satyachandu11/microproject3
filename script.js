const foodData = require('./food.json');

// #1: list all the food items
function allFood(){
    return foodData;
};

// #2: list all the food items with category vegetables
function foodItemsVegetables(){
    return foodData.filter((food) => food.category === 'Vegetable');
}

// #3: list all the food items with category fruit
function foodItemsFruits(){
    return foodData.filter((food) => food.category === 'Fruit');
}

// #4: list all the food items with category protien
function foodItemsProtein() {
  return foodData.filter((food) => food.category === "Protein");
}

// #5: list all the food items with category nuts
function foodItemsNuts() {
  return foodData.filter((food) => food.category === "Nuts");
}

// #6: list all the food items with category grains
function foodItemsGrain() {
  return foodData.filter((food) => food.category === "Grain");
}

// #7: list all the food items with category dairy
function foodItemsDairy() {
  return foodData.filter((food) => food.category === "Dairy");
}

// #8: list all the food items with calorie above 100
function calorieAbove() {
  return foodData.filter((food) => food.calorie > 100);
}

// #9: list all the food items with calorie below 100
function calorieBelow() {
  return foodData.filter((food) => food.calorie < 100);
}

// #10: list all the food items with highest protien content to lowest
function protienHighToLow() {
  return foodData.sort((a,b) => b.protiens - a.protiens);
}

// #11: list all the food items with lowest cab content to highest
function cabLowToHigh() {
  return foodData.sort((a, b) => a.cab - b.cab);
}
 
// Showing Result by passing original data as input to the function.
console.log(allFood());
console.log(foodItemsVegetables());
console.log(foodItemsFruits());
console.log(foodItemsProtein());
console.log(foodItemsNuts());
console.log(foodItemsGrain());
console.log(foodItemsDairy());
console.log(calorieAbove());
console.log(calorieBelow());
console.log(protienHighToLow());
console.log(cabLowToHigh());