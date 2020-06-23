var numHum,numProg,vivod;

vivod = document.getElementById('out');
numProg = Math.floor(Math.random() * 100 + 1);
console.log(numProg);
function f1() {
   numHum = document.getElementById('Vdcsl').value;
   console.log(numHum);
  if(numHum == numProg){
    vivod.innerHTML = "Ты угадал число";
  }
  else if (numHum > numProg) {
    vivod.innerHTML = "Загаданное число меньше";
  }
  else {
    vivod.innerHTML = "Загаданное число больше";
  }
}
