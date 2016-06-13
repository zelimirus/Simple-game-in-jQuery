//constants
var xmlhttp = new XMLHttpRequest();
var url = "assets/config.json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(response) {
    var config = JSON.parse(response);
    var gameStateZERO = 0;
    var gameStateINIT = 1;
    var gameStateMOVING = 2;
    var gameStateCHECK_WIN = 3;
    var slotNumber = 5;
    var initalX = 395;
    var tileHEIGHT = 100;
    var tileWIDTH = 100;
    var nCycly = 5;
    var tTiles = 7;
    var selectCandidateInitalY = 530;
    var selectCandidateInitalX = 387;
    var selectCandidateHight = 70;
    var selectCandidateWidth = 70;
    var volume = 1;
    var creditValue = config.creditValue;
    var result = [];
    var gameStatus = 0;
    var finalTileY1 = [];
    var finalTileY2 = [];
    var finalTileY3 = [];
    var slotSprite1 = [];
    var slotSprite2 = [];
    var slotSprite3 = [];
    var preChoosedPosition1 = [];
    var preChoosedPosition2 = [];
    var preChoosedPosition3 = [];
    var yourCandidate = 0;
    var finalCandidate = '';
    var invested = 0;

    var renderer = PIXI.autoDetectRenderer(1300, 800, {
        backgroundColor: 0xFFFFFF
    });
    document.getElementById("pixi-div").appendChild(renderer.view);

   
    var stage = new PIXI.Container();

    var imgSlot = imgSlot2 = imgSlot3 = config.imgSlot;


    var texture1 = PIXI.Texture.fromImage(config.imgBody);
    var texture2 = PIXI.Texture.fromImage(config.imgButton);
    var texture4 = PIXI.Texture.fromImage(config.imgButtonDown);
    var textureVucic = PIXI.Texture.fromImage(config.selectVucic);
    var textureDacic = PIXI.Texture.fromImage(config.selectDacic);
    var textureToma = PIXI.Texture.fromImage(config.selectToma);
    var textureTadic = PIXI.Texture.fromImage(config.selectTadic);
    var textureCeda = PIXI.Texture.fromImage(config.selectCeda);
    var textureCanak = PIXI.Texture.fromImage(config.selectCanak);
    var textureSeselj = PIXI.Texture.fromImage(config.selectSeselj);
    var textureVucicFrame = PIXI.Texture.fromImage(config.selectVucicFrame);
    var textureDacicFrame = PIXI.Texture.fromImage(config.selectDacicFrame);
    var textureTomaFrame = PIXI.Texture.fromImage(config.selectTomaFrame);
    var textureTadicFrame = PIXI.Texture.fromImage(config.selectTadicFrame);
    var textureCedaFrame = PIXI.Texture.fromImage(config.selectCedaFrame);
    var textureCanakFrame = PIXI.Texture.fromImage(config.selectCanakFrame);
    var textureSeseljFrame = PIXI.Texture.fromImage(config.selectSeseljFrame);


    var selectVucic = new PIXI.Sprite(textureVucicFrame);

    selectVucic.height = selectCandidateHight;
    selectVucic.width = selectCandidateWidth;
    selectVucic.y = selectCandidateInitalY;
    selectVucic.x = selectCandidateInitalX;

    stage.addChild(selectVucic);
    selectVucic.interactive = true;
    selectVucic

        .on('mouseover', onVucicDown)
        .on('touchstart', onVucicDown)
        .on('click', addVucic)
        .on('mouseout', onVucicUp)
        .on('touchend', onVucicUp)

    function onVucicDown() {
        this.isdown = true;
        this.texture = textureVucic;


    }

    function onVucicUp() {
        this.isdown = false;
        this.texture = textureVucicFrame;
    }

    function addVucic() {
        yourCandidateImg.texture = textureVucicFrame;
        yourCandidate = 0;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }


    var selectDacic = new PIXI.Sprite(textureDacicFrame);

    selectDacic.height = selectCandidateHight;
    selectDacic.width = selectCandidateWidth;
    selectDacic.y = selectCandidateInitalY;
    selectDacic.x = selectCandidateInitalX + 80;

    stage.addChild(selectDacic);
    selectDacic.interactive = true;
    selectDacic

        .on('mouseover', onDacicDown)
        .on('touchstart', onDacicDown)
        .on('click', addDacic)

    // set the mouseup and touchend callback...
    .on('mouseout', onDacicUp)
        .on('touchend', onDacicUp)

    function onDacicDown() {
        this.isdown = true;
        this.texture = textureDacic;

    }

    function onDacicUp() {
        this.isdown = false;
        this.texture = textureDacicFrame;
    }

    function addDacic() {
        yourCandidateImg.texture = textureDacicFrame;
        yourCandidate = 1;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }



    var selectToma = new PIXI.Sprite(textureTomaFrame);

    selectToma.height = selectCandidateHight;
    selectToma.width = selectCandidateWidth;
    selectToma.y = selectCandidateInitalY;
    selectToma.x = selectCandidateInitalX + 160;

    stage.addChild(selectToma);
    selectToma.interactive = true;
    selectToma

        .on('mouseover', onTomaDown)
        .on('touchstart', onTomaDown)
        .on('click', addToma)
        .on('mouseout', onTomaUp)
        .on('touchend', onTomaUp)

    function onTomaDown() {
        this.isdown = true;
        this.texture = textureToma;

    }

    function onTomaUp() {
        this.isdown = false;
        this.texture = textureTomaFrame;
    }

    function addToma() {
        yourCandidateImg.texture = textureTomaFrame;
        yourCandidate = 2;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }



    var selectTadic = new PIXI.Sprite(textureTadicFrame);

    selectTadic.height = selectCandidateHight;
    selectTadic.width = selectCandidateWidth;
    selectTadic.y = selectCandidateInitalY;
    selectTadic.x = selectCandidateInitalX + 240;

    stage.addChild(selectTadic);
    selectTadic.interactive = true;
    selectTadic

        .on('mouseover', onTadicDown)
        .on('touchstart', onTadicDown)
        .on('click', addTadic)
        .on('mouseout', onTadicUp)
        .on('touchend', onTadicUp)

    function onTadicDown() {
        this.isdown = true;
        this.texture = textureTadic;

    }

    function onTadicUp() {
        this.isdown = false;
        this.texture = textureTadicFrame;
    }

    function addTadic() {
        yourCandidateImg.texture = textureTadicFrame;
        yourCandidate = 3;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }


    var selectCeda = new PIXI.Sprite(textureCedaFrame);

    selectCeda.height = selectCandidateHight;
    selectCeda.width = selectCandidateWidth;
    selectCeda.y = selectCandidateInitalY;
    selectCeda.x = selectCandidateInitalX + 320;

    stage.addChild(selectCeda);
    selectCeda.interactive = true;
    selectCeda

        .on('mouseover', onCedaDown)
        .on('touchstart', onCedaDown)
        .on('click', addCeda)
        .on('mouseout', onCedaUp)
        .on('touchend', onCedaUp)

    function onCedaDown() {
        this.isdown = true;
        this.texture = textureCeda;

    }

    function onCedaUp() {
        this.isdown = false;
        this.texture = textureCedaFrame;
    }

    function addCeda() {
        yourCandidateImg.texture = textureCedaFrame;
        yourCandidate = 4;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }


    var selectCanak = new PIXI.Sprite(textureCanakFrame);

    selectCanak.height = selectCandidateHight;
    selectCanak.width = selectCandidateWidth;
    selectCanak.y = selectCandidateInitalY;
    selectCanak.x = selectCandidateInitalX + 400;

    stage.addChild(selectCanak);
    selectCanak.interactive = true;
    selectCanak

        .on('mouseover', onCanakDown)
        .on('touchstart', onCanakDown)
        .on('click', addCanak)
        .on('mouseout', onCanakUp)
        .on('touchend', onCanakUp)

    function onCanakDown() {
        this.isdown = true;
        this.texture = textureCanak;

    }

    function onCanakUp() {
        this.isdown = false;
        this.texture = textureCanakFrame;
    }

    function addCanak() {
        yourCandidateImg.texture = textureCanakFrame;
        yourCandidate = 5;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }

    var selectSeselj = new PIXI.Sprite(textureSeseljFrame);

    selectSeselj.height = selectCandidateHight;
    selectSeselj.width = selectCandidateWidth;
    selectSeselj.y = selectCandidateInitalY;
    selectSeselj.x = selectCandidateInitalX + 480;

    stage.addChild(selectSeselj);
    selectSeselj.interactive = true;
    selectSeselj

        .on('mouseover', onSeseljDown)
        .on('touchstart', onSeseljDown)
        .on('click', addSeselj)
        .on('mouseout', onSeseljUp)
        .on('touchend', onSeseljUp)

    function onSeseljDown() {
        this.isdown = true;
        this.texture = textureSeselj;

    }

    function onSeseljUp() {
        this.isdown = false;
        this.texture = textureSeseljFrame;
    }

    function addSeselj() {
        yourCandidateImg.texture = textureSeseljFrame;
        yourCandidate = 6;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }

    yourCandidateImg = new PIXI.Sprite(textureVucicFrame);

    yourCandidateImg.height = 250;
    yourCandidateImg.width = yourCandidateImg.height;
    yourCandidateImg.y = 150;
    yourCandidateImg.x = 50;

    stage.addChild(yourCandidateImg);

    winnerCandidateImg = new PIXI.Sprite(textureVucicFrame);

    winnerCandidateImg.height = 250;
    winnerCandidateImg.width = winnerCandidateImg.height;
    winnerCandidateImg.y = 150;
    winnerCandidateImg.x = 1000;

    stage.addChild(winnerCandidateImg);

    var volumeStyle = {
        font: '20px Arial',
        fill: '#ff0000',
        align: 'center'

    }

    var volumeOnOF = new PIXI.Text('Isključi zvuk', volumeStyle);
    volumeOnOF.x = 1170;
    volumeOnOF.y = 10;
    volumeOnOF.interactive = true;
    stage.addChild(volumeOnOF);

    volumeOnOF.click = function(e) {
        if (volume) {
            volumeOnOF.text = 'Uključi zvuk';
            volume = 0;
        } else {
            volumeOnOF.text = 'Isključi zvuk';
            volume = 1;
        }
    }
    volumeOnOFtouchstart = function(e) {
        if (volume) {
            volumeOnOF.text = 'Uključi zvuk';
            volume = 0;
        } else {
            volumeOnOF.text = 'Isključi zvuk';
            volume = 1;
        }
    }

    var messageStyle = {
        font: 'bold 15px Arial',
        fill: '#ff0000',
        align: 'center'
    };

    var message = new PIXI.Text(config.welcomeMessage, messageStyle);
    message.x = 610;
    message.y = 45;
    stage.addChild(message);

    var creditStyle = {
        font: 'bold 18px Arial'
    }
    var credit = new PIXI.Text('CREDIT:', creditStyle);
    credit.x = 595;
    credit.y = 10;
    stage.addChild(credit);

    var creditValueShow = new PIXI.Text(creditValue, creditStyle);
    creditValueShow.x = 670;
    creditValueShow.y = 10;
    stage.addChild(creditValueShow);

    var candidatePresent = new PIXI.Text("Tvoj kandidat", creditStyle);
    candidatePresent.x = 120;
    candidatePresent.y = 120;
    stage.addChild(candidatePresent);

    var winnerPresent = new PIXI.Text("Pobednik", creditStyle);
    winnerPresent.x = 1090;
    winnerPresent.y = 120;
    stage.addChild(winnerPresent);

    var select = new PIXI.Text("Izaberi svog kandidata i uloži kintu", creditStyle);
    select.x = 500;
    select.y = 500;
    stage.addChild(select);

    var imgButton = new PIXI.Sprite(texture2);

    imgButton.x = 607;
    imgButton.y = 450;
    imgButton.height = 40;
    imgButton.width = 100;
    imgButton.interactive = true;
    imgButton.click = function(e) {
        startAnimation();
        finalCandidate = yourCandidate;
        
    }
    imgButton.touchstart = function(e) {
        startAnimation();
        finalCandidate = yourCandidate;
        
    }

    imgButton
        .on('mousedown', onButtonDown)
        .on('touchstart', onButtonDown)
        .on('mouseup', onButtonUp)
        .on('touchend', onButtonUp)

    function onButtonDown() {
        this.isdown = true;
        this.texture = texture4;
        this.alpha = 1;

        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
        stage.removeChild(tv);
        stage.removeChild(tvAntena1);
        stage.removeChild(tvAntena2); 
        stage.removeChild(tvAntenaEnd1); 
        stage.removeChild(tvAntenaEnd2);
        stage.removeChild(congr);
        stage.addChild(imgBody); 
        renderer.render(stage);
    }

    function onButtonUp() {
        this.isdown = false;

        this.texture = texture2;
    }
 
    var imgBody = new PIXI.Sprite(texture1);
    imgBody.x = 353;
    imgBody.y = 70;
    imgBody.width = 608;
    imgBody.height = 378;

    var texture3 = PIXI.Texture.fromImage(imgSlot);
    preChoosedPosition1 = [0, 2, 4, 6, 1];
    for (var i = 0; i < slotNumber; i++) {
        slotSprite1[i] = new PIXI.extras.TilingSprite(texture3, tileWIDTH, tileHEIGHT);
        slotSprite1[i].tilePosition.x = 0;
        slotSprite1[i].tilePosition.y = (-preChoosedPosition1[i] * tileHEIGHT);
        slotSprite1[i].x = initalX + (i * 105);
        slotSprite1[i].y = 105;
        stage.addChild(slotSprite1[i]);
    }
    preChoosedPosition2 = [2, 0, 6, 3, 4];
    for (var i = 0; i < slotNumber; i++) {
        slotSprite2[i] = new PIXI.extras.TilingSprite(texture3, tileWIDTH, tileHEIGHT);
        slotSprite2[i].tilePosition.x = 0;
        slotSprite2[i].tilePosition.y = (-preChoosedPosition2[i] * tileHEIGHT);
        slotSprite2[i].x = initalX + (i * 105);
        slotSprite2[i].y = 210;
        stage.addChild(slotSprite2[i]);
    }
    preChoosedPosition3 = [6, 1, 2, 4, 0];
    for (var i = 0; i < slotNumber; i++) {
        slotSprite3[i] = new PIXI.extras.TilingSprite(texture3, tileWIDTH, tileHEIGHT);
        slotSprite3[i].tilePosition.x = 0;
        slotSprite3[i].tilePosition.y = (-preChoosedPosition3[i] * tileHEIGHT);
        slotSprite3[i].x = initalX + (i * 105);
        slotSprite3[i].y = 315;
        stage.addChild(slotSprite3[i]);
    }
    stage.addChild(imgBody);
    stage.addChild(imgButton);

    var line1 = new PIXI.Graphics();
    var line2 = new PIXI.Graphics();
    var winnerCheck = new PIXI.Graphics();    
    var winnerCheck2 = new PIXI.Graphics();
    var arrowRight = new PIXI.Graphics();    
    var arrowLeft = new PIXI.Graphics();


    arrowLeft.beginFill(0xA4CC00);
    // arrowLeft.lineStyle(3, 0xffd900, 1);

    arrowLeft.moveTo(550,635); 
    arrowLeft.lineTo(570,620); 
    arrowLeft.lineTo(570,630);  
    arrowLeft.lineTo(610,630);  
    arrowLeft.lineTo(610,640);  
    arrowLeft.lineTo(570,640);   
    arrowLeft.lineTo(570,650); 

    arrowLeft.endFill();



    arrowRight.beginFill(0xA4CC00);
    // arrowRight.lineStyle(3, 0xffd900, 1);

    arrowRight.moveTo(773,635); 
    arrowRight.lineTo(753,620);  
    arrowRight.lineTo(753,630);  
    arrowRight.lineTo(713,630);      
    arrowRight.lineTo(713,640);  
    arrowRight.lineTo(753,640);   
    arrowRight.lineTo(753,650); 

    arrowRight.endFill();

    


    var stakeValue = 100;
    var stake = new PIXI.Text(stakeValue, creditStyle);

    stake.y = 625;
    stake.x = 650;

  

    stage.addChild(arrowLeft)
    stage.addChild(arrowRight);
    stage.addChild(line1);
    stage.addChild(line2);
    stage.addChild(winnerCheck);
    stage.addChild(stake);

    arrowLeft.interactive = true;
    arrowRight.interactive = true;
    arrowRight.click = function(e) {
        if(parseInt(stake.text)< creditValue){
            stake.text = parseInt(stake.text) + 100;
            renderer.render(stage);
        }
    }
    arrowLeft.click= function(e) {
        if(parseInt(stake.text) > 100){
        stake.text = parseInt(stake.text) -100;
        renderer.render(stage);
        }
    }

    arrowLeft
        .on('mousedown', arrowDown)
        .on('mouseup', arrowUp)


    arrowRight
        .on('mousedown', arrowDown)
        .on('mouseup', arrowUp)
    
      function arrowDown(){
        this.isdown = true;
         this.tint = 0x5D8700 ;

      }

      function arrowUp(){
        this.isdown = false;
        this.tint = 0xA4CC00 ;        
      }


      var tv = new PIXI.Graphics();

    tv.beginFill(0xff66cc);
    tv.lineStyle(17, 0x00000, 1); 
    tv.moveTo(390,100);
    tv.lineTo(390,420);  
    tv.lineTo(923,420);  
    tv.lineTo(923,100);
    tv.lineTo(390,100);


     var tvAntena1 = new PIXI.Graphics();


    tvAntena1.lineStyle(10, 0x00000, 1); 
    tvAntena1.moveTo(600,100);
    tvAntena1.quadraticCurveTo(480, 20,430,20);
    

    var tvAntena2 = new PIXI.Graphics();

    tvAntena2.lineStyle(10, 0x00000, 1); 
    tvAntena2.moveTo(700,100);
    tvAntena2.quadraticCurveTo(820, 20,850,20);
       


    var tvAntenaEnd1 = new PIXI.Graphics();

    tvAntenaEnd1.lineStyle(0);
    tvAntenaEnd1.beginFill(0x000000);
    tvAntenaEnd1.drawCircle(850, 18,13);
    tvAntenaEnd1.endFill();

    

    var tvAntenaEnd2 = new PIXI.Graphics();


    tvAntenaEnd2.lineStyle(0);
    tvAntenaEnd2.beginFill(0x000000);
    tvAntenaEnd2.drawCircle(430, 18,13);
    tvAntenaEnd2.endFill();


    var congrStyle = { font: 'bold 40px Arial', align: 'center', fill:'#A4CC00' };

    var congr = new PIXI.Text('Čestitamo na pobedi!\n Udruženi mediji Srbije', congrStyle );
        congr.x = 435 ;
        congr.y = 185;

  


    stage.addChild(winnerCheck2);

    var INC = [25, 35, 50, 70, 100];

    function draw() {
        if (gameStatus == gameStateZERO) {
            gameStatus = gameStateINIT;
        } else
        if (gameStatus == gameStateINIT) {
            gameStatus = gameStateCHECK_WIN;
        } else if (gameStatus == gameStateMOVING) {
            for (var i = 0; i < slotNumber; i++) {
                if (finalTileY1[i] > 0) {
                    slotSprite1[i].tilePosition.y = slotSprite1[i].tilePosition.y + INC[i];
                    finalTileY1[i] = finalTileY1[i] - INC[i];
                }
                if (finalTileY2[i] > 0) {
                    slotSprite2[i].tilePosition.y = slotSprite2[i].tilePosition.y + INC[i];
                    finalTileY2[i] = finalTileY2[i] - INC[i];
                }
                if (finalTileY3[i] > 0) {
                    slotSprite3[i].tilePosition.y = slotSprite3[i].tilePosition.y + INC[i];
                    finalTileY3[i] = finalTileY3[i] - INC[i];
                }
            }
            if (finalTileY1[0] - 5 <= 0) {
                gameStatus = gameStateCHECK_WIN;
            }
            if (finalTileY2[0] - 5 <= 0) {
                gameStatus = gameStateCHECK_WIN;
            }
            if (finalTileY3[0] - 5 <= 0) {
                gameStatus = gameStateCHECK_WIN;
            }
        } else if (gameStatus == gameStateCHECK_WIN) {

            return; //no more animation
        }

        renderer.render(stage);
        requestAnimationFrame(draw);
    } 

    function startAnimation() {
        interactive(false);
        invested = parseInt(stake.text);

        var can0 = can1 = can2 = can3 = can4 = can5 = can6 = 0;
        if (gameStatus == gameStateINIT || gameStatus == gameStateCHECK_WIN) {
            preChoosedPosition1 = getRandomPositions();
            preChoosedPosition2 = getRandomPositions();
            preChoosedPosition3 = getRandomPositions();
            for (var i = 0; i < slotNumber; i++) {
                preChoosedPosition1[i] = getRandomInt(0, 6);
                preChoosedPosition2[i] = getRandomInt(0, 6);
                preChoosedPosition3[i] = getRandomInt(0, 6);

                slotSprite1[i].tilePosition.y = (-preChoosedPosition1[i] * tileHEIGHT);
                finalTileY1[i] = (nCycly * tileHEIGHT * tTiles);
                slotSprite2[i].tilePosition.y = (-preChoosedPosition2[i] * tileHEIGHT);
                finalTileY2[i] = (nCycly * tileHEIGHT * tTiles);
                slotSprite3[i].tilePosition.y = (-preChoosedPosition3[i] * tileHEIGHT);
                finalTileY3[i] = (nCycly * tileHEIGHT * tTiles);
            }
            gameStatus = gameStateMOVING;
            if (preChoosedPosition3[i] != preChoosedPosition3[i - 1]) {
                var union = preChoosedPosition1.concat(preChoosedPosition2);
                var store = union.concat(preChoosedPosition3);
                for (x = 0; x < 15; x++) {
                    switch (store[x]) {
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
                result = [can0, can1, can2, can3, can4, can5, can6];
                result2 = [can0, can1, can2, can3, can4, can5, can6];
            }
            draw();

            setTimeout(
                function() {

                    if (sortThisBaby(result2)) {
                        switch (indexOfMax(result)) {
                            case 0:
                                winnerCandidateImg.texture = textureVucicFrame;
                             
                                if (finalCandidate == 0) {

                                    textUpadete(config.winnerMessage, 625, 45, config.winnerColor);
                                    playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                } else {
                                    textUpadete(config.vucicMessage, 535, 45);
                                    playSound('assets/sounds/vucic/tisina.mp3');
                                    canvasLine();
                                    calcDefeat();
                                }
                                break;
                            case 1:
                                winnerCandidateImg.texture = textureDacicFrame;


                                if (finalCandidate == 1) {
                                    textUpadete(config.winnerMessage, 625, 45, config.winnerColor);
                                    playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                } else {
                                    textUpadete(config.dacicMessage, 483, 45);
                                    playSound('assets/sounds/dacic/miljacka2.mp3');
                                    canvasLine();
                                    calcDefeat();
                                }
                                break;
                            case 2:
                                winnerCandidateImg.texture = textureTomaFrame;

                                if (finalCandidate == 2) {
                                    textUpadete(config.winnerMessage, 625, 45, config.winnerColor);
                                    playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                } else {
                                    textUpadete(config.tomaMessage, 445, 45);
                                    playSound('assets/sounds/toma/engleski.mp3');
                                    canvasLine();
                                    calcDefeat();
                                }
                                break;
                            case 3:
                                winnerCandidateImg.texture = textureTadicFrame;
                     
                                if (finalCandidate == 3) {
                                    textUpadete(config.winnerMessage, 625, 45, config.winnerColor);
                                    playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                } else {
                                    textUpadete(config.tadicMessage, 470, 45);
                                    playSound('assets/sounds/tadic/mac.mp3');
                                    canvasLine();
                                    calcDefeat();
                                }
                                break;
                            case 4:
                                winnerCandidateImg.texture = textureCedaFrame;

                                if (finalCandidate == 4) {
                                    textUpadete(config.winnerMessage, 625, 45, config.winnerColor);
                                    playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                } else {
                                    textUpadete(config.cedaMessage, 550, 45);
                                    playSound('assets/sounds/ceda/gospodjo2.mp3');
                                    canvasLine();
                                    calcDefeat();
                                }

                                break;
                            case 5:
                                winnerCandidateImg.texture = textureCanakFrame;

                                if (finalCandidate == 5) {
                                    textUpadete(config.winnerMessage, 625, 45, config.winnerColor);
                                    playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                } else {
                                    textUpadete(config.canakMessage, 475, 45);
                                    playSound('assets/sounds/canak/sat.mp3');
                                    canvasLine();
                                    calcDefeat();
                                }
                                break;
                            case 6:
                                winnerCandidateImg.texture = textureSeseljFrame;

                                if (finalCandidate == 6) {
                                    textUpadete(config.winnerMessage, 625, 45, config.winnerColor);
                                    canvasWinerLine();
                                    playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                } else {
                                    textUpadete(config.seseljMessage, 405, 45);
                                    playSound('assets/sounds/seselj/olja.mp3');
                                    canvasLine();
                                    calcDefeat();
                                }
                                break;
                        }
                    } else {
                        startAnimation()
                        textUpadete(config.equalMessage, 500, 45);
                        interactive(false);
                    }

                    interactive(true);
                }, 2800);

        }

    }

    draw();

    function interactive(x){

    selectVucic.interactive = x;
    selectDacic.interactive = x;
    selectToma.interactive = x;
    selectTadic.interactive = x;
    selectCeda.interactive = x;
    selectCanak.interactive = x;
    selectSeselj.interactive = x;
    imgButton.interactive = x;
    arrowLeft.interactive = x;
    arrowRight.interactive = x;

    }
    function calcWin(){

        if ( invested > creditValue){
            stake.text = creditValue;
            invested = creditValue; 
            }
         creditValue =  creditValue + invested * config.winMultiplication;
         creditValueShow.text = creditValue;
         renderer.render(stage)
    }

    function calcDefeat(){
      
        creditValue = creditValue - invested;
        creditValueShow.text = creditValue;
        if ( invested > creditValue){
            stake.text = creditValue; 
        }

        if (creditValue == 0 || creditValue < 0){
              if (confirm('Potrošio si sve pare i nisi više zanimljiv političarima, nova igra ?')) {
                  
                  window.location.href = "index.html";

              } else {
                   window.location.href = "assets/zeljko.stojakovic.cv.pdf";
              }

        }
        renderer.render(stage)
    }
    function canvasLine(){
           line1.lineStyle(20, 0xff0000);
            line1.moveTo(50, 150);
            line1.lineTo(300, 400);
            stage.addChild(line1);
            line2.lineStyle(20, 0xff0000);
            line2.moveTo(300, 150);
            line2.lineTo(50, 400);
            stage.addChild(line2);
            renderer.render(stage);

    }

    function canvasWinerLine(){
            winnerCheck.lineStyle(17, 0xA4CC00, 1);
            winnerCheck.moveTo(250, 180);
            winnerCheck.lineTo(170, 350);
            winnerCheck.lineTo(110, 290);
            stage.addChild(winnerCheck);
            winnerCheck2.lineStyle(17, 0xA4CC00, 1);
            winnerCheck2.moveTo(1200, 180);
            winnerCheck2.lineTo(1120, 350);
            winnerCheck2.lineTo(1070, 290);
            stage.addChild(winnerCheck2);
            stage.addChild(tvAntena1);
            stage.addChild(tvAntena2); 
            stage.addChild(tvAntenaEnd1); 
            stage.addChild(tvAntenaEnd2); 
            stage.addChild(tv);
            stage.addChild(congr);
            stage.removeChild(imgBody); 
            renderer.render(stage);

    }
    function playSound(x){

        var audio = new Audio(x);
        audio.volume = volume;
        audio.play();

    }

    function textUpadete(value, x, y, color = " #ff0000") {
        message.text = value;
        message.x = x;
        message.y = y;
        message.style.fill = color;
    }

    function creditUpadete(value) {
        creditValue.text = value;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomPositions() {
        var x = getRandomInt(0, 100);
        if (x > 50) {
            x = getRandomInt(0, 6);
            return [x, x, x, x, x];
        }
        return [getRandomInt(0, 6), getRandomInt(0, 6), getRandomInt(0, 6)];
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

    animate();
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(stage);
    }
}