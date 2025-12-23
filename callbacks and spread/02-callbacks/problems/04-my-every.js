/*
Write a function called `myEvery` that behaves like the `Array.every`
method.
*/

const myEvery = (arr, cb) => {
  for (const el of arr) {
    if (!cb(el)) return false;
  }

  return true;
};

const friends = [
  {
    name: "Albert",
    yearsOfFriendship: 3,
  },
  {
    name: "Angela",
    yearsOfFriendship: 2,
  },
  {
    name: "Freddy",
    yearsOfFriendship: 8,
  },
  {
    name: "Agatha",
    yearsOfFriendship: 6,
  },
];

// TODO
const allFriendsStartWithA = myEvery(); // false

// TODO
const allFriendsUnder10Years = myEvery(); // true

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = {
    allFriendsStartWithA,
    allFriendsUnder10Years,
  };
} catch {}
