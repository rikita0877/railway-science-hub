const questions = [
  // PHYSICS
  {q:"विद्युत धारा की SI इकाई क्या है?", options:["Volt","Ohm","Ampere","Watt"], answer:2},
  {q:"बल की SI इकाई क्या है?", options:["Joule","Newton","Watt","Pascal"], answer:1},
  {q:"कार्य की SI इकाई क्या है?", options:["Newton","Joule","Watt","Volt"], answer:1},
  {q:"शक्ति की SI इकाई क्या है?", options:["Joule","Watt","Newton","Ampere"], answer:1},
  {q:"प्रकाश की चाल निर्वात में लगभग कितनी होती है?", options:["3 × 10⁸ m/s","3 × 10⁶ m/s","3 × 10⁴ m/s","3 × 10² m/s"], answer:0},
  {q:"ध्वनि किस माध्यम में यात्रा नहीं कर सकती?", options:["वायु","जल","ठोस","निर्वात"], answer:3},
  {q:"दर्पण में बनने वाला प्रतिबिंब किस घटना के कारण बनता है?", options:["अपवर्तन","परावर्तन","विसरण","विवर्तन"], answer:1},
  {q:"विद्युत प्रतिरोध की SI इकाई क्या है?", options:["Volt","Ampere","Ohm","Watt"], answer:2},
  {q:"तापमान मापने के लिए किस यंत्र का उपयोग किया जाता है?", options:["बैरोमीटर","थर्मामीटर","एमीटर","वोल्टमीटर"], answer:1},
  {q:"पृथ्वी पर वस्तुओं को नीचे की ओर खींचने वाला बल कौन सा है?", options:["घर्षण बल","चुंबकीय बल","गुरुत्वाकर्षण बल","विद्युत बल"], answer:2},
  {q:"वाहन में पीछे देखने के लिए सामान्यतः किस दर्पण का प्रयोग होता है?", options:["समतल","अवतल","उत्तल","बेलनाकार"], answer:2},
  {q:"किस रंग की तरंगदैर्ध्य सबसे अधिक होती है?", options:["बैंगनी","नीला","हरा","लाल"], answer:3},
  {q:"आवृत्ति की SI इकाई क्या है?", options:["Hertz","Newton","Joule","Pascal"], answer:0},
  {q:"वायुदाब मापने वाला यंत्र कौन सा है?", options:["थर्मामीटर","बैरोमीटर","हाइड्रोमीटर","एमीटर"], answer:1},
  {q:"गतिज ऊर्जा किसके कारण होती है?", options:["स्थिति","गति","तापमान","दाब"], answer:1},
  {q:"स्थितिज ऊर्जा किससे संबंधित है?", options:["स्थिति","गति","धारा","आवृत्ति"], answer:0},
  {q:"चुंबक के कितने ध्रुव होते हैं?", options:["एक","दो","तीन","चार"], answer:1},

  // CHEMISTRY
  {q:"पानी का रासायनिक सूत्र क्या है?", options:["CO₂","H₂O","O₂","NaCl"], answer:1},
  {q:"ऑक्सीजन का रासायनिक प्रतीक क्या है?", options:["Ox","O","Og","Om"], answer:1},
  {q:"कार्बन डाइऑक्साइड का सूत्र क्या है?", options:["CO","CO₂","C₂O","CaO"], answer:1},
  {q:"साधारण नमक का रासायनिक सूत्र क्या है?", options:["NaCl","KCl","HCl","NaOH"], answer:0},
  {q:"सोने का रासायनिक प्रतीक क्या है?", options:["Ag","Au","Gd","Go"], answer:1},
  {q:"चांदी का रासायनिक प्रतीक क्या है?", options:["Si","Ag","Al","Au"], answer:1},
  {q:"लोहे का रासायनिक प्रतीक क्या है?", options:["Ir","Fe","In","I"], answer:1},
  {q:"पानी का pH लगभग कितना होता है?", options:["2","5","7","10"], answer:2},
  {q:"अम्ल का स्वाद सामान्यतः कैसा होता है?", options:["मीठा","खट्टा","कड़वा","नमकीन"], answer:1},
  {q:"क्षार का स्वाद सामान्यतः कैसा होता है?", options:["मीठा","खट्टा","कड़वा","नमकीन"], answer:2},
  {q:"वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस है?", options:["ऑक्सीजन","नाइट्रोजन","कार्बन डाइऑक्साइड","हाइड्रोजन"], answer:1},
  {q:"सबसे हल्की गैस कौन सी है?", options:["ऑक्सीजन","नाइट्रोजन","हाइड्रोजन","हीलियम"], answer:2},
  {q:"लोहे पर जंग लगने के लिए मुख्यतः क्या आवश्यक है?", options:["ऑक्सीजन और नमी","केवल नाइट्रोजन","केवल CO₂","हीलियम"], answer:0},
  {q:"बेकिंग सोडा का रासायनिक सूत्र क्या है?", options:["NaCl","NaHCO₃","Na₂CO₃","CaCO₃"], answer:1},
  {q:"चूने का पानी किसका विलयन है?", options:["Ca(OH)₂","NaOH","HCl","KOH"], answer:0},
  {q:"कमरे के तापमान पर पारा किस अवस्था में होता है?", options:["ठोस","द्रव","गैस","प्लाज्मा"], answer:1},
  {q:"हीरा और ग्रेफाइट किस तत्व के रूप हैं?", options:["ऑक्सीजन","कार्बन","सल्फर","लोहा"], answer:1},

  // BIOLOGY
  {q:"मानव शरीर में रक्त को पंप करने वाला अंग कौन सा है?", options:["फेफड़ा","हृदय","गुर्दा","यकृत"], answer:1},
  {q:"मानव शरीर का सबसे बड़ा अंग कौन सा है?", options:["हृदय","त्वचा","फेफड़ा","यकृत"], answer:1},
  {q:"मानव शरीर में सामान्यतः कितने जोड़े गुणसूत्र होते हैं?", options:["22","23","24","46"], answer:1},
  {q:"पौधों में भोजन निर्माण की प्रक्रिया क्या कहलाती है?", options:["श्वसन","पाचन","प्रकाश संश्लेषण","उत्सर्जन"], answer:2},
  {q:"प्रकाश संश्लेषण में पौधे मुख्यतः कौन सी गैस लेते हैं?", options:["ऑक्सीजन","नाइट्रोजन","कार्बन डाइऑक्साइड","हाइड्रोजन"], answer:2},
  {q:"मानव शरीर में ऑक्सीजन का परिवहन मुख्यतः कौन करता है?", options:["प्लाज्मा","हीमोग्लोबिन","प्लेटलेट्स","पित्त"], answer:1},
  {q:"रक्त का लाल रंग किसके कारण होता है?", options:["क्लोरोफिल","हीमोग्लोबिन","इंसुलिन","केराटिन"], answer:1},
  {q:"मानव शरीर में रक्त को छानने का काम मुख्यतः कौन करता है?", options:["हृदय","गुर्दे","फेफड़े","मस्तिष्क"], answer:1},
  {q:"मानव शरीर का नियंत्रण केंद्र कौन सा अंग है?", options:["हृदय","मस्तिष्क","गुर्दा","यकृत"], answer:1},
  {q:"इंसुलिन हार्मोन किस अंग से बनता है?", options:["यकृत","अग्न्याशय","हृदय","गुर्दा"], answer:1},
  {q:"विटामिन C की कमी से कौन सा रोग हो सकता है?", options:["स्कर्वी","रिकेट्स","रातांधता","बेरी-बेरी"], answer:0},
  {q:"विटामिन D की कमी से कौन सा रोग हो सकता है?", options:["स्कर्वी","रिकेट्स","एनीमिया","गलगंड"], answer:1},
  {q:"विटामिन A की कमी से क्या हो सकता है?", options:["रातांधता","स्कर्वी","रिकेट्स","बेरी-बेरी"], answer:0},
  {q:"मानव शरीर में भोजन का पाचन मुख्यतः कहाँ पूरा होता है?", options:["मुख","ग्रासनली","छोटी आंत","बड़ी आंत"], answer:2},
  {q:"पौधों में जल का परिवहन किस ऊतक द्वारा होता है?", options:["फ्लोएम","जाइलम","एपिडर्मिस","मेरिस्टेम"], answer:1},
  {q:"पौधों में भोजन का परिवहन किस ऊतक द्वारा होता है?", options:["जाइलम","फ्लोएम","कॉर्क","एपिडर्मिस"], answer:1}
];

