// =========================
// CONTADOR
// =========================

const startDate = new Date("2024-11-19 00:00:00");

function updateCounter(){
const now = new Date();
const diff = now - startDate;

const days = Math.floor(diff/(1000*60*60*24));
const hours = Math.floor(diff/(1000*60*60))%24;
const minutes = Math.floor(diff/(1000*60))%60;
const seconds = Math.floor(diff/1000)%60;

document.getElementById("contador").innerHTML =
days + " días " +
hours + " horas " +
minutes + " minutos " +
seconds + " segundos ";
}

setInterval(updateCounter,1000);
updateCounter();


// =========================
// SONIDO 8-BIT (optimizado)
// =========================

// Creamos el contexto UNA sola vez
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playBeep(){
const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.type = "square"; // sonido retro
oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

oscillator.start(audioCtx.currentTime);
oscillator.stop(audioCtx.currentTime + 0.1);
}


// =========================
// CARRUSEL MANUAL
// =========================

const slides = document.querySelectorAll(".carousel img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index){
slides[currentSlide].classList.remove("active");
currentSlide = (index + slides.length) % slides.length;
slides[currentSlide].classList.add("active");
}

// Sonido EXACTAMENTE al presionar
nextBtn.addEventListener("click", ()=>{
playBeep();
showSlide(currentSlide + 1);
});

prevBtn.addEventListener("click", ()=>{
playBeep();
showSlide(currentSlide - 1);
});
