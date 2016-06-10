var renderer = PIXI.autoDetectRenderer(1000, 600,{backgroundColor : 0x000000,antialiasing: false, transparent: false, resolution: 1});
document.body.appendChild(renderer.view);
document.getElementById("pixi-div").appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

// create a texture from an image path
var texture1 = PIXI.Texture.fromImage('images/frame.png');
// var texture2 = PIXI.Texture.fromImage('images/slot3.png');
var texture4 = PIXI.Texture.fromImage('images/button.png');

// create a new Sprite using the texture
var imgSlot1 = "images/slot3.png";
// var imgSlot2 = new PIXI.Sprite(texture2);
// var imgSlot3 = new PIXI.Sprite(texture2);
var IMG_BODY= new PIXI.Sprite(texture1);
var img_button = new PIXI.Sprite(texture4);


    var STATE_ZERO = 0;
    var STATE_INIT=1;
    var STATE_MOVING=2;
    var STATE_CHECK_WIN=3;
        
    var SLOT_NUMBER = 5;
    var INITIAL_X = 250;
    var TILE_HEIGHT = 100    ;
    var TILE_WIDTH = 100;
    var N_CYCLE = 5;
    var TOT_TILES= 7;


      var result = [];
    var gameStatus=0;
    var finalTileY1=[];
    var finalTileY2=[];
    var finalTileY3=[];
    var slotSprite1=[];
    var slotSprite2=[];
    var slotSprite3=[];
    var preChoosedPosition1 = [];
    var preChoosedPosition2 = [];
    var preChoosedPosition3 = [];



	  bodySprite = IMG_BODY;
  	  bodySprite.x=208;
      bodySprite.y=93;
      bodySprite.width=610;
      bodySprite.height=378;
      stage.addChild(bodySprite);



      buttonSprite = img_button;
      buttonSprite.x=900;
      buttonSprite.y=50;
      stage.addChild(buttonSprite);
      buttonSprite.interactive=true;  

    buttonSprite.click = function (e) {
        startAnimation();

    }


    buttonSprite.touchstart = function (e) {
        startAnimation();

    }
      

      texture1=PIXI.utils.uid[imgSlot1];
      preChoosedPosition1 = [0,2,4,6,1];



         for(var i=0; i<SLOT_NUMBER; i++) {
        slotSprite1[i] = new PIXI.extras.TilingSprite(texture1, TILE_WIDTH, TILE_HEIGHT);
        slotSprite1[i].tilePosition.x = 0;
        slotSprite1[i].tilePosition.y = (-preChoosedPosition1[i]*TILE_HEIGHT);
        slotSprite1[i].x= INITIAL_X +(i*105 );
        slotSprite1[i].y= 130;
        stage.addChild( slotSprite1[i] );
      }












// start animating
animate();
function animate() {
    requestAnimationFrame(animate);

    

    // render the container
    renderer.render(stage);
}
