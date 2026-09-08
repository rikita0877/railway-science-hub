const questions = [
  // ==================== PHYSICS ====================

  {
    q: "विद्युत धारा की SI इकाई क्या है?\nWhat is the SI unit of electric current?",
    options: ["Volt", "Ohm", "Ampere", "Watt"],
    answer: 2
  },

  {
    q: "बल की SI इकाई क्या है?\nWhat is the SI unit of force?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    answer: 1
  },

  {
    q: "कार्य की SI इकाई क्या है?\nWhat is the SI unit of work?",
    options: ["Newton", "Joule", "Watt", "Volt"],
    answer: 1
  },

  {
    q: "शक्ति की SI इकाई क्या है?\nWhat is the SI unit of power?",
    options: ["Joule", "Watt", "Newton", "Ampere"],
    answer: 1
  },

  {
    q: "प्रकाश की चाल निर्वात में लगभग कितनी होती है?\nWhat is the approximate speed of light in vacuum?",
    options: [
      "3 × 10⁸ m/s",
      "3 × 10⁶ m/s",
      "3 × 10⁴ m/s",
      "3 × 10² m/s"
    ],
    answer: 0
  },

  {
    q: "ध्वनि किस माध्यम में यात्रा नहीं कर सकती?\nIn which medium can sound not travel?",
    options: ["Air", "Water", "Solid", "Vacuum"],
    answer: 3
  },

  {
    q: "दर्पण में प्रतिबिंब किस घटना के कारण बनता है?\nImage formation in a mirror is due to which phenomenon?",
    options: ["Refraction", "Reflection", "Dispersion", "Diffraction"],
    answer: 1
  },

  {
    q: "विद्युत प्रतिरोध की SI इकाई क्या है?\nWhat is the SI unit of electrical resistance?",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    answer: 2
  },

  {
    q: "तापमान मापने के लिए किस यंत्र का उपयोग किया जाता है?\nWhich instrument is used to measure temperature?",
    options: ["Barometer", "Thermometer", "Ammeter", "Voltmeter"],
    answer: 1
  },

  {
    q: "पृथ्वी वस्तुओं को नीचे की ओर किस बल से खींचती है?\nWhich force pulls objects towards the Earth?",
    options: [
      "Frictional force",
      "Magnetic force",
      "Gravitational force",
      "Electric force"
    ],
    answer: 2
  },

  {
    q: "वाहन में पीछे देखने के लिए सामान्यतः किस दर्पण का प्रयोग होता है?\nWhich mirror is generally used as a rear-view mirror in vehicles?",
    options: ["Plane", "Concave", "Convex", "Cylindrical"],
    answer: 2
  },

  {
    q: "किस रंग की तरंगदैर्ध्य सबसे अधिक होती है?\nWhich colour has the longest wavelength?",
    options: ["Violet", "Blue", "Green", "Red"],
    answer: 3
  },

  {
    q: "आवृत्ति की SI इकाई क्या है?\nWhat is the SI unit of frequency?",
    options: ["Hertz", "Newton", "Joule", "Pascal"],
    answer: 0
  },

  {
    q: "वायुदाब मापने वाला यंत्र कौन सा है?\nWhich instrument is used to measure atmospheric pressure?",
    options: ["Thermometer", "Barometer", "Hydrometer", "Ammeter"],
    answer: 1
  },

  {
    q: "गतिज ऊर्जा किसके कारण होती है?\nKinetic energy is due to what?",
    options: ["Position", "Motion", "Temperature", "Pressure"],
    answer: 1
  },

  {
    q: "स्थितिज ऊर्जा किससे संबंधित है?\nPotential energy is related to what?",
    options: ["Position", "Motion", "Current", "Frequency"],
    answer: 0
  },

  {
    q: "चुंबक के कितने ध्रुव होते हैं?\nHow many poles does a magnet have?",
    options: ["One", "Two", "Three", "Four"],
    answer: 1
  },


  // ==================== CHEMISTRY ====================

  {
    q: "पानी का रासायनिक सूत्र क्या है?\nWhat is the chemical formula of water?",
    options: ["CO₂", "H₂O", "O₂", "NaCl"],
    answer: 1
  },

  {
    q: "ऑक्सीजन का रासायनिक प्रतीक क्या है?\nWhat is the chemical symbol of oxygen?",
    options: ["Ox", "O", "Og", "Om"],
    answer: 1
  },

  {
    q: "कार्बन डाइऑक्साइड का सूत्र क्या है?\nWhat is the chemical formula of carbon dioxide?",
    options: ["CO", "CO₂", "C₂O", "CaO"],
    answer: 1
  },

  {
    q: "साधारण नमक का रासायनिक सूत्र क्या है?\nWhat is the chemical formula of common salt?",
    options: ["NaCl", "KCl", "HCl", "NaOH"],
    answer: 0
  },

  {
    q: "सोने का रासायनिक प्रतीक क्या है?\nWhat is the chemical symbol of gold?",
    options: ["Ag", "Au", "Gd", "Go"],
    answer: 1
  },

  {
    q: "चांदी का रासायनिक प्रतीक क्या है?\nWhat is the chemical symbol of silver?",
    options: ["Si", "Ag", "Al", "Au"],
    answer: 1
  },

  {
    q: "लोहे का रासायनिक प्रतीक क्या है?\nWhat is the chemical symbol of iron?",
    options: ["Ir", "Fe", "In", "I"],
    answer: 1
  },

  {
    q: "शुद्ध पानी का pH लगभग कितना होता है?\nWhat is the approximate pH of pure water?",
    options: ["2", "5", "7", "10"],
    answer: 2
  },

  {
    q: "अम्ल का स्वाद सामान्यतः कैसा होता है?\nWhat is the usual taste of acids?",
    options: ["Sweet", "Sour", "Bitter", "Salty"],
    answer: 1
  },

  {
    q: "क्षार का स्वाद सामान्यतः कैसा होता है?\nWhat is the usual taste of bases?",
    options: ["Sweet", "Sour", "Bitter", "Salty"],
    answer: 2
  },

  {
    q: "वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस है?\nWhich gas is present in the highest amount in the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    answer: 1
  },

  {
    q: "सबसे हल्की गैस कौन सी है?\nWhich is the lightest gas?",
    options: ["Oxygen", "Nitrogen", "Hydrogen", "Helium"],
    answer: 2
  },

  {
    q: "लोहे पर जंग लगने के लिए मुख्यतः क्या आवश्यक है?\nWhat is mainly required for rusting of iron?",
    options: [
      "Oxygen and moisture",
      "Only nitrogen",
      "Only CO₂",
      "Helium"
    ],
    answer: 0
  },

  {
    q: "बेकिंग सोडा का रासायनिक सूत्र क्या है?\nWhat is the chemical formula of baking soda?",
    options: ["NaCl", "NaHCO₃", "Na₂CO₃", "CaCO₃"],
    answer: 1
  },

  {
    q: "चूने का पानी किसका विलयन है?\nLime water is a solution of which compound?",
    options: ["Ca(OH)₂", "NaOH", "HCl", "KOH"],
    answer: 0
  },

  {
    q: "कमरे के तापमान पर पारा किस अवस्था में होता है?\nWhat is the physical state of mercury at room temperature?",
    options: ["Solid", "Liquid", "Gas", "Plasma"],
    answer: 1
  },

  {
    q: "हीरा और ग्रेफाइट किस तत्व के रूप हैं?\nDiamond and graphite are forms of which element?",
    options: ["Oxygen", "Carbon", "Sulphur", "Iron"],
    answer: 1
  },


  // ==================== BIOLOGY ====================

  {
    q: "मानव शरीर में रक्त को पंप करने वाला अंग कौन सा है?\nWhich organ pumps blood in the human body?",
    options: ["Lungs", "Heart", "Kidney", "Liver"],
    answer: 1
  },

  {
    q: "मानव शरीर का सबसे बड़ा अंग कौन सा है?\nWhat is the largest organ of the human body?",
    options: ["Heart", "Skin", "Lungs", "Liver"],
    answer: 1
  },

  {
    q: "मानव शरीर में सामान्यतः कितने जोड़े गुणसूत्र होते हैं?\nHow many pairs of chromosomes are normally present in humans?",
    options: ["22", "23", "24", "46"],
    answer: 1
  },

  {
    q: "पौधों में भोजन निर्माण की प्रक्रिया क्या कहलाती है?\nWhat is the process by which plants prepare food called?",
    options: ["Respiration", "Digestion", "Photosynthesis", "Excretion"],
    answer: 2
  },

  {
    q: "प्रकाश संश्लेषण में पौधे मुख्यतः कौन सी गैस लेते हैं?\nWhich gas do plants mainly take in during photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    answer: 2
  },

  {
    q: "मानव शरीर में ऑक्सीजन का परिवहन मुख्यतः कौन करता है?\nWhat mainly transports oxygen in the human body?",
    options: ["Plasma", "Hemoglobin", "Platelets", "Bile"],
    answer: 1
  },

  {
    q: "रक्त का लाल रंग किसके कारण होता है?\nWhat gives blood its red colour?",
    options: ["Chlorophyll", "Hemoglobin", "Insulin", "Keratin"],
    answer: 1
  },

  {
    q: "मानव शरीर में रक्त को छानने का काम मुख्यतः कौन करता है?\nWhich organ mainly filters the blood in the human body?",
    options: ["Heart", "Kidneys", "Lungs", "Brain"],
    answer: 1
  },

  {
    q: "मानव शरीर का नियंत्रण केंद्र कौन सा अंग है?\nWhich organ is the control centre of the human body?",
    options: ["Heart", "Brain", "Kidney", "Liver"],
    answer: 1
  },

  {
    q: "इंसुलिन हार्मोन किस अंग से बनता है?\nWhich organ produces the hormone insulin?",
    options: ["Liver", "Pancreas", "Heart", "Kidney"],
    answer: 1
  },

  {
    q: "विटामिन C की कमी से कौन सा रोग हो सकता है?\nWhich disease can occur due to vitamin C deficiency?",
    options: ["Scurvy", "Rickets", "Night blindness", "Beriberi"],
    answer: 0
  },

  {
    q: "विटामिन D की कमी से कौन सा रोग हो सकता है?\nWhich disease can occur due to vitamin D deficiency?",
    options: ["Scurvy", "Rickets", "Anaemia", "Goitre"],
    answer: 1
  },

  {
    q: "विटामिन A की कमी से क्या हो सकता है?\nWhat can occur due to vitamin A deficiency?",
    options: ["Night blindness", "Scurvy", "Rickets", "Beriberi"],
    answer: 0
  },

  {
    q: "मानव शरीर में भोजन का पाचन मुख्यतः कहाँ पूरा होता है?\nWhere is digestion of food mainly completed in the human body?",
    options: ["Mouth", "Oesophagus", "Small intestine", "Large intestine"],
    answer: 2
  },

  {
    q: "पौधों में जल का परिवहन किस ऊतक द्वारा होता है?\nWhich tissue transports water in plants?",
    options: ["Phloem", "Xylem", "Epidermis", "Meristem"],
    answer: 1
  },

  {
    q: "पौधों में भोजन का परिवहन किस ऊतक द्वारा होता है?\nWhich tissue transports food in plants?",
    options: ["Xylem", "Phloem", "Cork", "Epidermis"],
    answer: 1
  }
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
        आपका Score / Your Score:
        <b>${score}/${questions.length}</b>
      </p>

      <button class="btn" onclick="location.reload()">
        Try Again
      </button>

    `;
  }

};


loadQuestion();

