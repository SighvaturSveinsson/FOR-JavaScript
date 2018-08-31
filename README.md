# FOR-JavaScript
## Verkefni 1
#### 1. Null er value sem er = ekkert. Undefined er þegar það er ekkert value. Oftast er þetta samt það sama.

#### 2. Javascript er "loosely typed language" sem þýðir að þú þarft ekki að specify data types. Javascript breytir values sjálfkrafa í viðeigandi data type t.d ```"Hello" + 10``` skilar ```"Hello10"``` því javascript breytir 10 í streng og bætir honum við Hello. Þegar 'use strict' er notað þá þarf að specify data types.

#### 3. let leyfir þér að declare-a breytu sem er "limited in scope to the block, statement, eða expression sem það er notað í".var define-ar breytu globally óháð block scope

#### 4.
```javascript
 function funcName() {
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
#### 5. Kóðinn gerir alert window í browserinum sem segir 'Hello World'.

#### 6. Kóðinn skilar 8 vegna þess að ```return bar()``` leitar að innstu breytuni sem heitir bar() og hættir svo eftir að hann finnur breytuna.
```javascript
/*2*/function foo(){
  function bar() {
    return 3;
  }
  /*3*/return bar();
  function bar() {
    /*4*/return 8;
   }
}
/*1*/ alert(foo()); 
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
#### 9. Með .map() getuð þú tekið array, gert einhverja aðgerð á hvert element í arrayinu og return-að nýju array.
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
