
function getUserInfo(Username, email) {
Username = Username,
email = email;
return `Users Info is the following: username:${Username} , Email:${email}`;
}

let person = {Username:"Levon" , email:"Levon.hill@zekelman.com"};
let Userdata = {Username:'signon', email:'userEmail'};

console.log(Userdata);
console.log(person);
console.log(getUserInfo("Jerry Baum" , "Jerry.Baum@zekelman.com"));


let arr = ["1", "2", "3", "4"];

let [fruits, banna, ...rest] = arr;
console.table(arr);
console.table(person);



// revisted 

function getUserInfo(user) {
  const { Username, email } = user;
  return `User's Info is the following: Username: ${Username}, Email: ${email}`;
}

let person_ = { Username: "Levon", email: "Levon.hill@zekelman.com" };
let Userdata_ = { Username: 'signon', email: 'userEmail' };

console.log(getUserInfo(person));
console.log(getUserInfo({ Username: "Jerry Baum", email: "Jerry.Baum@zekelman.com" }));
