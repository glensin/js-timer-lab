// your code here:

// start stop pause watch
// when click on start, timer start counting with seconds increasing,
// stop watch text change to "timer display :"
// there must be a var second, var counter
// setInterval to use to delay timer counter at 1second
// when click on 'pause' use clearInterval() to pause
// when click on start again timer continue
// when click on reset, use clearInterval to stop, change text to display
// 'stop watch'

$("#reset").on('click',resetPress)
$("#start").on('click',startPress)
$("#pause").on('click',pausePress)

var second = 0
var timer
var counterState = "off"
// function as a switch to on off the counter

function updateTime () {
  updateTimeDisplay ()
  second ++
}
// this is to add second counter as a function

function updateTimeDisplay () {
 $('#timer').text('timer display:' + second)
}

function startPress () {
  if (counterState === "off") {
  timer = setInterval(updateTime,1000)
    counterState = "on"
console.log('counterstate on');
  }
}

function pausePress (){
  if (counterState==="on") {
    timer = clearInterval(timer)
    counterState = "off"
    console.log("pause");
  }
   else {
     timer = setInterval(updateTime,1000)
     counterState = "on"
     console.log("continue");
   }
}

function resetPress(){
  timer = clearInterval(timer)
  $('#timer').text('Stop Watch')
  counterState = "off"
  second = 0
}

// this is to show the display on timerID
