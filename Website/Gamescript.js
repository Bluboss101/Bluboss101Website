var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "jump"){
        character.classList.add("jump");
    }
    setTimeout(function(){
        character.classList.remove("jump");
    },500)
}
setTimeout(function(){
    time = time + 1
},1000)