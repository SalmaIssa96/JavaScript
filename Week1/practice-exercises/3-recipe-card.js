/**
 * Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!
 *
 *   Declare a variable that holds an empty object literal (your meal recipe).
 *   Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
 *   Log each property out separately, using a loop (for, while or do/while)
 *
 * Expected result:
 *
 *   Meal name: Omelette
 *   Serves: 2
 *   Ingredients: 4 eggs, 2 strips of bacon, 1 tsp salt/pepper
 */

/**
 * Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!
 *
 *   Declare a variable that holds an empty object literal (your meal recipe).
 *   Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
 *   Log each property out separately, using a loop (for, while or do/while)
 *
 * Expected result:
 *
 *   Meal name: Omelette
 *   Serves: 2
 *   Ingredients: 4 eggs, 2 strips of bacon, 1 tsp salt/pepper
 */

const mealRecipe = {
  title: 'Shakshuka',
  servings: 2,
  ingredients: [
    '4 eggs ',
    ' 4 tomato ',
    ' 1 tsp salt/pepper ',
    ' 1 green pepper',
  ],
};

for (const item in mealRecipe) {
  if (item === 'title') {
    console.log(`Meal name:  ${mealRecipe[item]}`);
  } else if (item === 'servings') {
    console.log(`Serves: ${mealRecipe[item]}`);
  } else {
    const ingredientList = mealRecipe[item];
    console.log(`Ingredients: ${ingredientList.join(' ')}`);
  }
}
