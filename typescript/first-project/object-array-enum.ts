// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement
// const input2 = document.getElementById("num2")! as HTMLInputElement

// function add(num1 : number, num2 : number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });


// function add (n1:number, n2:number, showResult:boolean, phrases:string){

//   const result = n1 + n2;
//   if (showResult) {
//     console.log(phrases + result); 
//   }
//   else{
//     return result;
//   }
// }

// const number1 = 5;
// const number2 = 3.2;
// const printresulet = true;
// const phrases = 'Result is ';

let hobbiesList:string[];

hobbiesList = ['sport','codding','free running'];

enum Role {ADMIN=2,USER,CUSTOMER}
// add(number1, number2, printresulet, phrases);
let person : {
  name:string;
  age: number;
  hobbies:string[],
  role:Role
}

 person  ={
  name: 'Noor Fahad',
  age: 23,
  hobbies:hobbiesList,
  role:Role.ADMIN
}

console.log(person);
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
}

if (person.role === 0) {
  console.log('its Admin');
}
else
{
  console.log(person.role);
  
}
