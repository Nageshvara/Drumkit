drumLength = document.querySelectorAll(".drum").length
for (var i = 0; i < drumLength; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick() {
  a = this.innerHTML;
  makeSound(a);
  buttonAnimation(a);
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key) {
  switch (key) {
    case "a":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "w":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
  }
}

function buttonAnimation(currentKey) {
  var curButton = document.querySelector("." + currentKey);
  curButton.classList.add("pressed");

  setTimeout(function() {
    curButton.classList.remove("pressed");
  }, 100);
}
