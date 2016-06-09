//constants
    var imgSlot = "slot4.png";
    var imgSlot2 = "slot4.png";
    var imgSlot3 = "slot4.png";

    var IMG_BODY= "frame.png";
    var img_button = "button.png";
        
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
        
    /*
    * 0: fermo
    * 1: moving
    * 2: check win
    */
   
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
    
    var stage = new PIXI.Stage(0x333333);
    var renderer = PIXI.autoDetectRenderer(1000,600,
      {antialiasing: false, transparent: false, resolution: 1}  
    );
    document.getElementById("pixi-div").appendChild(renderer.view);
    stage.interactive=true;
    
    //loading images
    var loader = new PIXI.AssetLoader(
        [imgSlot,img_button,IMG_BODY]
    );
    loader.onComplete = setup;
    loader.load();
    
    
var style = {
    font : 'bold italic 36px Arial',
    fill : '#F7EDCA',
    stroke : '#4a1850',
    strokeThickness : 5,
    dropShadow : true,
    dropShadowColor : '#000000',
    dropShadowAngle : Math.PI / 6,
    dropShadowDistance : 6,
    wordWrap : true,
    wordWrapWidth : 440
};

var richText = new PIXI.Text('Mitar vs Metal',style);
richText.x = 320;
richText.y = 10;
stage.addChild(richText);



        
    //setup
    function setup() {
      // console.log("setup()");
        
      var texture = PIXI.TextureCache[IMG_BODY];
      bodySprite = new PIXI.Sprite(texture);
      bodySprite.x=165;
      bodySprite.y=50;
      bodySprite.width=680;
      bodySprite.height=500;
      stage.addChild(bodySprite);


        
    texture = PIXI.TextureCache[img_button];
      buttonSprite = new PIXI.Sprite(texture);
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
      
      
    //tiles
      texture1=PIXI.TextureCache[imgSlot];
      preChoosedPosition1 = [0,2,4,6,1];

        for(var i=0; i<SLOT_NUMBER; i++) {
        slotSprite1[i] = new PIXI.TilingSprite(texture1, TILE_WIDTH, TILE_HEIGHT);
        slotSprite1[i].tilePosition.x = 0;
        slotSprite1[i].tilePosition.y = (-preChoosedPosition1[i]*TILE_HEIGHT);
        slotSprite1[i].x= INITIAL_X +(i*105 );
        slotSprite1[i].y= 130;
        stage.addChild( slotSprite1[i] );
      }

      texture2=PIXI.TextureCache[imgSlot2];
      preChoosedPosition2 = [2,0,6,3,4];


        for(var i=0; i<SLOT_NUMBER; i++) {
        slotSprite2[i] = new PIXI.TilingSprite(texture2, TILE_WIDTH, TILE_HEIGHT);
        slotSprite2[i].tilePosition.x = 0;
        slotSprite2[i].tilePosition.y = (-preChoosedPosition2[i]*TILE_HEIGHT);
        slotSprite2[i].x= INITIAL_X +(i*105);
        slotSprite2[i].y= 235;
        stage.addChild( slotSprite2[i] );
      }


      texture3=PIXI.TextureCache[imgSlot3];
      preChoosedPosition3 = [6,1,2,4,0];  


      for(var i=0; i<SLOT_NUMBER; i++) {
        slotSprite3[i] = new PIXI.TilingSprite(texture3, TILE_WIDTH, TILE_HEIGHT);
        slotSprite3[i].tilePosition.x = 0;
        slotSprite3[i].tilePosition.y = (-preChoosedPosition3[i]*TILE_HEIGHT);
        slotSprite3[i].x= INITIAL_X +(i*105);
        slotSprite3[i].y= 340;
        stage.addChild( slotSprite3[i] );
      }
      draw();
    }
    
    
    var INC = [ 25,35,50,70,100];
    
    //functions draw
    function draw() {
        
        if(gameStatus==STATE_ZERO) {
            gameStatus=STATE_INIT;
        } else 
      if(gameStatus==STATE_INIT) {
          
          gameStatus=STATE_CHECK_WIN;
          
      } else if(gameStatus==STATE_MOVING) {
        
         
        for(var i=0; i<SLOT_NUMBER; i++) {
            if( finalTileY1[i] > 0 ) {
                slotSprite1[i].tilePosition.y = slotSprite1[i].tilePosition.y + INC[i];
                finalTileY1[i]= finalTileY1[i] - INC[i];
                            }
             if( finalTileY2[i] > 0 ) {
                slotSprite2[i].tilePosition.y = slotSprite2[i].tilePosition.y + INC[i];
                finalTileY2[i]= finalTileY2[i] - INC[i];
                
            }
             if( finalTileY3[i] > 0 ) {
                slotSprite3[i].tilePosition.y = slotSprite3[i].tilePosition.y + INC[i];
                finalTileY3[i]= finalTileY3[i] - INC[i];
            }            
          }
        
        if( finalTileY1[0]-5 <= 0 ) {
            gameStatus=STATE_CHECK_WIN;
            
        }

         if( finalTileY2[0]-5 <= 0 ) {
            gameStatus=STATE_CHECK_WIN;
            
        }

         if( finalTileY3[0]-5 <= 0 ) {
            gameStatus=STATE_CHECK_WIN;
            
        }
        
          
      } else if(gameStatus==STATE_CHECK_WIN) {  
       
        return; //no more animation
      }

      renderer.render(stage);
      requestAnimationFrame(draw);
    }//draw

    function startAnimation() {
    var can0 = 0 ;
    var can1 = 0 ;
    var can2 = 0 ;
    var can3 = 0 ;
    var can4 = 0 ;
    var can5 = 0 ;
    var can6 = 0 ;
        if( gameStatus==STATE_INIT || gameStatus==STATE_CHECK_WIN ) {
            preChoosedPosition1 = getRandomPositions();
            preChoosedPosition2 = getRandomPositions();
            preChoosedPosition3 = getRandomPositions();
            for(var i=0; i<SLOT_NUMBER; i++) {
                preChoosedPosition1[i] = getRandomInt(0,6);
                preChoosedPosition2[i] = getRandomInt(0,6);
                preChoosedPosition3[i] = getRandomInt(0,6);

                slotSprite1[i].tilePosition.y = (-preChoosedPosition1[i]*TILE_HEIGHT);
                finalTileY1[i]= (N_CYCLE*TILE_HEIGHT*TOT_TILES);
                slotSprite2[i].tilePosition.y = (-preChoosedPosition2[i]*TILE_HEIGHT);
                finalTileY2[i]= (N_CYCLE*TILE_HEIGHT*TOT_TILES);
                slotSprite3[i].tilePosition.y = (-preChoosedPosition3[i]*TILE_HEIGHT);
                finalTileY3[i]= (N_CYCLE*TILE_HEIGHT*TOT_TILES);

            }
            gameStatus = STATE_MOVING;

                   if( preChoosedPosition3[i]!=preChoosedPosition3[i-1]) {
                var union = preChoosedPosition1.concat(preChoosedPosition2);
                 var store = union.concat(preChoosedPosition3);

                for(x=0; x<15; x++){

                       switch(store[x]) {
            case 0:
                can0++
                break;
            case 1:
                can1++
                break;
             case 2:
                can2++
                break;
            case 3:
                can3++
                break;
            case 4:
                can4++
                break;
            case 5:
                can5++
                break;
              case 6:
                can6++  
                break; 
        }
                    
                }
                result = [can0, can1, can2, can3, can4, can5, can6 ];
                result2 = [can0, can1, can2, can3, can4, can5, can6 ];
            }
            draw();

                setTimeout(
            function() {

                   if (sortThisBaby(result2)) {
                    switch (indexOfMax(result)) {
                        case 0:

                            alert("winner is 0");
                          

                            // if (candidate == "vucic") {
                            //     creditCharger();

                            // } else {
                            // audio = new Audio('assets/sounds/vucic/tisina.mp3');
                            // audio.volume = volume;
                            // audio.play();
                            //     $("li").addClass('loser-background');
                            //     $('#message').text('Izgubio si ' + invested + ' evra. Tišina tamo! Biće ti bolje 2046-ste.');
                            //     creditCharger(false);
                            // }

                            break;
                        case 1:
                            alert("winner is 1");
                            // $('.dacic').addClass('winner');
                            // $('li').addClass('winner-background');
                            // $('.winner-candidate').css("background","url('assets/images/dacic-ram.png') no-repeat center");
                            // if (candidate == "dacic") {
                            //     creditCharger();
                            // } else {
                            // audio = new Audio('assets/sounds/dacic/miljacka2.mp3');
                            // audio.volume = volume;
                            // audio.play();
                            //     $("li").addClass('loser-background');
                            //     $('#message').text('Ko bi reko čuda da se dese da Miljacka ' + invested + ' evra odnese!');
                            //     creditCharger(false);
                            // }


                            break;
                        case 2:
                            alert("winner is 2");
                            // $('.toma').addClass('winner');
                            // $("li").addClass('winner-background');
                            // $('.winner-candidate').css("background","url('assets/images/toma-ram.png') no-repeat center");
                            // if (candidate == "toma") {
                            //     creditCharger();
                            // } else {
                            // audio = new Audio('assets/sounds/toma/engleski.mp3');
                            // audio.volume = volume;
                            // audio.play();
                            //     $("li").addClass('loser-background');
                            //     $('#message').text('Doći će žuti ljudi da piju vode sa morave i ukrašće ti ' + invested + ' evra!');
                            //     creditCharger(false);
                            // }


                            break;
                        case 3:
                            alert("winner is 3");
                            // $('.tadic').addClass('winner');
                            // $("li").addClass('winner-background');
                            // $('.winner-candidate').css("background","url('assets/images/tadic-ram.png') no-repeat center");
                            // if (candidate == "tadic") {
                            //     creditCharger();
                            // } else {
                            // audio = new Audio('assets/sounds/tadic/mac.mp3');
                            // audio.volume = volume;
                            // audio.play();
                            //     $("li").addClass('loser-background');
                            //     $('#message').text('Tri sekunde u reketu, ministre molim te! Izgubio si ' + invested + ' evra!');
                            //     creditCharger(false);
                            // }


                            break;
                        case 4:
                            alert("winner is 4");
                            // $('.canak').addClass('winner');
                            // $("li").addClass('winner-background');
                            // $('.winner-candidate').css("background","url('assets/images/canak-ram.png') no-repeat center");
                            // if (candidate == "canak") {
                            //     creditCharger();
                            // } else {
                            // audio = new Audio('assets/sounds/canak/sat.mp3');
                            // audio.volume = volume;
                            // audio.play();
                            //     $("li").addClass('loser-background');
                            //     $('#message').text('Veliki brate izgubio si ' + invested + ' evra, oćeš da ti Jelena i ja otpevamo neki duet da ti bude bolje?');
                            //     creditCharger(false);
                            // }


                            break;
                        case 5:

                            alert("winner is 5");
                            // $('.ceda').addClass('winner');
                            // $("li").addClass('winner-background');
                            // $('.winner-candidate').css("background","url('assets/images/ceda-ram.png') no-repeat center");
                            // if (candidate == "ceda") {
                            //     creditCharger();
                            // } else {
                            // audio = new Audio('assets/sounds/ceda/gospodjo2.mp3');
                            // audio.volume = volume;
                            // audio.play();
                            //     $("li").addClass('loser-background');
                            //     $('#message').text('Nemojte da plačete gospodjo izgubili ste samo ' + invested + ' evra!');
                            //     creditCharger(false);
                            // }


                            break;
                        case 6:

                            alert("winner is 6");
                            // $('.seselj').addClass('winner');
                            // $("li").addClass('winner-background');
                            // $('.winner-candidate').css("background","url('assets/images/seselj-ram.png') no-repeat center");
                            // if (candidate == "seselj") {
                            //     creditCharger();
                            // } else {
                            // audio = new Audio('assets/sounds/seselj/olja.mp3');
                            // audio.volume = volume;
                            // audio.play();
                            //     $("li").addClass('loser-background');
                            //     $('#message').text('Vi svi pripadnici sekretarijata Haškog tribula možete samo da prihvatite da ste izgubili ' + invested + ' evra!');
                            //     creditCharger(false);
                            // }


                            break;
                    }
                } else {

                      startAnimation()
                    // $('.playFancy').click();
                    // $('#message').text(equalMessage);

                }


                            },3000);


        }   
    }
        
        
    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
        
    function getRandomPositions() {
        var x = getRandomInt(0, 100);
        if(x>50) {
            x= getRandomInt(0,6);
            return [x,x,x,x,x];
        }
        return [getRandomInt(0,6),getRandomInt(0,6),getRandomInt(0,6)];   
    }

    function sortThisBaby(arr) {
      arr = arr.sort(function(a, b) {
          return b - a
      });
      if (arr[0] != arr[1]) return true;
  }
    function indexOfMax(arr) {
      if (arr.length === 0) return -1;

      var max = arr[0];
      var maxIndex = 0;

      for (var i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
              maxIndex = i;
              max = arr[i];
          }
      }
      return maxIndex;
  }

