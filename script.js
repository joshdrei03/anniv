const reasons = [
  "You're beautiful (hehe).",
  "You get my WEIRD humor (nyenye)",
  "I love your kisses. (Obviously)",
  "I love your hugs.",
  "I love how we never run out of conversations.",
  "You're beatiful (hehe).",
  "You make me feel cherished.",
  "I love how you make 'sagot' sakin even though you're not 18 yet. (sorry na, di ko alam english ng sagot)",
  "You bring happiness every day. (all the stuff we do, especially moviesss)",
  "I love the fact that I'm the first guy you introduced to your family.",
  "You make me feel safe in your arms.",
  "I love how you're always there for me.",
  "I love your beauty, inside and out.",
  "I love how we both grow inside and outside of our relationship.",
  "I love how you want me all for you. (kahit alam kong mali ako kasi kailangan mo pa magselos)",
  "I love your perseverance. (we always get past our problems)",
  "You listen with your heart.",
  "You always give me peace of mind, never needing to be jealous of other boys. (bragging rights ko yan)",
  "You've taught me there's more to love.",
  "We have a spark that never goes out.",
  "I admire your character, the traits that I fell in love with since we first met.",
  "You make me feel loved.",
  "Sex mwehehehehe.",
  "I'm in love with the reality of building that future with you, step by step."
];

let current = -1;

const textEl = document.getElementById("reason-text");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

function updateText() {
  textEl.textContent = reasons[current];
  prevBtn.disabled = current <= 0;
  nextBtn.disabled = current >= reasons.length - 1;
}

nextBtn.addEventListener("click", () => {
  if (current < reasons.length - 1) {
    current++;
    updateText();
  }
});

prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    updateText();
  }
});
