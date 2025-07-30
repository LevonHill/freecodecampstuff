let person_ = { Username: "Levon", email: "Levon.hill@zekelman.com" };
let Userdata_ = { Username: 'signon', email: 'userEmail' };
let arr = [{id: 1 , username : "Levon Hill"},
            {id: 2 , username : "Jerry Baum"},
            {id: 3 ,username : "Seth Brand"},
            {id: 4 ,username: "simmon kennedy"},
            {id: 6 , username: "Kevin Munson"},
            {id: 7 , username: "Joe Patrone"},
             {id: 8 , username: "zachary Horn"},
             {id: 9 , username: "preston Gibbs"},
             {id: 10 , username: "ronalda Brown"}
];

function listItems(arr) {
const listSize = arr.length;
return ` This is how big the list is... :${listSize}.`;
}


//let [fruits, banna, ...rest] = arr;



function getUser(userInfo, login) {
const {id = userInfo ,password = login} = userInfo;
return `Users Info is the following: username: ${userInfo} , Password: ${login}`;
}

console.table(arr.length);
console.log(arr);
console.log(getUser("Levon Hill" , "$$Boxcar2025!!"));
console.log(getUser("robert", "logmein2025!"));
console.log(listItems(arr));