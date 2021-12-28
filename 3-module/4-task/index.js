function showSalary(users, age) {
  let result = "";
  let user = users
    .filter(item => item.age <= age)
    .map(item =>({
      name: item.name,
      balance: item.balance,
    }));
  for (let i = 0; i < user.length; i++) {
    user[i] === user[user.length - 1] ?
      result += `${user[i].name}, ${user[i].balance}` :
      result += `${user[i].name}, ${user[i].balance}\n`;
    }
  return result;
  }

let user1 = {
  "balance": "$1,793.65",
  "picture": "https://placehold.it/32x32",
  "age": 48,
  "name": "Piter Pen",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};
let user2 = {
  "balance": "$2,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 31,
  "name": "Silver Tom",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};
let user3 = {
  "balance": "$1,345.65",
  "picture": "https://placehold.it/32x32",
  "age": 25,
  "name": "Mark Brawn",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};
let user4 = {
  "balance": "$0,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 19,
  "name": "Alex Frank",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let users = [user1, user2, user3, user4];
let result = showSalary(users, 60);
console.log(result);

/*
function showSalary(users, age) {
  let result = "";
  let user = users
    .filter(item => item.age <= age)
    .map(item =>`${item.name}, ${item.balance}`);
console.log (user);
  for (let i = 0; i < user.length; i++) {
    user[i] === user[user.length - 1] ? result += user[i] : result += user[i] + "\n";
    }
  return result;
  }

let user1 = {
  "balance": "$1,793.65",
  "picture": "https://placehold.it/32x32",
  "age": 48,
  "name": "Piter Pen",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};
let user2 = {
  "balance": "$2,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 31,
  "name": "Silver Tom",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};
let user3 = {
  "balance": "$1,345.65",
  "picture": "https://placehold.it/32x32",
  "age": 25,
  "name": "Mark Brawn",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};
let user4 = {
  "balance": "$0,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 19,
  "name": "Alex Frank",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let users = [user1, user2, user3, user4];
let result = showSalary(users, 48);
console.log (result);

 */
