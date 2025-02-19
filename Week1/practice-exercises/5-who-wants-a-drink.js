/**
 * You're at a party and you feel thirsty! However, you've got 5 friends who are also in need of a drink. Let's go get them a drink.
 *
 * Declare a variable that holds an empty array, called drinkTray.
 * Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable. The drinkTray can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.
 *
 * Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")
 */

// There are 3 different types of drinks:
const drinkTypes = ['cola', 'lemonade', 'water'];

// This is one way of doing it, there are many more. It hopefully showcases a nice use case of the double for loop
// It could also have been written with a while loop that would be a little more efficient

const drinkTray = [];

const pushElement = () => {
  const randomElement =
    drinkTypes[Math.floor(Math.random() * drinkTypes.length)];
  const count = drinkTray.filter((a) => a === randomElement).length;
  if (count === 2) {
    pushElement();
  } else {
    drinkTray.push(randomElement);
  }
};
for (let i = 0; i <= 4; i++) {
  pushElement();
}

console.log(drinkTray);