let current = 0;
let score = 0;
let selected = false;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");

function loadQuestion() {
  selected = false;
  nextBtn.disabled = true;

  const item = questions[current];

  progressEl.textContent =
    `Question ${current + 1} of ${questions.length}`;

  questionEl.textContent = item.q;
  optionsEl.innerHTML = "";

  item.options.forEach((option, i) => {
    const btn = document.createElement("button");

    btn.className = "option";
    btn.textContent = option;

    btn.onclick = () => selectAnswer(i, btn);

    optionsEl.appendChild(btn);
  });
}

function selectAnswer(i, btn) {
  if (selected) return;

  selected = true;
  nextBtn.disabled = false;

  const correct = questions[current].answer;

  document.querySelectorAll(".option").forEach((b, idx) => {
    b.disabled = true;

    if (idx === correct) {
      b.classList.add("correct");
    }
  });

  if (i === correct) {
    score++;
  } else {
    btn.classList.add("wrong");
  }
}

nextBtn.onclick = () => {
  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quizBox").innerHTML = `
      <h2>🎉 Quiz Complete!</h2>
      <p class="score">
        आपका Score: <b>${score}/${questions.length}</b>
      </p>
      <button class="btn" onclick="location.reload()">
        Try Again
      </button>
    `;
  }
};

loadQuestion();
