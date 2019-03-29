var item1 = 0;
var item1R = 1;
var item2 = 0;
var item2R = 1;
var item3 = 0;
var item3R = 1;
var pow_item = 0;
var testText = 0;
var price = "";
var incoome = 0;
var total = 0;
var mony = 0;
var score = 0;

window.onload = function () {

    //document.getElementById("input_1").value = "";
    document.getElementById("input_2").value = "";
    document.getElementById("input_3").value = "";
    document.getElementById("inValue").value = "";
    document.getElementById("inPow").value = "";
    document.getElementById("price").value = "";
    document.getElementById("showScore").innerHTML = "score: " + score;

    var fiveMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);


};





function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            alert("คะแนนของคุณ   " + score);
            window.location = "./startManu.html"

        }
    }, 1000);
}



function allowDrop(ev) {
    ev.preventDefault();

}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    testText = 0;
    pow_item = 0;
    document.getElementById("inValue").value = "";
    document.getElementById("inPow").value = ""
    document.getElementById("price").value = ""

}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text", ev.target.id);
    // ev.target.appendChild(document.getElementById(data));
    if (data == "drag1") {
        testText = item1;
        pow_item = item1R;
        document.getElementById("drag1").src = "./Image/none.png";
        document.getElementById("xa").innerHTML = "";
    } else if (data == "drag2") {
        testText = item2;
        pow_item = item2R;
        document.getElementById("drag2").src = "./Image/none.png";
        document.getElementById("xb").innerHTML = "";
    } else if (data == "drag3") {
        testText = item3;
        pow_item = item3R;
        document.getElementById("drag3").src = "./Image/none.png";
        document.getElementById("xc").innerHTML = "";
    }
    document.getElementById("inValue").value = testText;
    document.getElementById("inPow").value = pow_item;

}


function dropBag(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (data == "drag4")
        ev.target.appendChild(document.getElementById(data));

}

function getImagePath2() {

    item = ["car", "Apple", "none", "water"]
    numberItem = Math.floor(Math.random() * 4);
    if (numberItem != 2) {
        var z = Math.floor(Math.random() * 3) + 1;
        item2 = Math.floor(Math.random() * 10) + 1
        if (z == 2) {

            var xxx = (Math.floor(Math.random() * 3) + 2)
            item2R = xxx;
            document.getElementById("xb").innerHTML = "X" + item2R;
        }
    }
    return "./Image/" + item[numberItem] + ".png";
}

function getImagePath3() {

    item = ["car", "Apple", "none", "water"]
    numberItem = Math.floor(Math.random() * 4);
    if (numberItem != 2) {
        var z = Math.floor(Math.random() * 3) + 1;
        item3 = Math.floor(Math.random() * 10) + 1
        if (z == 2) {
            var xx = (Math.floor(Math.random() * 3) + 2)
            item3R = xx;
            document.getElementById("xc").innerHTML = "X" + item3R;
        }
    }
    randomincome();
    return "./Image/" + item[numberItem] + ".png";
}

function getImagePath1() {

    item = ["none", "Apple", "car", "water"]
    numberItem = Math.floor(Math.random() * 3) + 1;
    var z = Math.floor(Math.random() * 3) + 1;
    item1 = Math.floor(Math.random() * 10) + 1
    if (z == 2) {
        var x = (Math.floor(Math.random() * 3) + 2)
        item1R = x;
        document.getElementById("xa").innerHTML = "X" + item1R;

    }
    var testx = "./Image/" + item[numberItem] + ".png";

    // document.setElementById("drag1").reset();
    document.getElementById("drag1").src = "testx";

    return testx;
}

function getImagebag() {
    return "./Image/bag.png";
}

function Pow() {
    var z = Math.floor(Math.random() * 3) + 1;

    return "X" + (Math.floor(Math.random() * 3) + 2);
}

function addPrice() {
    if (document.getElementById("price").value != "") {
        if (document.getElementById("price").value == (document.getElementById("inValue").value * document.getElementById("inPow").value)) {
            if (document.getElementById("input_2").value == "") {
                price += document.getElementById("price").value;
                //document.getElementById("input_2").value = price;

            } else if (document.getElementById("input_2").value != "") {
                price += " + " + document.getElementById("price").value;
                //document.getElementById("input_2").value = " + " + price;
            }
            document.getElementById("input_2").value = price;
            document.getElementById("inValue").value = "";
            document.getElementById("inPow").value = "";
            document.getElementById("price").value = "";

        }
    }
}

function randomincome() {
    var Incoome = [50, 100, 200, 300, 500];
    incoome = Math.floor(Math.random() * 5);
    total = (item1 * item1R) + (item2 * item2R) + (item3 * item3R);

    if (Incoome[incoome] >= total) {
        mony = Incoome[incoome];
        document.getElementById("input_1").value = mony;

    } else {
        mony = Incoome[1];
        document.getElementById("input_1").value = mony

    }
}
function out() {
    if (mony - total == document.getElementById("input_3").value) {
        // document.getElementById("tag1").src = "Image/yes.png";
        // document.getElementById("tag2").src = "Image/T.png";
        document.getElementById("input_1").value = "";
        document.getElementById("input_2").value = "";
        document.getElementById("input_3").value = "";
        document.getElementById("inValue").value = "";
        document.getElementById("inPow").value = "";
        document.getElementById("price").value = "";

        item1 = 0;
        item1R = 1;
        item2 = 0;
        item2R = 1;
        item3 = 0;
        item3R = 1;
        pow_item = 0;
        testText = 0;
        price = "";
        incoome = 0;
        total = 0;
        mony = 0;

        getImagePath11();
        getImagePath22();
        getImagePath33();

        var random_Score1 = Math.floor(Math.random() * 20);
        var random_Score2 = Math.floor(Math.random() * 20);
        score += random_Score1 + random_Score2;
        document.getElementById("showScore").innerHTML = "score: " + score;


    }
}

function getImagePath22() {

    item = ["car", "Apple", "none", "water"]
    numberItem = Math.floor(Math.random() * 4);
    if (numberItem != 2) {
        var z = Math.floor(Math.random() * 3) + 1;
        item2 = Math.floor(Math.random() * 10) + 1
        if (z == 2) {

            var xxx = (Math.floor(Math.random() * 3) + 2)
            item2R = xxx;
            document.getElementById("xb").innerHTML = "X" + item2R;
        }
    }
    document.getElementById("drag2").src = "./Image/" + item[numberItem] + ".png";

}

function getImagePath33() {

    item = ["car", "Apple", "none", "water"]
    numberItem = Math.floor(Math.random() * 4);
    if (numberItem != 2) {
        var z = Math.floor(Math.random() * 3) + 1;
        item3 = Math.floor(Math.random() * 10) + 1
        if (z == 2) {
            var xx = (Math.floor(Math.random() * 3) + 2)
            item3R = xx;
            document.getElementById("xc").innerHTML = "X" + item3R;
        }
    }
    randomincome();
    document.getElementById("drag3").src = "./Image/" + item[numberItem] + ".png";
}

function getImagePath11() {

    item = ["none", "Apple", "car", "water"]
    numberItem = Math.floor(Math.random() * 3) + 1;
    var z = Math.floor(Math.random() * 3) + 1;
    item1 = Math.floor(Math.random() * 10) + 1
    if (z == 2) {
        var x = (Math.floor(Math.random() * 3) + 2)
        item1R = x;
        document.getElementById("xa").innerHTML = "X" + item1R;

    }
    document.getElementById("drag1").src = "./Image/" + item[numberItem] + ".png";
}

