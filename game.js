
let character = document.getElementById('character');
let block = document.getElementById('block');

function jump() {
  if(character.classList != 'animate'){
    character.classList.add('animate');
}
  setTimeout(function(){
    character.classList.remove('animate');
  }, 750);
}


let checkDead = setInterval(function(){
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

  if(blockLeft <50 && blockLeft >0 && characterTop >= 99) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("Game over");
  }
}, 10); 