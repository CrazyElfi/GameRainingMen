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
      child.update()
    })
  }
  addChild(child) {
    child.ctx = this.context
    this.children.push(child);
  }
  removeChild() {
    // need to generate ID to child. Then try to find child by id adn remove it
  }
  collision() {

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

const engine = new RenderEngine('game')
const game = new Game();
game.addEngine(engine)

const redElem1 = new Component(40,40, 'red', 400,400)
const blueElem1 = new Component(40,40, 'blue', 200,0)
game.engine.addChild(redElem1)
game.engine.addChild(blueElem1)
blueElem1.speedY = 1

function moveByKey (event){
  switch (event.keyCode) {
    case 37: {
      redElem1.x = redElem1.x - step;
      break;
    }
    case 39: {
      redElem1.x = redElem1.x + step;
      break;
    }
    default: {
      console.error('wtf dude?')
    }
  }
}

