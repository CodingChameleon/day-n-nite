document.getElementById("orb").addEventListener("click",function(){
    changeToNight()
});
function changeToNight(){
    document.getElementById("sky").className = "night";
    document.getElementById("orb").className = "moon";
}