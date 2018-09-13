# FOR-JavaScript
## Verkefni 1
#### 1. Null er value sem er = ekkert. Undefined er þegar það er ekkert value. Oftast er þetta samt það sama.

#### 2. Javascript er "loosely typed language" sem þýðir að þú þarft ekki að specify data types. Javascript breytir values sjálfkrafa í viðeigandi data type t.d ```"Hello" + 10``` skilar ```"Hello10"``` því javascript breytir 10 í streng og bætir honum við Hello. Þegar 'use strict' er notað þá þarf að specify data types.

#### 3. let leyfir þér að declare-a breytu sem er "limited in scope to the block, statement, eða expression sem það er notað í". var define-ar breytu globally óháð block scope

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

#### 6. Kóðinn skilar 8 vegna þess að ```return bar()``` leitar að innsta fallinu sem heitir bar() og hættir svo eftir að hann finnur fallið.
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
#### 7. Í for loopu þarft þú að hafa start point, stop point og end point. Ef eitthvað af þessu vantar virkar loopan ekki. for-in iterates over the properties of an object. for-of iterates over the values in an iterable, like an array for example.
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
## Verkefni 2
#### 1.
```javascript
let eg = {
 nafn: "Sighvatur",
 heimasimi: 4209821,
 gsm: 8561234
};

console.log(eg.gsm);
```
#### 2.
```javascript
console.log(family.parents.fathers[1].name);
```

#### 3.
```javascript
let breakfast = {
 name: "The Lumberjack",
 price: 9.95,
 ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};
```
#### 4.
```javascript
printAccountSummary: function(){
 return "Welcome!\n"+"Your balance is currently $"+this.balance 
 +" and your interest rate is "+ this.interestRatePercent+"%."
}
```
#### 5.
```javascript
donuts.forEach(function(donut){
 console.log(donut.type+" donuts cost $"+donut.cost+" each")
});
```
#### 6.
```javascript
function PizzaMaker(price = 2000, size = "Medium", alegg=["skinka","pepperoni"]) {   
 this.price = price;
 this.size = size;
 this.alegg = alegg
}

pizza1 = new PizzaMaker(2260, "Large", ["pepperoni", "sveppir"]);
pizza2 = new PizzaMaker(2195, "Large", ["ostur", "oregano"]);
```
### Verkefni 3
#### 1.
#### 2.
#### 3.
##### a
```javascript
function SpaceShipMaker(name = "Neurotoxin", life = 10, speed = 10) {   
 this.name = name;
	this.life = life;
	this.speed = speed;
}

spaceShip1 = new SpaceShipMaker("Priestess");
spaceShip2 = new SpaceShipMaker("Tomahawk");
spaceShip3 = new SpaceShipMaker("Intrepid");
```
##### b
```javascript
SpaceShipMaker.prototype.fly = function(){
	return this.speed += 1;
};

SpaceShipMaker.prototype.setLife = function(){
	return this.life += 1;
};
```
