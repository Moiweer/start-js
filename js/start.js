// 1 Change code below this line
// const productName = "Droid";
// const pricePerItem = 2000;
// console.log(productName);
// 'Droid'

// console.log(pricePerItem);
// 2000

// 2
// let productName = "Droid";
// let pricePerItem = 2000;

// Change code below this line
// productName = "Repair droid";
// pricePerItem = 2000 + 1500;

// 3
// Change code below this line
// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;
// 4

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;

// 5
// const productName = "Droid";
// const pricePerItem = 3500;

// Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;






// 6

// Change code below this line
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = (pricePerDroid * orderedQuantity + deliveryFee);
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;


// 7

// Change code below this line
// function sayHi(){
//  console.log("Hello, this is my first function!")
// }
// sayHi();

// 8
// Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);


// 9

// function add(a, b, c) {
//   // Change code below this line

// return a + b + c;

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));
// 10

// function makeMessage(name, price) {
//     let message = (`You picked ${name}, price per item is ${price} credits`);

//     return message;
    
// }
// console.log (makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));



// const base = 2;
// const power = 5;
// const result = Math.pow(base, power);
// console.log(result);
// const y = 6;
// const x = 4;
// console.log(x + y);
// const x = 50;
// const y = 30;
// const summa = x + y
// console.log(summa);
// const a = 6;
// const b = 10;
// const pacificOcean;
// console.log(pacificOcean = a);
// let username;
// console.log(username);
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);


// function makeMessage(name, price) {
//     let message = (`You picked ${name}, price per item is ${price} credits`);

//     return message;
    
// }
// console.log (makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//     const totalPrice = (pricePerDroid * orderedQuantity);
    
//   Change code above this line
//  if (totalPrice <= customerCredits){ 
//      message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//      return message;
//   } else {
//     message = 'Insufficient funds!';
//   }
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));





// let cost;
// const subscription = "premium";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log(`Invalid subscription type - ${subscription}`);
// }

// console.log(cost); // 500





// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if (ordered === 0){ 
//      message = "There are no products in the order!";
//      return message;
//   } else if(ordered > available){
//     message = 'Your order is too large, there are not enough items in stock!';
//   }
//   else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));




// function isNumberInRange(start, end, number) {
//   const isInRange = number >=start && number <=end; // Change this line

//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));




// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType==="pro" || subType==="vip"; // Change this line

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));


// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }
// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));



// 25

// function checkStorage(available, ordered) {
// let message;
// message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// 26

// 28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

// switch (password){
//   case password = null: 
//   message = "Canceled by user!";
//   break;
//    case password = ADMIN_PASSWORD: 
//   message = "Welcome!";
//   break;
//   default:
//   message = "Access denied, wrong password!";

// }
//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));


// 29
// function getShippingCost(country) {
//   let message;
//   let price;
//   // Change code below this line
// switch (country) {
//   case ("China"):
//   price = 100;
//    message = `Shipping to ${country} will cost ${price} credits`;
//   break;
//   case ("Chile"):
//   price = 250;
//   message = `Shipping to ${country} will cost ${price} credits`;
//   break;
//   case ("Australia"):
//   price = 170;
//   message = `Shipping to ${country} will cost ${price} credits`;
//   break;
//   case ("Jamaica"):
//   price = 120;
//   message = `Shipping to ${country} will cost ${price} credits`;
//   break;
//   default: 
//   message = "Sorry, there is no delivery to your country";
 
// }
//   return message;
// }
// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));



// 30
// function getNameLength(name) {
  
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));

// 31
// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];
// const lastElement = courseTopic[courseTopic.length-1];


// console.log(courseTopic.length);
// console.log("JavaScript essentials"[0]);
// console.log("JavaScript essentials"[20]);

// 32
// function getSubstring(string, length) {
// let substring = (0, getSubstring.length);

// return substring = string.slice(0, length);
// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));

// 33

// function formatMessage(message, maxLength) {
//   let result;
 
//     result = message.length <= maxLength ? message : message.slice(0, maxLength) + "...";

//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));

// // 34

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }



// 35

// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }

// 36
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
// result = message.toLowerCase("sale").includes("sale") || message.toLowerCase("spam").includes("spam");
//   // Change code above this line
//   return result;
// }
// console.log(checkForSpam("Latest technology news"));

