# FOR-JavaScript
## Verkefni 1
#### 1. Null er value sem er jafnt og ekkert en undefined er þegar það er ekkert value. null refers to the "value of nothing", while undefined refers to the "absence of value".

#### 2. Instead, in JavaScript it’s better to use strict equality to see if numbers, strings, or booleans, etc. are identical in type and value without doing the type conversion first

#### 3. let leyfir þér að declare variable sem er limited in scope to the block, statement, eða expression sem það er notað í. en var defines a variable globally, or locally to an entire function regardless of block scope

#### 4.
```javascript
const funcName = function() {
  return "Return value";
};
```
```javascript
let funcName = function() {
  return "Return value";
};
```
```javascript
const funcName = () => {  return "Return value" };
```
#### 5. Kóðinn gerir alert window í browserinum sem segir 'Hello World'

#### 6. Kóðinn skilar 8 vegna þess að hann leitar að innstu breytuni.
```javascript
function foo(){
function bar() {
return 3;
}
return bar();
function bar() {
return 8;
}
}
alert(foo()); 
```
#### 7. The for loop explicitly forces you to define the start point, stop point, and each step of the loop.

#### 8. 
```javascript
test.forEach(function(number, index){
    if(number % 3 === 0) {
        test[index] = number += 100; 
    }
});
```
#### 9. Með .map() getuð þú tekið array, perform some operation on each element of the array, og return-að nýju array
```javascript
var totals = bills.map(function(bill) {
    bill += bill * 0.15;
    bill = bill.toFixed( 2 );
    return Number(bill);
});

console.log(totals);
```
#### 10. 
```javascript
for (var x = 0; x < numbers.length; x++) {
    for (var y = 0; y < numbers[x].length; y++) {
        if (numbers[x][y] % 2 === 0){
            numbers[x][y] = "even";
        }
        else {
            numbers[x][y] = "odd"
        }
    }
}
```
