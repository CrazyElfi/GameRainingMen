document.addEventListener('keydown', moveByKey)
const step = 5;

class RenderEngine {
  constructor (elementId) {
    this.canvas = document.getElementById(elementId)
    this.context = this.canvas.getContext('2d')
    this.children = [];
    // this.interval = setInterval(() => this.update, 20); // why does not work?
    this.interval = setInterval(this.update.bind(this), 20);


  }
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  update() {
    this.clear();
    this.children.forEach(child => {
      child.newPos()
      this.crash(child)
      child.update()
    })
  }
  addChild(child) {
    child.ctx = this.context;
    this.children.push(child);
  }
  crash(child){
      const person = this.children[0];
      if(child !== person && collision(person, child)) {
        console.log('collision')
        this.removeChild(child.id)
        score.score++
        // remove child from scene
      }
  }
  removeChild(id) {
    // need to generate ID to child. Then try to find child by id adn remove it
    for(let i = 1; i < this.children.length; i++) {
      if(this.children[i].id === id) {
        this.children.splice(i, 1);
        break;
      }
    }
  }

}

class Game {
  constructor () {
    this.state = 'start';
    this.score = 0;
  }
  addEngine(engine) {
    this.engine = engine;
  }
  changeState() {};
}

class Component {
  constructor(width, height, color, x, y){
    this.id = generateUniqueId()
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.speedX = 0;
    this.speedY = 0;
    this.color = color
    this.ctx = null;
  }
  update() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

class ComponentText {
  constructor(font, color, x, y){
    this.x = x
    this.y = y
    this.font = font
    this.color = color
    this.ctx = null
    this.score = 0
  }
  update() {
    this.ctx.fillStyle = this.color;
    this.ctx.font = this.font
    this.ctx.fillText(`Score: ${String(this.score)}`, this.x, this.y);
  }
  newPos() {
  }
}

const engine = new RenderEngine('game')
const game = new Game();
game.addEngine(engine)

const  person = new Component(80,40, 'red', engine.canvas.width/2,engine.canvas.height-40)
const blueElem1 = new Component(40,40, 'blue', engine.canvas.width/2,0)
const score = new ComponentText('20px Arial','#000',800, 20)

game.engine.addChild(person)
game.engine.addChild(blueElem1)
game.engine.addChild(score)
blueElem1.speedY = 5



function collision (obj1, obj2) {
  let topLeft = obj1.x;
  let topRight = obj1.x + obj1.width;
  let bottomLeft = obj1.y;
  let bottomRight = obj1.y +obj1.height;

  let othTopLeft = obj2.x;
  let othTopRight = obj2.x + (obj2.width);
  let othBottomLeft = obj2.y;
  let othBottomRight = obj2.y + (obj2.height);

  let crash = true;
  if ((bottomRight < othBottomLeft)
    || (bottomLeft > othBottomRight)
    || (topRight < othTopLeft)
    || (topLeft > othTopRight)) {
    crash = false;
  }

  return crash;
}

function moveByKey (event){
  switch (event.keyCode) {
    case 37: {
      person.x = person.x - step;
      break;
    }
    case 39: {
      person.x = person.x + step;
      break;
    }
    default: {
      console.error('wtf dude?')
    }
  }
}

function generateUniqueId () {
  let min = 1
  let max = 100
  let newId = (Math.random() * (max - min) + min).toFixed(0)

  return newId
}
