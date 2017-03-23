var h1 = document.getElementsByTagName('h1')[0];   
var m = 0,
  s = 0,
  ms = 0,
  play = false;
stopwatch = setInterval(function() {
  if (!play) return;
  if (ms === 99) {
    s += 1;
    ms = 0;
  } else {
    ms += 1;
  }
  if(s >= 59){
  	m += 1;
  	s = 0;
  }

  update();
}, 10);

function update() {
  h1.textContent = (m ? (m > 9 ? m : "0" + m) : "00") + ":" + (s ? (s > 9 ? s : "0" + s) : "00") + ":" + (ms > 9 ? ms : "0" + ms);
}

function toggle() {
  if (!play) {
    console.log(m+":"+s+":"+ms);
  }
  play = !play;
}
