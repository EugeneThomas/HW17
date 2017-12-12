var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  /* YOUR IMPLEMENTATION */
  return Math.sqrt((x0-x1)*(x0-x1)+(y0-y1)*(y0-y1));
};


var findIt = function(e) {
  /* YOUR IMPLEMENTATION */
  if (distance(e.X, e.Y, targetX, targetY) < 5) {
    // Do something good
  }
  else {
    // Convert the box to a specific color
  }
};

/*
your OTHER FXNS
*/

var colorScheme = function(e) {
  // Use the distance to change the color
  // Use backgroundcolor inside of the body tag. 
}

box.addEventListener("mousemove", findIt);
