# FOR-JavaScript
## Verkefni 1
#### 1. null refers to the "value of nothing", while undefined refers to the "absence of value".

#### 2.Instead, in JavaScript it’s better to use strict equality to see if numbers, strings, or booleans, etc. are identical in type and value without doing the type conversion first

#### 3.

#### 4.
```javascript
const square = function() {
  return "Return value";
};
```
```javascript
let variable = function() {
  return "Return value";
};
```
```javascript
const square1 = () => {  return "Return value" };
```
#### 5. Kóðinn gerir alert glugga í browserinum sem segir 'Hello World'

#### 8. 
```javascript
test.forEach(function(number, index){
    if(number % 3 === 0) {
        test[index] = number += 100; 
    }
});
```
#### 9. you can take an array, perform some operation on each element of the array, and return a new array
```javascript
var totals = bills.map(function(bill) {
    bill += bill * 0.15;
    bill = bill.toFixed( 2 );
    return Number(bill);
});

console.log(totals);
```
