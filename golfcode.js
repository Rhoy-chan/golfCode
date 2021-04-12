const click = document.getElementById("tick").onclick = golfScore;


function golfScore(par, strokes) {
    // Only change code below this line

   par = Math.floor(Math.random()*10);
   document.getElementById("par").innerHTML = par;
   stroke = Math.floor(Math.random()*10)
   document.getElementById("strokes").innerHTML = stroke;

   return (stroke == 1) ? document.getElementById("output").innerText = "Hole-in-one!":
   (stroke <= par -2) ? document.getElementById("output").innerText = "Eagle":
   (stroke == par -1) ? document.getElementById("output").innerText = "Birdie":
   (stroke == par ) ? document.getElementById("output").innerText = "Par":
   (stroke == par +1) ? document.getElementById("output").innerText = "Bogey":
   (stroke == par +2) ? document.getElementById("output").innerText = "Double Bogey":
   document.getElementById("output").innerHTML = "Go Home"

}
   /*
  
    if (strokes === 1) return "Hole-in-one!";
  
    else if ((strokes - par) <= -2) return 'Eagle';
  
    else if ((strokes - par) === -1) return 'Birdie';
  
    else if (strokes === par) return 'Par';
  
    else if ((strokes - par) === 1) return 'Bogey';
  
    else if ((strokes - par) === 2) return 'Double Bogey';
  
    else return 'Go Home!';
    // Only change code above this line
  }
  
  // Change these values to test
  console.log(golfScore(5,8));
  */