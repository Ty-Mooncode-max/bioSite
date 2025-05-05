// Quote Generator / randomizer application
const quotes = [
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "Act as if what you do makes a difference. It does. – William James",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Fall seven times, stand up eight. – Japanese Proverb",
]
const usedIndexes = new Set()
const quoteELement = document.getElementById("quote")
function generateQuote() {
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }
    while (true) {
        const randomIdx = Math.floor(Math.random()* quotes.length)

        if(usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteELement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}

// Page color flipper application
function setColor(color) {
    document.body.style.backgroundColor = color;  // Apply color to the body
}

function randomColor() {
    const colors = [
    'green', 'red', 'blue', 'orange', 'purple', 'yellow', 'pink', 'brown', 'black', 'white',
    'cyan', 'magenta', 'lime', 'olive', 'teal', 'navy', 'maroon', 'gray', 'silver', 'gold',
    'beige', 'coral', 'turquoise', 'violet', 'indigo', 'tan', 'salmon', 'aquamarine', 'chocolate', 'lavender'
];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];  // Apply color to the body
}


const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;
myButton.onclick = function (){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;

}
