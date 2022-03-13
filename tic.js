count = 1;
let ready = false;
function startgame() {
    document.getElementById("heading2").innerHTML = "Game Started";
    document.getElementById("head").innerHTML = "Player X turn";
    ready = true;
}

function play(ctrl) {

    if (ready == true) {

        if (ctrl.innerHTML != "") {
            return;
        }

        if (count <= 9) {
            if (count % 2 != 0) {
                document.getElementById(ctrl.id).innerHTML = "X";
                document.getElementById(ctrl.id).style.color = "red";
                document.getElementById("head").innerHTML = "Player O turn";
            }

            else {
                document.getElementById(ctrl.id).innerHTML = "O";
                document.getElementById(ctrl.id).style.color = "red";
                document.getElementById("head").innerHTML = "Player X turn";
            }

            count++;
            if (win()) {
                document.getElementById("result").innerHTML = "Winner" +  + "has won";
            }
        }

        if(count > 9) {        
            document.getElementById("result").innerHTML = "Draw";
        }

        if(count> 9)
        {
            document.getElementById("head").innerHTML = "";
        }
    }
}

function reset() {
    document.getElementById("s1").innerHTML = "";
    document.getElementById("s2").innerHTML = "";
    document.getElementById("s3").innerHTML = "";
    document.getElementById("s4").innerHTML = "";
    document.getElementById("s5").innerHTML = "";
    document.getElementById("s6").innerHTML = "";
    document.getElementById("s7").innerHTML = "";
    document.getElementById("s8").innerHTML = "";
    document.getElementById("s9").innerHTML = "";
    document.getElementById("heading2").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    count = 1;
}

function win() {
    if (check("s1", "s2", "s3") || check("s4", "s5", "s6") || check("s7", "s8", "s9") || check("s1", "s4", "s7") || check("s2", "s5", "s8") || check("s3", "s6", "s9") || check("s1", "s5", "s9") || check("s3", "s5", "s7")) {
        return true;
    }
}

function check(s1, s2, s3) {
    if (getdata(s1) != "" && getdata(s2) != "" && getdata(s3) != "" && getdata(s1) == getdata(s2) && getdata(s2) == getdata(s3)) {
        return true;
    }
}

function getdata(td) {
    return document.getElementById(td).innerHTML
}

function draw(){
    
}
// function checkRow(a,b,c, move)
// {
//     var result = false;
//     if(getBox(a)== move && getBox(b)== move && getBox(c)== move)
//     {
//         result = true;
//     }
//     return result;
// }



