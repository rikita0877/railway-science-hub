const questions = [
  {q:"पानी का रासायनिक सूत्र क्या है?", options:["CO₂","H₂O","O₂","NaCl"], answer:1},
  {q:"विद्युत धारा की SI इकाई क्या है?", options:["Volt","Ohm","Ampere","Watt"], answer:2},
  {q:"मानव शरीर में रक्त को पंप करने वाला अंग कौन सा है?", options:["फेफड़ा","हृदय","गुर्दा","यकृत"], answer:1},
  {q:"प्रकाश की चाल निर्वात में लगभग कितनी होती है?", options:["3 × 10⁸ m/s","3 × 10⁶ m/s","3 × 10⁴ m/s","3 × 10² m/s"], answer:0},
  {q:"पौधों में भोजन निर्माण की प्रक्रिया क्या कहलाती है?", options:["श्वसन","पाचन","प्रकाश संश्लेषण","उत्सर्जन"], answer:2}
];

let current=0, score=0, selected=false;
const questionEl=document.getElementById("question");
const optionsEl=document.getElementById("options");
const nextBtn=document.getElementById("nextBtn");
const progressEl=document.getElementById("progress");

function loadQuestion(){
  selected=false; nextBtn.disabled=true;
  const item=questions[current];
  progressEl.textContent=`Question ${current+1} of ${questions.length}`;
  questionEl.textContent=item.q;
  optionsEl.innerHTML="";
  item.options.forEach((option,i)=>{
    const btn=document.createElement("button");
    btn.className="option";
    btn.textContent=option;
    btn.onclick=()=>selectAnswer(i,btn);
    optionsEl.appendChild(btn);
  });
}
function selectAnswer(i,btn){
  if(selected)return;
  selected=true; nextBtn.disabled=false;
  const correct=questions[current].answer;
  document.querySelectorAll(".option").forEach((b,idx)=>{
    b.disabled=true;
    if(idx===correct)b.classList.add("correct");
  });
  if(i===correct) score++;
  else btn.classList.add("wrong");
}
nextBtn.onclick=()=>{
  current++;
  if(current<questions.length) loadQuestion();
  else{
    document.getElementById("quizBox").innerHTML=
      `<h2>🎉 Quiz Complete!</h2><p class="score">आपका Score: <b>${score}/${questions.length}</b></p>
       <button class="btn" onclick="location.reload()">Try Again</button>`;
  }
};
loadQuestion();
