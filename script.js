/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}

var eventName = document.getElementsByName("event")[0].value;
function createEvent(a) {
  eventName = document.getElementsByName("event")[0].value;
  console.log(eventName);
  console.log(arguments[1]);
}

var label = ["Event", "Start Time", "End Time"];
var schedule = [label];
function store() {
  console.log("test");
  var inputEmail = document.getElementById("event");
  localStorage.setItem("event", inputEmail.value);
  var inputEmail = document.getElementById("event");
  localStorage.setItem("event", inputEmail.value);
  var item = [
    document.getElementById("event").value,
    document.getElementById("stime").value,
    document.getElementById("event").value
  ];
  schedule.push(item);
  localStorage.setItem("schedule", schedule);
  document.getElementById("sch").innerhtml = localStorage.getItem("schedule");
  console.log(item);
  console.log(schedule);
}
function disp() {
  document.getElementById("sch").innerhtml = localStorage.getItem("schedule");
}

function noteStore() {
  var note = document.getElementById("note").value;
  var noteArray = ["Notes"];
  noteArray.push(note);
  localStorage.setItem("notes", noteArray);
  console.log(noteArray);
  document.getElementById("noteDisplay").innerhtml = noteArray;
}

var studyTime = 3;
var breakTime = 1;
var lastBreakTime = 2;
var studyBG = "#6AA6A6";
var breakBG = "#fcf4e8";
var countingBG = "pink";
var studyText = "#fcf4e8";
var breakText = "#482a61";
var countingText = "#482a61";
var audio = new Audio(
  "https://cdn.glitch.me/b2c36ddf-d811-4307-86cb-e74943d685b3%2F114136296.mp3?v=1636904106648"
);
function timerText() {
  var studyMin = Math.trunc(studyTime / 60);
  var secProcess = studyTime - studyMin * 60;
  if (secProcess < 10) {
    var studySec = "0" + secProcess;
  } else {
    var studySec = secProcess;
  }
  document.getElementById("studyOne").innerHTML = studyMin + ":" + studySec;
  document.getElementById("studyTwo").innerHTML = studyMin + ":" + studySec;
  document.getElementById("studyThree").innerHTML = studyMin + ":" + studySec;
  document.getElementById("studyFour").innerHTML = studyMin + ":" + studySec;
  var breakMin = Math.trunc(breakTime / 60);
  var secProcess = breakTime - breakMin * 60;
  if (secProcess < 10) {
    var breakSec = "0" + secProcess;
  } else {
    var breakSec = secProcess;
  }
  document.getElementById("breakOne").innerHTML = breakMin + ":" + breakSec;
  document.getElementById("breakTwo").innerHTML = breakMin + ":" + breakSec;
  document.getElementById("breakThree").innerHTML = breakMin + ":" + breakSec;
  var lastBreakMin = Math.trunc(lastBreakTime / 60);
  var secProcess = lastBreakTime - lastBreakMin * 60;
  if (secProcess < 10) {
    var lastBreakSec = "0" + secProcess;
  } else {
    var lastBreakSec = secProcess;
  }
  document.getElementById("breakFour").innerHTML =
    lastBreakMin + ":" + lastBreakSec;
}
function timerOne() {
  document.getElementById("colOne").style.background = countingBG;
  document.getElementById("colOne").style.color = countingText;
  var sec = studyTime;
  var timer = setInterval(function() {
    var minutes = Math.trunc(sec / 60);
    var secProcess = sec - minutes * 60;
    if (secProcess < 10) {
      var seconds = "0" + secProcess;
    } else {
      var seconds = secProcess;
    }
    document.getElementById("studyOne").innerHTML = minutes + ":" + seconds;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
      document.getElementById("colOne").style.background = studyBG;
      document.getElementById("colOne").style.color = studyText;
      audio.play();
      timerTwo();
    }
  }, 1000);
}
function timerTwo() {
  document.getElementById("colTwo").style.background = countingBG;
  var sec = breakTime;
  var timer = setInterval(function() {
    var minutes = Math.trunc(sec / 60);
    var secProcess = sec - minutes * 60;
    if (secProcess < 10) {
      var seconds = "0" + secProcess;
    } else {
      var seconds = secProcess;
    }
    document.getElementById("breakOne").innerHTML = minutes + ":" + seconds;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
      document.getElementById("colTwo").style.background = breakBG;
      audio.play();
      timerThree();
    }
  }, 1000);
}

