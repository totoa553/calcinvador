/*PIXI関連*/
const app = new PIXI.Application({width:500,height:300,backgroundAlpha:0});
document.body.appendChild( app.view );
var calci = 0;
PIXI.Loader.shared
  .add("textures","img/spritesheet.json")
  .load(setup);

let array = ["l0","l0","l0","l0","l0","l0","l0","l0"];
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

function sleep(msec) {
   return new Promise(function(resolve) {
       setTimeout(function() {resolve()}, msec);
   })
}

/*ゲーム関連*/
if(localStorage.getItem('highscore') === null){
    localStorage.setItem('highscore', '0');
}

window.addEventListener("keydown", Space,{once: true});
async function Space(event){
  await sleep(3000);
  var keyCode = event.keyCode;
  if (keyCode == 32) {
    game();
  }
}

async function game(){
  
  //ここからハイスコア表示部分  
  highscore=Array.from(
    localStorage.getItem('highscore')
  );
  array = ["l0","l0","0","0","0","0","0","0"];
  for(i=0; i<=highscore.length -1; i++){
    array.pop();
  }
  array = array.concat(highscore);
  remove();
  setup();
  await sleep(3000);//ここからゲームの始めのやつ 
    array = ["l0","l0","l0","l0","l0","l0","l0","l0"];
    nenemies = 16;
    senemies = ""+nenemies;
    aenemies = Array.from(senemies);
    aenemies = aenemies.join(',');
    nbullets = 30;
    sbullets = ""+nbullets;
    abullets = Array.from(sbullets);
    abullets = abullets.join(',');
    var str = aenemies+",l1,"+abullets;
    ary = str.split(',');
    for(i=0; i<=ary.length -1; i++){
      array.pop();
    }
    array = array.concat(ary);
    remove();
    setup();
  await sleep(2000); //ここからゲーム部分
    remove();
    let wait1 = 1500;
    let wait2 = 600;
    let mylife = 3;//自分の残基
    let stage = 9;//1~9
    let world = 1;//これは1か2か
    function Lifeimage(){
      if(mylife === 3){
        lifeimage = "l3";
      }else if(mylife === 2){
        lifeimage = "l2";
      }else if(mylife === 1){
        lifeimage = "l1";
      }
    }
    Lifeimage();
    stageobj5 = "l0";
    stageobj4 = "l0";
    stageobj3 = "l0";
    stageobj2 = "l0";
    stageobj1 = "l0";
    stageobj0 = "l0";
    for(var stagecount=0;stagecount<=stage; stage++){
      var time = wait1-(wait1-wait2)/stage*stagecount;
      inum=0;
      battlesum = 0;
      stageenemie = [];
      for(var i=0; i <= nenemies -1; i++){
      stageenemie.push(Math.floor(Math.random() * 10))
      }
      while(battlesum <= nenemies){    
        stageenemies = []; 
    stageenemies.push(stageenemie[inum],stageenemie[inum-1],stageenemie[inum-2],stageenemie[inum-3],stageenemie[inum-4],stageenemie[inum-5]);
        console.log(stageenemies);
        stageobj5 = stageenemies[0];
        stageobj4 = stageenemies[1];
        stageobj3 = stageenemies[2];
        stageobj2 = stageenemies[3];
        stageobj1 = stageenemies[4];
        stageobj0 = stageenemies[5];
        inum++;
        battlesum++;
        array = [calci,
               lifeimage,
               stageobj0,
               stageobj1,
               stageobj2,
               stageobj3,
               stageobj4,
               stageobj5];
        remove();
        setup();
        await sleep(time);
      }
    }
      array = ["l0",
               lifeimage,
               stageobj0,
               stageobj1,
               stageobj2,
               stageobj3,
               stageobj4,
               stageobj5];
    setup();
}


var i = 0;

window.addEventListener("keydown", Keyput);
async function Keyput(event){
  var keyCode = event.keyCode;
  if (keyCode == 39) {
    i=i+1;
    calci = i;
    if(i === 10){
      calci = "n";
    }else if(i===11){
      i=0;
      calci = 0;
    }
    array = [calci,
               lifeimage,
               stageobj0,
               stageobj1,
               stageobj2,
               stageobj3,
               stageobj4,
               stageobj5];
    remove();
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
