array = ["l0","l0","l0","l0","l0","l0","l0","l0"];
function sleep(msec) {
   return new Promise(function(resolve) {
       setTimeout(function() {resolve()}, msec);
   })
}

/*PIXI関連*/
const app = new PIXI.Application({width:500,height:300,backgroundAlpha:0});
document.body.appendChild( app.view );
var calci = 0;
PIXI.Loader.shared
  .add("textures","img/spritesheet.json")
  .load(setup);
function setup(){
  exSprite1 = PIXI.Sprite.from( array[0] + ".png" );
  exSprite1.anchor.set(-2,0);
  exSprite2 = PIXI.Sprite.from( array[1] + ".png" );
  exSprite2.anchor.set(-3,0);
  exSprite3 = PIXI.Sprite.from( array[2] + ".png" );
  exSprite3.anchor.set(-4,0); 
  exSprite4 = PIXI.Sprite.from( array[3] + ".png" );
  exSprite4.anchor.set(-5,0);
  exSprite5 = PIXI.Sprite.from( array[4] + ".png" );
  exSprite5.anchor.set(-6,0);
  exSprite6 = PIXI.Sprite.from( array[5] + ".png" );
  exSprite6.anchor.set(-7,0);
  exSprite7 = PIXI.Sprite.from( array[6] + ".png" );
  exSprite7.anchor.set(-8,0);
  exSprite8 = PIXI.Sprite.from( array[7] + ".png" );
  exSprite8.anchor.set(-9,0);
  app.stage.addChild(
    exSprite1,
    exSprite2,
    exSprite3,
    exSprite4,
    exSprite5,
    exSprite6,
    exSprite7,
    exSprite8
  );
}
function remove(){
  app.stage.removeChild(
    exSprite1,
    exSprite2,
    exSprite3,
    exSprite4,
    exSprite5,
    exSprite6,
    exSprite7,
    exSprite8
  );
}

/*ゲーム関連*/
if(localStorage.getItem('highscore') === null){
    localStorage.setItem('highscore', '0');
}

async function highscore(){
  highscore = Array.from(localStorage.getItem('highscore'));
  array = ["l0","l0","0","0","0","0","0","0"];
  for(i=0; i<=highscore.length -1; i++){
    array.pop();
  }
  array = array.concat(highscore);
  await sleep(3000);
  array = ["l0","l0","l0","l0","l0","l0","l0","l0"];
  let enemiesnum = "16";
  enemiesnum = Array.from(enemiesnum);
  enemiesnum = enemiesnum.join(',');
  let paternhit = "30";
  paternhit = Array.from(paternhit);
  paternhit = paternhit.join(',');
  var str = enemiesnum+",l1,"+paternhit;
  ary = str.split(',');
  for(i=0; i<=ary.length -1; i++){
    array.pop();
  }
  array = array.concat(ary);
  remove();
  setup();
}
highscore();

let wait1 = 1500;
let wait2 = 600;

window.addEventListener("keydown", Keyput);
var i = 0;
function Keyput(event){
  var keyCode = event.keyCode;
  if (keyCode == 39) {
    i=i+1;
    calci = i;
    app.stage.removeChild(exSprite1,exSprite2);
    if(i === 10){
      calci = "n";
      app.stage.removeChild(exSprite1,exSprite2);
    }else if(i===11){
      i=0;
      calci = 0;
      app.stage.removeChild(exSprite1,exSprite2);
    }
    setup();
  }
  if (keyCode == 37) {
    aim();
  }
}
function aim(){
  console.log("aim");
}
function random(){
  num = Math.floor(Math.random() * 9);
}
let mylife = 3;//自分の残基
let stage = 0;