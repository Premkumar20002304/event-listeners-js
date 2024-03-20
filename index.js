// instead of calling a function we are passing a function as parameter for doing this i will be used for some other time
// document.querySelector("button").addEventListener("click", handleClick);  // just for first button


// function handleClick() {
//     alert("clicked")
// }

// // anonymous function its a normal function which has no name 


// for (let i=0 ; i < 7 ; i++ ) {
//     //    document.getElementsByClassName("drum")[i].addEventListener("click", function() {
//     //     alert("clicking every button");
//     // });3
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         alert("clicked again")
    
//         // all the instructions placed here
//     });

// }
 // INSTEAD OF i < 7 
 // adding event listeners to the buttons

//  var audio = new Audio('audio_file.mp3');
// audio.play();

var numberOfDrumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < numberOfDrumButtons.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerText = this.innerHTML;
        makeSound(buttonInnerText);
        buttonAnimation(buttonInnerText);
        
    })
}


document.addEventListener('keydown', function(event) { 
    makeSound(event.key)// passing the event as parameter to know which event is occured
    buttonAnimation(event.key);
});
function makeSound (key) {
    switch (key) { // tells which key is pressed when the event occur
        case 'w':
            var drum1 = new Audio("sounds/crash.mp3");
            drum1.play()
            break;

        case 'a':
            var drum2 = new Audio("sounds/kick-bass.mp3");
            drum2.play()
            break;
        case 's':
            var drum3 = new Audio("sounds/snare.mp3");
            drum3.play()
            break;
        case 'd':
            var drum4 = new Audio("sounds/tom-1.mp3");
            drum4.play()
            break;
        case 'j':
            var drum5 = new Audio("sounds/tom-2.mp3");
            drum5.play()
            break;
        case 'k':
            var drum6 = new Audio("sounds/tom-3.mp3");
            drum6.play()
            break;
        case 'l':
            var drum7 = new Audio("sounds/tom-4.mp3");
            drum7.play()
            break;

        default:
            break;
    }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100)

}
