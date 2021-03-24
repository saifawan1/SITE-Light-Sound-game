//global constants
const clueHoldTime= 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before playing sequence

//global variables
var patternSize = 3;
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5 // must be between 0.0 and 1.0
var guessCounter = 0;


function startGame(){
  progress = 0;
  gamePlaying = true;
  patternSize = document.getElementById("patternLength").value;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}
function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i<=progress;i++){ //for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime;
  }
}
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}
function guess(btn){
  console.log("user guessed: " + btn + " progress: " + progress + " pp: " + pattern[progress]);
  if(gamePlaying){
    if(btn == pattern[guessCounter]){ //correct guess
      if(guessCounter == progress){ 
         if(progress == pattern.length-1){ //win game
           winGame();
         }
        else{ //play the next sequence
          progress++;
          playClueSequence();
        }
      }
       else{ //check the next guess in this sequence
        guessCounter++;
      }
    }  
    else{ //wrong guess
    loseGame();
    }
  }
}
function generatePattern(){
  patternSize = document.getElementById("patternLength");
  if(patternSize.value == ''){
    patternSize = 3;
  }
  else{
    patternSize = patternSize.value;
  }
  console.log('patternSize: ' + patternSize);
  pattern = Array.from({length: patternSize}, () => Math.floor(Math.random() * (5-1))+1);
  console.log(pattern);
}
  
