// Breytur fyrir texta og count
let para = document.querySelector('p');
let count = 0;

// Setur upp canvas
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// Setur hæð og vídd canvasins
let width = canvas.width = 1700;
let height = canvas.height = 1000;

// Random number generator
function random(min,max) {
  let num = Math.floor(Math.random()*(max-min)) + min;
  if (num === 0){
    return num+1;
  }
  else{
    return num;
  }
}

// Constructor til að búa til form
function Shape(x, y, velX, velY, exists) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists;
}

// Ball constructor sem erfir frá Shape
function Ball(x, y, velX, velY, exists, color, size) {
  Shape.call(this, x, y, velX, velY, exists);

  this.color = color;
  this.size = size;
}

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

// Fall til að teikna boltan
Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

// Update function sér um hraða og checkBounds
Ball.prototype.update = function() {
  if((this.x + this.size) >= width) {
    // Boltar sem fara út af skjánum eru óteiknaðir
    this.exists = false;
  }

  if((this.x - this.size) <= 0) {
    // Boltar sem fara út af skjánum eru óteiknaðir
    this.exists = false;
  }

  // Setur hraða
  this.x += this.velX;
};

// Collision detection á boltum
Ball.prototype.collisionDetect = function() {
  for(let j = 0; j < balls.length; j++) {
    if(!(this === balls[j])) {
      let dx = this.x - balls[j].x;
      let dy = this.y - balls[j].y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size && balls[j].exists) {
        //Ef einn bolti er stærri en hinn boltinn "borðar" stærri boltinn litla boltan
        if(balls[j].size <= this.size){
          balls[j].exists = false;
          this.size += balls[j].size/3;
        }
        else{
        //Ef einn bolti er stærri en hinn boltinn "borðar" stærri boltinn litla boltan
          this.size = false;
          balls[j].size += this.size/3;
        }
      }
    }
  }
};

// Player constructor sem erfir frá Shape
function Player(x, y, exists) {
  Shape.call(this, x, y, 20, 20, exists);

  this.color = 'white';
  this.size = 10;
}

Player.prototype = Object.create(Shape.prototype);
Player.prototype.constructor = Player;


// Fall til að teikna player
Player.prototype.draw = function() {
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 3;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.stroke();
};


// Gáir hvort er verið að ýta á takka
document.onkeydown = function(event){
  if(event.keyCode === 68)
    player.pressingRight = true;
  else if(event.keyCode === 83)
    player.pressingDown = true;
  else if(event.keyCode === 65)
    player.pressingLeft = true;
  else if(event.keyCode === 87)
    player.pressingUp = true;
}
// Stillir takka aftur á false þegar það er sleppt þeim
document.onkeyup = function(event){
  if(event.keyCode === 68)
    player.pressingRight = false;
  else if(event.keyCode === 83)
    player.pressingDown = false;
  else if(event.keyCode === 65)
    player.pressingLeft = false;
  else if(event.keyCode === 87)
    player.pressingUp = false;
}

//Uppfærir svo position ef það er verið að ýta á takka
updatePlayerPosition = function(){
  if(player.pressingRight)
    player.x += 2;
  if(player.pressingLeft)
    player.x -= 2;
  if(player.pressingDown)
    player.y += 2;
  if(player.pressingUp)
    player.y -= 2;
}

// Boundary check fyrir player
Player.prototype.checkBounds = function() {
  if((this.x + this.size) >= width) {
    player.x -= 2;
  }
  if((this.x - this.size) <= 0) {
    player.x += 2;
  }
  if((this.y + this.size) >= height) {
    player.y -= 2;
  }
  if((this.y - this.size) <= 0) {
    player.y += 2;
  }
};

// Player collision detection
Player.prototype.collisionDetect = function() {
  for(let j = 0; j < balls.length; j++) {
    if( balls[j].exists ) {
      let dx = this.x - balls[j].x;
      let dy = this.y - balls[j].y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        // Ef boltinn er minni en spilandinn "borðar" hann boltan og stækkar
        if (balls[j].size <= player.size){
          balls[j].exists = false;
          count++;
          player.size += balls[j].size/3;
        }
        else{
          alert("Game over.");
          document.location.reload();
        }
      }
    }
  }
};

// Þegar það er ýtt á músina snúast allir boltarnir við
document.onclick = function(mouse){
  for(let i = 0; i < balls.length; i++) {
    if (balls[i].velX < 0){
      balls[i].velX = random(1,2);
    }
    
    else{
      balls[i].velX = random(-2,-1);
    }
  }
}

// Listi fyrir boltana
let balls = [];

// Býr til fyrstu 10 boltana og setur þá í listann
for(let i = 0; i < 11; i++) {
  let size = random(3,45);
  let ball = new Ball(
  random(0 + size,width - size),
  // Passar að fyrstu boltarnir geta ekki verið í sömu hæð og hvíti hringurinn
  // Boltar sem koma seinna geta komið í sömu hæð og hvíti hringurinn
  random(0 + size,900),
  random(-2,2),
  random(-2,2),
  true,
  'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
  size
  );
  balls.push(ball);
}

function newBall(){
  for(let i = 0; i < balls.length; i++) {
    if(balls[i].exists === false){
      // Random stærð fyrir boltana
      let size = random(5,45);
      // Randomly velur hvort boltarnir koma vinsta eða hægra megin
      let leftOrRight = random(1,3);
      if (leftOrRight === 1) {
        Xcoordinates = (1+size);
        Xvelocity = random(1,2);
      }
      else{
        Xcoordinates = (1699-size);
        Xvelocity = random(-2,-1);
      }
      let ball = new Ball(
      Xcoordinates,
      random(0 + size,height - size),
      Xvelocity,
      random(-2,2),
      true,
      'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
      size
      );
      balls.push(ball);
    }
  }
}

// Býr til player objectið
let player = new Player(850, 1000, true);

// Game loopa sem gengur endalaust og uppfærir leikinn
function loop() {
  para.textContent = 'Ball count: ' + count + ' Goal: 50';
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);

  // Kallar á öll föllum fyrir boltana sem voru gerð fyrir ofan
  for(let i = 0; i < balls.length; i++) {
    if(balls[i].exists) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
    // Kíkir hvort það eru óteiknaðir boltar í listanum
    if(balls[i].exists === false) {
      // Ef það eru 10 boltar er ekki gerðir fleiri
      if(balls.length <= 10) {
        // Býr til nýjan bolta
        newBall();
      }
      // Fjarlægir svo óteiknuðu boltana úr listanum
      balls.splice(i,1);
    }
  }
  if(count === 50){
    alert("You win!");
    document.location.reload();
  }

  // Uppfærir player position
  updatePlayerPosition();
  player.draw();
  player.checkBounds();
  player.collisionDetect();

  requestAnimationFrame(loop);
}

loop();
