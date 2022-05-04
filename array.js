const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

const add = [];

const arraydata = function(item){
  console.log(item);
}

// for Each
const newArray = array.forEach((item) => {
  const usernames = item.username;
    add.push(usernames + "!")
});

console.log(add);

// map

const mapArray = array.map((item) => {
  const usernames = item.username;
  return usernames + "?";
});

console.log(mapArray);

// filter

const filterArray = array.filter((item) => {
  const teams = item.team;
  return teams === "red";

});
console.log(filterArray);

// reduce

const reduceArray = array.reduce((accumulator, item) => {
  const scores = item.score;
  return accumulator + scores;
}, 0);

console.log(reduceArray);

// 
const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num, i) => {
  alert(num);
  return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const mapArray2 = array.map((item) => {
  const items = item.items;
  return items + "!";
});
console.log(mapArray2);