function timerThree() {
  document.getElementById("colThree").style.color = countingText;
  document.getElementById("colThree").style.background = countingBG;
  var sec = studyTime;
  var timer = setInterval(function() {
    var minutes = Math.trunc(sec / 60);
    var secProcess = sec - minutes * 60;
    if (secProcess < 10) {
      var seconds = "0" + secProcess;
    } else {
      var seconds = secProcess;
    }
    document.getElementById("studyTwo").innerHTML = minutes + ":" + seconds;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
      document.getElementById("colThree").style.background = studyBG;
      document.getElementById("colThree").style.color = studyText;
      audio.play();
      timerFour();
    }
  }, 1000);
}
function timerFour() {
  document.getElementById("colFour").style.background = countingBG;
  var sec = breakTime;
  var timer = setInterval(function() {
    var minutes = Math.trunc(sec / 60);
    var secProcess = sec - minutes * 60;
    if (secProcess < 10) {
      var seconds = "0" + secProcess;
    } else {
      var seconds = secProcess;
    }
    document.getElementById("breakTwo").innerHTML = minutes + ":" + seconds;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
      document.getElementById("colFour").style.background = breakBG;
      audio.play();
      timerFive();
    }
  }, 1000);
}
function timerFive() {
  document.getElementById("colFive").style.color = countingText;
  document.getElementById("colFive").style.background = countingBG;
  var sec = studyTime;
  var timer = setInterval(function() {
    var minutes = Math.trunc(sec / 60);
    var secProcess = sec - minutes * 60;
    if (secProcess < 10) {
      var seconds = "0" + secProcess;
    } else {
      var seconds = secProcess;
    }
    document.getElementById("studyThree").innerHTML = minutes + ":" + seconds;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
      document.getElementById("colFive").style.background = studyBG;
      document.getElementById("colFive").style.color = studyText;
      audio.play();
      timerSix();
    }
  }, 1000);
}
function timerSix() {
  document.getElementById("colSix").style.background = countingBG;
  var sec = breakTime;
  var timer = setInterval(function() {
    var minutes = Math.trunc(sec / 60);
    var secProcess = sec - minutes * 60;
    if (secProcess < 10) {
      var seconds = "0" + secProcess;
    } else {
      var seconds = secProcess;
    }
    document.getElementById("breakThree").innerHTML = minutes + ":" + seconds;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
      document.getElementById("colSix").style.background = breakBG;
      audio.play();
      timerSeven();
    }
  }, 1000);
}
function timerSeven() {
  document.getElementById("colSeven").style.color = countingText;
  document.getElementById("colSeven").style.background = countingBG;
  var sec = studyTime;
  var timer = setInterval(function() {
    var minutes = Math.trunc(sec / 60);
    var secProcess = sec - minutes * 60;
    if (secProcess < 10) {
      var seconds = "0" + secProcess;
    } else {
      var seconds = secProcess;
    }
    document.getElementById("studyFour").innerHTML = minutes + ":" + seconds;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
      document.getElementById("colSeven").style.background = studyBG;
      document.getElementById("colSeven").style.color = studyText;
      audio.play();
      timerEight();
    }
  }, 1000);
}
function timerEight() {
  document.getElementById("colEight").style.background = countingBG;
  var sec = lastBreakTime;
  var timer = setInterval(function() {
    var minutes = Math.trunc(sec / 60);
    var secProcess = sec - minutes * 60;
    if (secProcess < 10) {
      var seconds = "0" + secProcess;
    } else {
      var seconds = secProcess;
    }
    document.getElementById("breakFour").innerHTML = minutes + ":" + seconds;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
      document.getElementById("colEight").style.background = breakBG;
      alert(
        "You're finished! If you'd like to go through another cycle, start the timer again!"
      );
    }
  }, 1000);
}
