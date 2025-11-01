# 🧠 JavaScript Practice Problems

### **1. Even or Odd**
Write a function `checkEvenOdd(num)` that prints `"Even"` if the number is even, otherwise prints `"Odd"`.

**Example:**
```js
checkEvenOdd(7); // Output: Odd
checkEvenOdd(4); // Output: Even
```

---


### **2. Grade Calculator**
Write a function `getGrade(score)` that returns a grade based on the score:
- 90–100 → "A"
- 80–89 → "B"
- 70–79 → "C"
- 60–69 → "D"
- Below 60 → "F"

**Example:**
```js
getGrade(85); // Output: B
```

---

### **3. Login System**
Create an object `user` like:
```js
const user = {
  username: "salman",
  password: "12345"
};
```
Write a function `login(inputUser, inputPass)` that checks:
- If both match → print `"Login successful!"`
- If username is wrong → print `"Username not found!"`
- If password is wrong → print `"Incorrect password!"`

**Example:**
```js
login("salman", "12345"); // Output: Login successful!
```

---

### **4. Discount Calculator**
Write a function `calculateDiscount(price, isMember)` that:
- Gives 20% discount if `isMember` is true.
- Gives 5% discount if `price` > 500 but not a member.
- No discount otherwise.

**Example:**
```js
calculateDiscount(600, false); // Output: Final price: 570
calculateDiscount(300, true);  // Output: Final price: 240
```

---

### **5. Employee Bonus Calculator**
Create a function `calculateBonus(employee)` that takes an employee object like this:
```js
const employee = {
  name: "Salman",
  salary: 5000,
  experience: 6,
  isManager: true
};
```
Rules:
- If `isManager` is true → bonus = 20% of salary  
- Else if `experience` ≥ 5 years → bonus = 10% of salary  
- Else if `experience` ≥ 2 years → bonus = 5% of salary  
- Otherwise → bonus = 0  

Return an **object** like:
```js
{
  name: "Salman",
  totalSalary: 6000,  // (salary + bonus)
  bonus: 1000
}
```

**Example:**
```js
calculateBonus(employee);
// Output:
// { name: 'Salman', totalSalary: 6000, bonus: 1000 }
```

---

### **6. Shopping Cart Summary**
Create a function `getCartSummary(cart, isMember)` where `cart` is an **array of product objects**:
```js
const cart = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 100 }
];
```

Rules:
1. Calculate the **total price** of all products.  
2. Apply discount:
   - Members → 15% off  
   - Non-members with total > 1000 → 5% off  
3. If after discount total > 700 → print `"Free delivery!"`  
   Otherwise → print `"Delivery charge: $50"`  
4. Return an **object summary**:
```js
{
  totalBeforeDiscount: ...,
  discountApplied: ...,
  finalAmount: ...,
  message: ...
}
```

**Example:**
```js
getCartSummary(cart, true);
/*
Output:
{
  totalBeforeDiscount: 950,
  discountApplied: 142.5,
  finalAmount: 807.5,
  message: "Free delivery!"
}
*/
```
