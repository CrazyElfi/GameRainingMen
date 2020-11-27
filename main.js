// // const canvas = document.getElementById('game');
// // const ctx = canvas.getContext('2d');
// //
// //
// // // const person = new Image();
// // // person.src = 'images/hero32.png';
// //
// // let hero;
// // hero = new component()
// //
// // const ground = new Image();
// // ground.src = 'images/grass2.png';
// //
// // let score = 0;
// //
// // function drawScene () {
// //
// //   ctx.drawImage(person, 0, 0);
// //   ctx.drawImage(ground, 0, 300);
// //
// //   ctx.fillStyle = '#000';
// //   ctx.font = '20px';
// //   ctx.fillText(`Score: ${score}`,10,500);
// // }
// // drawScene ();
//
// let myGamePiece
// let direction;
// // document.addEventListener('onload', startGame)
//
// document.addEventListener('keydown', move)
//
// function startGame () {
//   myGameArea.start()
//   myGamePiece = new component(30, 30, 'blue', 500, 600)
//   this.interval = setInterval(updateGameArea, 20);
// }
//
// function updateGameArea() {
//   myGameArea.clear();
//   myGamePiece.update();
// }
//
//
// const step = 5;
//
// let personCoord = []
// personCoord[0] = {
//   x: step,
// }
//
// let myGameArea = {
//   canvas: document.getElementById('game'),
//   start: function () {
//     this.context = this.canvas.getContext('2d')
//   },
//   clear : function() {
//     this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//   }
// }
// class Component {
//   constructor(width, height, color, x, y){
//     this.width = width
//     this.height = height
//     this.x = x
//     this.y = y
//     this.color = color
//
//   }
//   update() {
//     ctx = myGameArea.context;
//     ctx.fillStyle = color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }
// }
// class game {
//
//   constructor (elementId) {
//     this.state = 'start';
//     this.score = 0;
//     this.context = document.getElementById(elementId).getContext('2d')
//   }
//   changeState() {};
// }
//
// const person = new Component(100, 100, 'back', 30, 500)
// const person2 = new Component(100, 100, 'yellow', 30, 500)
//
// console.log(person.width)
// console.log(person2.update())
//
// function component (width, height, color, x, y) {
//   this.width = width
//   this.height = height
//   this.x = x
//   this.y = y
//   // ctx = myGameArea.context
//   // ctx.fillStyle = color
//   // ctx.fillRect(this.x, this.y, this.width, this.height)
//   this.update = function(){
//     ctx = myGameArea.context;
//     ctx.fillStyle = color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }
// }
//
// startGame()
//
//
// function setDirection (event) {
//   switch (event.keyCode) {
//     case 37: {
//       direction = 'left'
//       break;
//     }
//     case 39: {
//       direction = 'right'
//       break;
//     }
//     default: {
//       console.error('wtf dude?')
//     }
//   }
//   console.log('едем в:', direction)
// }
//
// function move (event){
//   switch (event.keyCode) {
//     case 37: {
//       myGamePiece.x = myGamePiece.x - step;
//       console.log(myGamePiece)
//       break;
//     }
//     case 39: {
//
//       break;
//     }
//     default: {
//       console.error('wtf dude?')
//     }
//   }
// }
//
// function drawPerson () {
//   let personX = personCoord[0].x;
//
//   if (dir === 'left') personX -= step
//   if (dir === 'right') personX += step
//
//   console.log('personX', personX)
// }
//
//
// // let game = setInterval(drawPerson, 100);
