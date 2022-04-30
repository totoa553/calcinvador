const app = new PIXI.Application({width:400,height:300,transparent:true});
    document.body.appendChild( app.view );
    var texture = PIXI.Texture.from('img/spritesheet.png');
    var sprite1 = new PIXI.Sprite(texture);
    app.stage.addChild( sprite1 );