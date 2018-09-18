### Verkefni 3 
#### 1. Prototype gengur út á að gera ekki mikið af svipuðum objects heldur að endurnota frekar objects sem eru nú þegar til og bæta ofan á þá eða breyta þeim með því að erfa values og methods frá parent objecti. 
#### 2.
#### 3. a
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
#### b
#### c
```javascript
SpaceShipMaker.prototype.fly = function(){
	return this.speed += 1;
};
```
#### d
```javascript
SpaceShipMaker.prototype.setLife = function(){
	return this.life += 1;
};
```
