// let promise = new promise((resolve,reject) =>{
//     let success = true;
//     if (success)
//         resolve("data loaded");
//     else
//         reject("error occurred");
// });

// promise.then(result => console.log(result)).catch(error => console.log(error));



// async function getdata(){
//     let response = await
//     fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     console.log(data);
// }
// getdata();



// fetch API
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))



// error handling

// try{
//     var x = y+ 10;  //...... this will give error because y is not defined
// }

// catch(error){
//     console.log(error.message);
// }


// local storage ----> local storage allow data to be stored in the browser permanently

localStorage.setitem("name","jeet");


// to retieve the item
var name1 = localStorage.getitem("name");
console.log(name1);


// to remove the item
localStorage.removeitem("name1");


// to convert into string from object
var user ={ name: "jeet" ,  age:50};
localStorage.setitem("user" , JSON.stringify(user));


//  to convert string to object
var data = JSON.parse(localStorage.getitem("user"));
console.log((data.name , data.age))