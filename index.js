// Write code here
//Even or Odd problem

function checkEvenOdd(num){
    if (num % 2 === 0){
        return "even";
    }else{
        return "odd";
    }
}
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(4));



//Grade Calculator problem
function getGrade(score){
    if(score >=90 && score<=100){
        return "A";
    }else if (score >=80 && score<=89){
        return "B";
    }else if (score >=70 && score<=79){
        return "C";
    }else if (score >=60 && score<=69){
        return "D";
    }else{
        return "F";
    }
}

console.log(getGrade(85));



//Login System problem
 //create an object
const user = {
  username: "salman",
  password: "12345"
};

//create a function
function login(inputUser, inputPass){
    if (inputUser === user.username && inputPass === user.password){
        console.log("Login Successful!");
    }else if(inputUser !== user.username){
        console.log("Username not found!");
    }else if(inputPass !== user.password){
        console.log("Incorrect password!");
    }
}
login("salman", "12345"); // Output: Login successful!




//Discount Calculator problem
function calculateDiscount(price, isMember){
    let Discount = 0;

    if(isMember){
        Discount = 0.2;
    }else if(price > 500){
        Discount = 0.05;
    }else{
        Discount = 0;
    }

    let finalPrice = price - (price * Discount);
    console.log("Final price : " + finalPrice);
}
calculateDiscount(600, false); // Output: Final price: 570
calculateDiscount(300, true);  // Output: Final price: 240




//Employee Bonus Calculator problem
 //create a function
function calculateBonus(employee){
    //create an object 
    let bonus = 0;
    if (employee.isManager){
        bonus = employee.salary *0.2;
    }else if (employee.experience >= 5){
        bonus = employee.salary *0.1;
    }else if (employee.experience >= 2){
        bonus = employee.salary *0.5;
    } else {
        bonus = 0;
    }
    const totalSalary = employee.salary + bonus;
    return {
        name : "salman",
        totalselary: totalSalary,
        bonus : bonus
        
    };

}
const employee = {
  name: "Salman",
  salary: 5000,
  experience: 6,
  isManager: true
};

console.log(calculateBonus(employee));

//shopping cart summary
const cart = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 100 }
];
function getCartSummary(cart, isMember){
    let totalPrice = 0;
    let Discount = 0;
    for(let item of cart){
        totalPrice += item.price;
    }
    if(isMember){

        Discount = totalPrice * 0.15;
    }else if(totalPrice > 1000){
        Discount = totalPrice * 0.05;

    }
    let message = " ";
    let finalAmount = totalPrice -Discount;
    if(finalAmount>700){
       message = "Free delivary!";
    }else{
        message =  "Delivary charge: $50";
        finalAmount+=50;
    }
    return{
        totalbeforediscount:totalPrice,
        discountAfter:Discount,
        finalAmount:finalAmount,
        message:message

    };

}
 console.log(getCartSummary(cart, true));