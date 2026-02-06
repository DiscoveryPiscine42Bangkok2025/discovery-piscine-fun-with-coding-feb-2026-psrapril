var colors = ["red", "green", "blue"];
var colorIndex = 0;

function grow() {
    var balloon = document.getElementById("balloon")
    var width = balloon.offsetWidth;
    var height = balloon.offsetHeight;
    
    if (width + 10 > 420 && height + 10 > 420) {
        balloon.style.width = "200px";
        balloon.style.height = "200px";
        colorIndex = 0;
        balloon.style.backgroundColor = colors[colorIndex]
    } else {
        balloon.style.width = (width + 10) + "px";
        balloon.style.height = (height + 10) + "px";
        colorIndex = (colorIndex + 1) % 3;
        balloon.style.backgroundColor = colors[colorIndex];

        
    }  
    
}
function shrink() {
    var balloon = document.getElementById("balloon")
    var width = balloon.offsetWidth;
    var height = balloon.offsetHeight;

    if (width > 200 ) {
        balloon.style.width = (width-5) + "px";
        balloon.style.height = (height-5) + "px";
    }
    colorIndex = (colorIndex + 2) % 3; 
    balloon.style.backgroundColor = colors[colorIndex]
}