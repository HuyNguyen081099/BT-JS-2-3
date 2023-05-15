
// bài 1
var btn = document.getElementById("btn");

btn.onclick = function () {
    var workingday = document.getElementById("workingdayInput").value;
    var money1 = document.getElementById("money1Input").value;
    var span1 = document.getElementById("span1");

    var output = money1 * workingday;

    span1.innerHTML = output
};


// bài 2
var button1 = document.getElementById("button1");
var span2 = document.getElementById("span2");

button1.onclick = function () {
    var stt1 = parseInt(document.getElementById("stt1Input").value);
    var stt2 = parseInt(document.getElementById("stt2Input").value);
    var stt3 = parseInt(document.getElementById("stt3Input").value);
    var stt4 = parseInt(document.getElementById("stt4Input").value);
    var stt5 = parseInt(document.getElementById("stt5Input").value);


    var output1 = (stt1 + stt2 + stt3 + stt4 + stt5);
    var final = output1 / 5;


    span2.innerHTML = final
};

// bài 3

var button2 = document.getElementById("button2");
var span3 = document.getElementById("span3");

button2.onclick = function () {
    var dolas = document.getElementById("dolasInput").value;

    var output3 = dolas * 23.500

    span3.innerHTML = output3
};




// bài 4
var button3 = document.getElementById("button3");
var span4 = document.getElementById("span4");

button3.onclick = function () {
    var cd = parseInt(document.getElementById("cdInput").value);
    var cr = parseInt(document.getElementById("crInput").value);


    var chuvi = (cd + cr) * 2;
    var dientich = (cd * cr);

    span4.innerHTML = "chu vi: " + chuvi  + " diện tích: " + dientich
    
    

};


// bài 5
var button4 = document.getElementById("button4");
var span6 = document.getElementById("span6");

button4.onclick = function () {
    var number4 = +document.getElementById("number4Input").value;

    var hangdv = number4 % 10;
    var hangchuc = Math.floor(number4/10);

    
    var tong2kyso = hangdv + hangchuc;

 

    span6.innerHTML =  tong2kyso
}