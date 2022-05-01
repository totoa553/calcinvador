const app = new PIXI.Application({width:600,height:600,backgroundAlpha:0});
document.body.appendChild( app.view );
var calci = 0;
PIXI.Loader.shared
  .add("textures","img/spritesheet.json")
  .load(setup);
function setup(){
  const sprite = PIXI.Sprite.from( calci + ".png" );
  exSprite = sprite;
  app.stage.addChild( sprite );
}
window.addEventListener("keydown", Keyput);
var i = 0;
function Keyput(event){
  var keyCode = event.keyCode;
  if (keyCode == 39) {
    i=i+1;
    calci = i;
    app.stage.removeChild(exSprite);
    if(i === 10){
      calci = "n";
      app.stage.removeChild(exSprite);
    }else if(i===11){
      i=0;
      calci = 0;
      app.stage.removeChild(exSprite);
    }
    console.log(calci);
    setup();
  }
  if (keyCode == 37) {
    aim();
  }
}
function aim(){
  console.log("aim");
}