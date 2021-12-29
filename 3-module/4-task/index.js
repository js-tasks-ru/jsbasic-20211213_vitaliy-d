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
