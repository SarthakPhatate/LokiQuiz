var readlineSync = require('readline-sync');
let score=0;

// Get user name
var userName = readlineSync.question("Hi There What's your name ? -> ");
console.log('--------------------------------------------------------------------');
// print the welocome msg with the layers name
console.log("Hello " + userName + "\nWelcome to the Loki Quiz 'How well you know Loki from Marvel Universe'" );
console.log("--------------------------------------------------------------------");

// function to implement he game logic
function start_game(question, option, answer, n){
  console.log("Q"+ (n+1) + ". " + question);
  console.log(option);
  var ans = readlineSync.question("Enter correct option -> ");

  if(ans.toLowerCase() === answer){
    console.log("nice!! that's correct");
    score+=1;
  }else{
    console.log("Ohh!! that's wrong");
  }

  console.log("your score : " + score);
  console.log("--------------------------------------------------------------------");
}

var topScorers = [{name: "Nilesh", score: 7},{name: "Rahul", score: 5}]

// array of questions to ask
var questions = [
  {
  question: "Loki is called the GOD of?",
  option: "a) Chaos\nb) Love\nc) Mischief\nd) War",
  answer: "c"
},{
  question: "Where was loki born?",
  option: "a) Midgard\nb) Asgard\nc) London\nd) Nivara",
  answer: "b"
},{
  question: "Who is loki's Biological Father?",
  option: "a) Odin\nb) Tyr\nc) Laufey\nd) Bor",
  answer: "c"
},{
  question: "Which actor plays the role of loki in MCU?",
  option: "a) Tom Hiddleston\nb) Tom Holland\nc) Chris Evan\nd) Jeremy Rener",
  answer: "a"
},{
  question: "Which Infinity stone powered loki's scepter?",
  option: "a) Mind Stone\nb) Power Stone\nc) Reality Stone\nd) Soul Stone",
  answer: "a"
},{
  question: "What is Loki's personal talent?",
  option: "a) Painting\nb) Dancing\nc) Singing\nd) Comedy",
  answer: "c"
},{
  question: "What did loki use to escape the battle of New York?",
  option: "a) Scepter\nb) Tesseract\nc) Magic\nd) Reality Stone",
  answer: "b"
},{
  question: "What race is loki born as?",
  option: "a) Titan\nb) Pulvian\nc) kree\nd) Frost Giant",
  answer: "d"
}]

// loop over each question
for(var i=0; i<questions.length; i++){
  start_game(questions[i].question,questions[i].option,questions[i].answer,i);
}

// print the final score
console.log("Yay!! You SCORED -> "+ score + "/" + questions.length);

//check for highest score
if(score > topScorers[0].score){
  console.log("CONGRATULATION!!!!!\n"+ userName + " you are the top scorer in game\nsend your score screen-shot and I will update the record")
}else{
  console.log("Top Scorer of Game:")
  for(var i=0; i<topScorers.length; i++){
    console.log("name:" + topScorers[i].name + "  score:" + topScorers[i].score)
  }
}