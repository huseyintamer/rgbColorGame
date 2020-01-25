var numSquare = 6;
var colors = generateRandomColors(numSquare);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector(".colorDisplay")
var message = document.querySelector("#message");
var newColor = document.querySelector("#newColor");
var eButton = document.querySelector("#easy");
var hButton = document.querySelector(".hardSelected");
var deleted= [];
colorDisplay.textContent=pickedColor;
newColor.textContent="Renk Degistir";


eButton.addEventListener("click", function() {
    hButton.classList.remove("hardSelected"); 
    eButton.classList.add("hardSelected"); 
    numSquare =3;
     colors = generateRandomColors(numSquare);
     pickedColor = pickColor();
    colorDisplay.textContent=pickedColor;
   
   
    for(var i =0; i<squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }


  
});

hButton.addEventListener("click", function() {
    eButton.classList.remove("hardSelected"); 
    hButton.classList.add("hardSelected"); 
    numSquare = 6;
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
   colorDisplay.textContent=pickedColor;
  
  
   for(var i =0; i<squares.length; i++) {
       if(colors[i]) {
           squares[i].style.background = colors[i];
           squares[i].style.display = "block";
       }
   }
})

newColor.addEventListener("click", function() {
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent=pickedColor;
    deleted= [];
    message.textContent="Haydi Bakalım";
    newColor.textContent="Renk Degistir";
    colorDisplay.style.color="white";
    for(var i =0; i<squares.length; i++) {
    
        squares[i].style.background = colors[i];
    }
})



for(var i = 0; i < squares.length; i++ ) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;
        if(clickedColor==pickedColor) {
   
            colorDisplay.style.color=pickedColor;
          changeColors(clickedColor);
            message.textContent="Harikasın";
            newColor.textContent="Tekrar Oyna";
           
        }
        else {
            var delItem = colors.shift(squares[i]);
            deleted.push(delItem);

            if (deleted.length == 3 ) {
                message.textContent="Ha Gayret Yarıladın";
            this.style.background= "#232323";
            
            }
          
            else if (deleted.length > 4) {
                message.textContent="Bunu da bil artık :)";
                this.style.background= "#232323";
                
            }
            else{
           
                this.style.background= "#232323";
                 message.textContent="O degil";
            }
            console.log(deleted.lenght);
          
        }
    });
}

function changeColors(color) {
    for (var i= 0; i<squares.length; i++) {
        squares[i].style.background= color;
    }
}

function pickColor() {
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){

    var arr = []
    for (var i = 0; i<num; i++) {
        arr.push(randomColor());
    }
    return arr;
   
}

function randomColor() {
    //red
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
