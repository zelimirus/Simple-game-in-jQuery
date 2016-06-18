  $.getJSON("config.json", function(json) {

      credit = json.credit;
      winMultiplication = json.winMultiplication;
      equalMessage = json.equalMessage;
      $("#credit").text(credit);
      $('#slider').attr("max", credit);
      $('#slider2').attr("max", credit);
  });


  function autor(){
    window.location.href = "zeljko.stojakovic.cv.pdf";
  }

  $( window ).load(function() {
        alert("Svrha ove aplikacije nije omalovažavanje niti vređanje bilo koga, već isključivo homor i zabava.");
});
  
  function game1(){
    $("#game1").css("display","none");
    $("#game2").css("display",'block');
    $(".game2").css("display",'none');
    $(".game1").css("display",'block');
    $(".your-candidate-wraper span").text('Tvoj broj polja');
    // $('.winner-candidate').css("background","url('assets/images/ram.png') no-repeat center");
    $('.winner-candidate').css("background","none");
    $('#your-candidate').css("background","none");
    $("#your-candidate").text("3");
    $(".winner-candidate-wraper span").text('Broj polja');
    $(".winner-candidate").text('');
    $('#button2').attr('onclick','invest2()');

  }


  function game2(){
    $("#game2").css("display","none");
    $("#game1").css("display",'block');
    $(".game1").css("display",'none');
    $(".game2").css("display",'block');
    $(".your-candidate-wraper span").text('Tvoj kandidat');
    $('#your-candidate').css("background","url('assets/images/vucic-ram.png') no-repeat center");
    $('.winner-candidate').css("background","url('assets/images/ram.png') no-repeat center");
    $(".winner-candidate-wraper span").text('Pobednik');
    $(".winner-candidate").text('');
    $('#button2').removeAttr('onclick');
    $("#your-candidate").text("");

  }


  function game() {
      document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
              }
          }
      }
  }


  function yourVolume() {
      if ($("#volume").text() == "Isključi zvuk") {

          volume = 0;
          $("#volume").text("Uključi zvuk");
      } else {
          volume = 1;
          $("#volume").text("Isključi zvuk");
      }
  }

  function CandidateNumber(x) {
      $('#your-candidate').text(x);
        
  }

  function Candidate(x) {
      $('#your-candidate').css("background","url('assets/images/"+x+"-ram.png') no-repeat center");
        
  }

  function onStart() {
      $('.vucic').removeClass('winner');
      $('.dacic').removeClass('winner');
      $('.toma').removeClass('winner');
      $('.tadic').removeClass('winner');
      $('.ceda').removeClass('winner');
      $('.canak').removeClass('winner');
      $('.seselj').removeClass('winner');
      $('li').removeClass('winner-background');
      $('li').removeClass('loser-background');
      $('#message').removeClass('loser-message');
      $('#message').removeClass('winner-message');
      $('#message').text('.....');
  }

  function creditCharger(win = true) {

      if (win) {
          winAmount = invested * winMultiplication;
          credit = credit + winAmount;

          $('#message').addClass('winner-message');
          $('#message').text('Pobeda! Osvojio si ' + winAmount + ' evra!');
              audio = new Audio('assets/sounds/win.mp3');
                            audio.volume = volume;
                            audio.play();

      } else {

          $('#message').addClass('loser-message');
          credit = credit - invested;
          if (credit == 0) {

              if (confirm('Potrošio si sve pare i nisi više zanimljiv političarima, nova igra ?')) {
                  onStart();
                  $.getJSON("config.json", function(json) {
                      credit = json.credit;
                      $("#credit").text(credit);
                      $('#slider').attr("max", credit);
                  });
                  $('#message').text('Nova igra!');

              } else {
                  autor()
              }

          }
      }

      $('#credit').text(credit);
      $('#slider').attr("max", credit);
      calc();
       $('#slider2').attr("max", credit);
      calc2();


  }

  function calc() {
      var val = $('#slider').val();
      $('#invested').text(val);
  }

   function calc2() {
      var val = $('#slider2').val();
      $('#invested2').text(val);
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

  function Cordinates(obj) {
      var p = {};
      p.x = obj.offsetLeft;
      p.y = obj.offsetTop;
      while (obj.offsetParent) {
          p.x = p.x + obj.offsetParent.offsetLeft;
          p.y = p.y + obj.offsetParent.offsetTop;
          if (obj == document.getElementsByTagName("body")[0]) {
              break;
          } else {
              obj = obj.offsetParent;
          }
      }
      return p;
  }

  function sortThisBaby(arr) {
      arr = arr.sort(function(a, b) {
          return b - a
      });
      if (arr[0] != arr[1]) return true;
  }