### Verkefni 3 
#### 1. Prototype gengur út á að spara minni með því að gera ekki mikið af svipuðum objects heldur að endurnota frekar objects sem eru nú þegar til og bæta ofan á þá eða breyta þeim með því að erfa values og methods frá parent objecti. 
#### 2. a. Book.getIsbn lætur bara 1 object fá aðgang að fallinu getIsbn() <br> b. Book.prototype.getIsbn lætur alla objects sem eru byggðir með Book constructorinum fá aðgang að fallinu getIsbn().
#### 3. a
```javascript
function SpaceShipMaker(name = "Neurotoxin", life = 10, speed = 10) {   
 	this.name = name;
	this.life = life;
	this.speed = speed;
}
let spaceShip1 = new SpaceShipMaker("Priestess");
let spaceShip2 = new SpaceShipMaker("Tomahawk";
let spaceShip3 = new SpaceShipMaker("Intrepid");
```
#### b
```javascript
spaceShip1.speed = 12;
spaceShip2.speed = 9;
spaceShip3.speed = 13;
```
#### c
```javascript
SpaceShipMaker.prototype.fly = function(){
	return this.speed += 1;
};
```
#### d
```javascript
let geimskip1 = Object.create(spaceShip2);
let geimskip2 = Object.create(spaceShip2);
geimskip1.life = 10;
geimskip2.life = 10;
geimskip1.speed = 10;
geimskip2.speed = 10;

spaceShip2.setLife = function(){
	return this.life += 1;
};
```
#### 4.
```javascript
class SpaceShipMaker {
  constructor(name = "Neurotoxin", life = 10, speed = 10) {
    this.name = name;
    this.life = life;
    this.speed = speed;
  }
  get fly() {
    return this.speed += 1;
  }
}
  
let spaceShip1 = new SpaceShipMaker("Rhodes");
let spaceShip2 = new SpaceShipMaker("Poseidon");
let spaceShip3 = new SpaceShipMaker("Cyclopse");

spaceShip1.speed = 15;
spaceShip2.speed = 8;
spaceShip3.speed = 11;

 ```
