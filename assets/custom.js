    var credit;
    var winAmount;
    var winMultiplication;
    var candidate;
    var invested;
    var volume = 1;
    var winner;
    var yourCandidate;
    var equalMessage;


    function invest() {

        setTimeout(
            function() {

                invested = $('#slider').val();
                candidate = $('input[name="gender"]:checked').val();
                vucic  = 0;
                dacic  = 0;
                toma   = 0;
                tadic  = 0;
                canak  = 0;
                ceda   = 0;
                seselj = 0;


                for (z = 1; z <= 3; z++) {

                    for (i = 1; i <= 5; i++) {


                        divTop = $(".fancy div:nth-child(" + z + ")").offset();
                        divTop = Math.round(divTop.top);
                        divBottom = $(".fancy div:nth-child(" + z + ")").offset().top + $(".fancy div:nth-child(" + z + ")").outerHeight(true);
                        divBottom = Math.round(divBottom) - 5;

                        vucicTop = document.querySelector(".fancy div:nth-child(" + z + ") ul:nth-child(" + i + ") li:nth-child(1)");
                        vucicTop = Cordinates(vucicTop);
                        if (vucicTop.y > divTop && divBottom > vucicTop.y) vucic++;


                        vucicTop2 = document.querySelector(".fancy div:nth-child(" + z + ") ul:nth-child(" + i + ") li:nth-child(8)");
                        vucicTop2 = Cordinates(vucicTop2);
                        if (vucicTop2.y > divTop && divBottom > vucicTop2.y) vucic++;

                        dacicTop = document.querySelector(".fancy div:nth-child(" + z + ") ul:nth-child(" + i + ") li:nth-child(2)");
                        dacicTop = Cordinates(dacicTop);
                        if (dacicTop.y > divTop && divBottom > dacicTop.y) dacic++;

                        tomaTop = document.querySelector(".fancy div:nth-child(" + z + ") ul:nth-child(" + i + ") li:nth-child(3)");
                        tomaTop = Cordinates(tomaTop);
                        if (tomaTop.y > divTop && divBottom > tomaTop.y) toma++;

                        tadicTop = document.querySelector(".fancy div:nth-child(" + z + ") ul:nth-child(" + i + ") li:nth-child(4)");
                        tadicTop = Cordinates(tadicTop);
                        if (tadicTop.y > divTop && divBottom > tadicTop.y) tadic++;

                        canakTop = document.querySelector(".fancy div:nth-child(" + z + ") ul:nth-child(" + i + ") li:nth-child(5)");
                        canakTop = Cordinates(canakTop);
                        if (canakTop.y > divTop && divBottom > canakTop.y) canak++;


                        cedaTop = document.querySelector(".fancy div:nth-child(" + z + ") ul:nth-child(" + i + ") li:nth-child(6)");
                        cedaTop = Cordinates(cedaTop);
                        if (cedaTop.y > divTop && divBottom > cedaTop.y) ceda++;


                        seseljTop = document.querySelector(".fancy div:nth-child(" + z + ") ul:nth-child(" + i + ") li:nth-child(7)");
                        seseljTop = Cordinates(seseljTop);
                        if (seseljTop.y > divTop && divBottom > seseljTop.y) seselj++;

                    }

                }

                var array = [vucic, dacic, toma, tadic, canak, ceda, seselj];
                array2 = [vucic, dacic, toma, tadic, canak, ceda, seselj];

                if (sortThisBaby(array2)) {
                    switch (indexOfMax(array)) {
                        case 0:
                            $('.vucic').addClass('winner');
                            $("li").addClass('winner-background');
                             $('.winner-candidate').css("background","url('assets/images/vucic-ram.png') no-repeat center");

                            if (candidate == "vucic") {
                                creditCharger();

                            } else {
                            audio = new Audio('assets/sounds/vucic/tisina.mp3');
                            audio.volume = volume;
                            audio.play();
                                $("li").addClass('loser-background');
                                $('#message').text('Izgubio si ' + invested + ' evra. Tišina tamo! Biće ti bolje 2046-ste.');
                                creditCharger(false);
                            }

                            break;
                        case 1:

                            $('.dacic').addClass('winner');
                            $('li').addClass('winner-background');
                            $('.winner-candidate').css("background","url('assets/images/dacic-ram.png') no-repeat center");
                            if (candidate == "dacic") {
                                creditCharger();
                            } else {
                            audio = new Audio('assets/sounds/dacic/miljacka2.mp3');
                            audio.volume = volume;
                            audio.play();
                                $("li").addClass('loser-background');
                                $('#message').text('Ko bi reko čuda da se dese da Miljacka ' + invested + ' evra odnese!');
                                creditCharger(false);
                            }


                            break;
                        case 2:

                            $('.toma').addClass('winner');
                            $("li").addClass('winner-background');
                            $('.winner-candidate').css("background","url('assets/images/toma-ram.png') no-repeat center");
                            if (candidate == "toma") {
                                creditCharger();
                            } else {
                            audio = new Audio('assets/sounds/toma/engleski.mp3');
                            audio.volume = volume;
                            audio.play();
                                $("li").addClass('loser-background');
                                $('#message').text('Doći će žuti ljudi da piju vode sa morave i ukrašće ti ' + invested + ' evra!');
                                creditCharger(false);
                            }


                            break;
                        case 3:

                            $('.tadic').addClass('winner');
                            $("li").addClass('winner-background');
                            $('.winner-candidate').css("background","url('assets/images/tadic-ram.png') no-repeat center");
                            if (candidate == "tadic") {
                                creditCharger();
                            } else {
                            audio = new Audio('assets/sounds/tadic/mac.mp3');
                            audio.volume = volume;
                            audio.play();
                                $("li").addClass('loser-background');
                                $('#message').text('Tri sekunde u reketu, ministre molim te! Izgubio si ' + invested + ' evra!');
                                creditCharger(false);
                            }


                            break;
                        case 4:
                            $('.canak').addClass('winner');
                            $("li").addClass('winner-background');
                            $('.winner-candidate').css("background","url('assets/images/canak-ram.png') no-repeat center");
                            if (candidate == "canak") {
                                creditCharger();
                            } else {
                            audio = new Audio('assets/sounds/canak/sat.mp3');
                            audio.volume = volume;
                            audio.play();
                                $("li").addClass('loser-background');
                                $('#message').text('Veliki brate izgubio si ' + invested + ' evra, oćeš da ti Jelena i ja otpevamo neki duet da ti bude bolje?');
                                creditCharger(false);
                            }


                            break;
                        case 5:
                            $('.ceda').addClass('winner');
                            $("li").addClass('winner-background');
                            $('.winner-candidate').css("background","url('assets/images/ceda-ram.png') no-repeat center");
                            if (candidate == "ceda") {
                                creditCharger();
                            } else {
                            audio = new Audio('assets/sounds/ceda/gospodjo2.mp3');
                            audio.volume = volume;
                            audio.play();
                                $("li").addClass('loser-background');
                                $('#message').text('Nemojte da plačete gospodjo izgubili ste samo ' + invested + ' evra!');
                                creditCharger(false);
                            }


                            break;
                        case 6:
                            $('.seselj').addClass('winner');
                            $("li").addClass('winner-background');
                            $('.winner-candidate').css("background","url('assets/images/seselj-ram.png') no-repeat center");
                            if (candidate == "seselj") {
                                creditCharger();
                            } else {
                            audio = new Audio('assets/sounds/seselj/olja.mp3');
                            audio.volume = volume;
                            audio.play();
                                $("li").addClass('loser-background');
                                $('#message').text('Vi svi pripadnici sekretarijata Haškog tribula možete samo da prihvatite da ste izgubili ' + invested + ' evra!');
                                creditCharger(false);
                            }


                            break;
                    }
                } else {

                    
                    $('.playFancy').click();
                    $('#message').text(equalMessage);

                }
                
            },
            1500);
    }


    function invest2(){

         setTimeout(
            function() {

                var vucic = 0;
                var dacic = 0;
                var toma = 0;
                var tadic = 0;
                var canak = 0;
                var ceda = 0;
                var seselj = 0;

                invested = $('#slider2').val();
                var number = $('input[name="gender"]:checked').val();
          


                for (z = 1; z <= 3; z++) {

                    for (i = 1; i <= 5; i++) {


                        divTop = $(".fancy div:nth-child(" + z + ")").offset();
                        divTop = Math.round(divTop.top);
                        divBottom = $(".fancy div:nth-child(" + z + ")").offset().top + $(".fancy div:nth-child(" + z + ")").outerHeight(true);
                        divBottom = Math.round(divBottom) - 5;

                        vucicTop = document.querySelector(".fancy div:nth-child(" + z + ") ul:nth-child(" + i + ") li:nth-child(1)");
                        vucicTop = Cordinates(vucicTop);
                        if (vucicTop.y > divTop && divBottom > vucicTop.y) vucic++;


                        vucicTop2 = document.querySelector(".fancy div:nth-child(" + z + ") ul:nth-child(" + i + ") li:nth-child(8)");
                        vucicTop2 = Cordinates(vucicTop2);
                        if (vucicTop2.y > divTop && divBottom > vucicTop2.y) vucic++;

                        dacicTop = document.querySelector(".fancy div:nth-child(" + z + ") ul:nth-child(" + i + ") li:nth-child(2)");
                        dacicTop = Cordinates(dacicTop);
                        if (dacicTop.y > divTop && divBottom > dacicTop.y) dacic++;

                        tomaTop = document.querySelector(".fancy div:nth-child(" + z + ") ul:nth-child(" + i + ") li:nth-child(3)");
                        tomaTop = Cordinates(tomaTop);
                        if (tomaTop.y > divTop && divBottom > tomaTop.y) toma++;

                        tadicTop = document.querySelector(".fancy div:nth-child(" + z + ") ul:nth-child(" + i + ") li:nth-child(4)");
                        tadicTop = Cordinates(tadicTop);
                        if (tadicTop.y > divTop && divBottom > tadicTop.y) tadic++;

                        canakTop = document.querySelector(".fancy div:nth-child(" + z + ") ul:nth-child(" + i + ") li:nth-child(5)");
                        canakTop = Cordinates(canakTop);
                        if (canakTop.y > divTop && divBottom > canakTop.y) canak++;


                        cedaTop = document.querySelector(".fancy div:nth-child(" + z + ") ul:nth-child(" + i + ") li:nth-child(6)");
                        cedaTop = Cordinates(cedaTop);
                        if (cedaTop.y > divTop && divBottom > cedaTop.y) ceda++;


                        seseljTop = document.querySelector(".fancy div:nth-child(" + z + ") ul:nth-child(" + i + ") li:nth-child(7)");
                        seseljTop = Cordinates(seseljTop);
                        if (seseljTop.y > divTop && divBottom > seseljTop.y) seselj++;

                    }

                }

                var array3 = [vucic, dacic, toma, tadic, canak, ceda, seselj];
                array3 = array3.sort(function(a, b){return b-a});
                var array = [vucic, dacic, toma, tadic, canak, ceda, seselj];

                    

                  switch (indexOfMax(array)) {
                        case 0:
                            $('.vucic').addClass('winner');

                            if (number == array3[0]) {
                                creditCharger();
                            $("li").addClass('winner-background');

                            } else {
                            audio = new Audio('assets/sounds/vucic/tisina.mp3');
                            audio.volume = volume;
                            audio.play();
                                $("li").addClass('loser-background');
                                $('#message').text('Izgubio si ' + invested + ' evra. Tišina tamo! Biće ti bolje 2046-ste.');
                                creditCharger(false);
                            }

                            break;
                        case 1:

                            $('.dacic').addClass('winner');
                            if (number == array3[0]) {
                                creditCharger();
                            $('li').addClass('winner-background');
                            } else {
                            audio = new Audio('assets/sounds/dacic/miljacka2.mp3');
                            audio.volume = volume;
                            audio.play();
                                $("li").addClass('loser-background');
                                $('#message').text('Ko bi reko čuda da se dese da Miljacka ' + invested + ' evra odnese!');
                                creditCharger(false);
                            }


                            break;
                        case 2:
                            $('.toma').addClass('winner');

                            if (number == array3[0]) {
                                creditCharger();
                            $("li").addClass('winner-background');
                            } else {
                            audio = new Audio('assets/sounds/toma/engleski.mp3');
                            audio.volume = volume;
                            audio.play();
                                $("li").addClass('loser-background');
                                $('#message').text('Doći će žuti ljudi da piju vode sa morave i ukrašće ti ' + invested + ' evra!');
                                creditCharger(false);
                            }


                            break;
                        case 3:

                            $('.tadic').addClass('winner');
                            if (number == array3[0]) {
                            $("li").addClass('winner-background');
                                creditCharger();
                            } else {
                            audio = new Audio('assets/sounds/tadic/mac.mp3');
                            audio.volume = volume;
                            audio.play();
                                $("li").addClass('loser-background');
                                $('#message').text('Tri sekunde u reketu, ministre molim te! Izgubio si ' + invested + ' evra!');
                                creditCharger(false);
                            }


                            break;
                        case 4:
                            $('.canak').addClass('winner');
                            if (number == array3[0]) {
                                creditCharger();
                            $("li").addClass('winner-background');
                            } else {
                            audio = new Audio('assets/sounds/canak/sat.mp3');
                            audio.volume = volume;
                            audio.play();
                                $("li").addClass('loser-background');
                                $('#message').text('Veliki brate izgubio si ' + invested + ' evra, oćeš da ti Jelena i ja otpevamo neki duet da ti bude bolje?');
                                creditCharger(false);
                            }


                            break;
                        case 5:
                            $('.ceda').addClass('winner');
                            if (number == array3[0]) {
                            $("li").addClass('winner-background');
                                creditCharger();
                            } else {
                            audio = new Audio('assets/sounds/ceda/gospodjo2.mp3');
                            audio.volume = volume;
                            audio.play();
                                $("li").addClass('loser-background');
                                $('#message').text('Nemojte da plačete gospodjo izgubili ste samo ' + invested + ' evra!');
                                creditCharger(false);
                            }


                            break;
                        case 6:
                            $('.seselj').addClass('winner');
                            if (number == array3[0]) {
                                creditCharger();
                            $("li").addClass('winner-background');
                            } else {
                            audio = new Audio('assets/sounds/seselj/olja.mp3');
                            audio.volume = volume;
                            audio.play();
                                $("li").addClass('loser-background');
                                $('#message').text('Vi svi pripadnici sekretarijata Haškog tribula možete samo da prihvatite da ste izgubili ' + invested + ' evra!');
                                creditCharger(false);
                            }


                            break;
                    }

                    $('#winner-candidate2').text(array3[0]);
                


      
    },
    1500);
}

    $('.fancy .slot').jSlots({
        number: 5,
        spinner: '.playFancy',
        spinEvent: 'click',
        easing: 'easeOutElastic',
        time: 1000,
        loops: 3,

        onStart: function() {

            $(".playFancy").prop("disabled", true);
            onStart();


        },
        onEnd: function() {
            $(".playFancy").prop("disabled", false);

        }
    });