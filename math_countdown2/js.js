var playing = false;
var score;
var action;
var timeremaining;
var correctans;
var arrAns = [];

audioC = document.getElementById("myAudioCorrect");
audioW = document.getElementById("myAudioWrong");
audioS = document.getElementById("myAudioStart");
audioE = document.getElementById("myAudioEnd");
audioS.play();
document.getElementById("startreset").onclick = function() {
    
    if (playing == true) {
        location.reload();
        

    } else {
        score = 0;
        playing = true;
        document.getElementById("timeremaining").style.display = "block";

        document.getElementById("scorevalue").innerHTML = score;
        document.getElementById("startreset").innerHTML = "다시시작";
        timeremaining = 60;
        count();
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        hide("gameOver");

        hide("correct");
        hide("wrong");
        generateQA();


        for (var i = 1; i < 5; i++) {
            document.getElementById("box" + i).onclick = function() {

                if (this.innerHTML == correctans) {

                    show("correct");
                    audioC.play();
                    hide("wrong");
                    score++;
                    document.getElementById("scorevalue").innerHTML = score;
                    setTimeout(function() {
                        hide("correct");

                    }, 1050)

                    generateQA();


                } else {
                    hide("correct");
                    show("wrong");
                    audioW.play();
                    setTimeout(function() {
                        hide("wrong");

                    }, 1050)

                }

            }
        }

    }

}

function count() {
    action = setInterval(

        function() {

            timeremaining -= 1;
            document.getElementById("timeremainingvalue").innerHTML = timeremaining;
            if (timeremaining == 0) {
                clear();
                hide("timeremaining");

                document.getElementById("startreset").innerHTML = "시작하기";
                show("gameOver");
                document.getElementById("gameOver").innerHTML = "<p> 끝. 당신의 점수는 " + score +"점 입니다.</p>";
                playing = false;
                audioE.play();
            }


        }, 1000);
}

function hide(id) {

    document.getElementById(id).style.display = "none";
}

function show(id) {

    document.getElementById(id).style.display = "block";
}

function clear() {

    clearInterval(action);

}

function generateQA() {
    var arrAns = [];
    var operChoice = 1 + Math.round(3 * Math.random());
    
    var operators = [{
        sign: "+",
        method: function(a,b){ return a + b; }
    },{
        sign: "-",
        method: function(a,b){ return a - b; }
    },{
        sign: "x",
        method: function(a,b){ return a * b; }
    }];
    console.log(operChoice);
    console.log("선택한 sign",operators[4]);


    var selectedOperator = Math.floor(Math.random() * operators.length);
    console.log(selectedOperator);

    do {
        var x = 1 + Math.round(9 * Math.random());
        var y = 1 + Math.round(9 * Math.random());
        
        correctans = operators[selectedOperator].method(x,y);
    }
    
    
    while (arrAns.indexOf(correctans) > -1)
    arrAns.push(correctans);
    var correctpos = 1 + Math.round(3 * Math.random());
    
    document.getElementById("question").innerHTML = x + operators[selectedOperator].sign + y;

    document.getElementById("box" + correctpos).innerHTML = correctans;
    var wrongans;
    var arr2 = [correctans];
    for (var i = 1; i < 5; i++) {
        if (i != correctpos) {
            do { wrongans = 1 + Math.round(9 * Math.random()) * 1 + Math.round(9 * Math.random()); }
            while (arr2.indexOf(wrongans) > -1)
            document.getElementById("box" + i).innerHTML = wrongans;

            arr2.push(wrongans);

        }

    }


}











