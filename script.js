document.getElementById("orb").addEventListener("click",function(){
    changeToNight()
});
function changeToNight(){
    if(document.getElementById("orb").className == "sun"){
        document.getElementById("sky").className = "night";
        document.getElementById("orb").className = "moon";
        document.getElementById("moonspot1").className = "dark";
        document.getElementById("moonspot2").className = "dark";
        document.getElementById("moonspot3").className = "dark";
}
else if(document.getElementById("orb").className == "moon"){
    document.getElementById("sky").className = "day";
    document.getElementById("orb").className = "sun";
    document.getElementById("moonspot1").className = "light";
        document.getElementById("moonspot2").className = "light";
        document.getElementById("moonspot3").className = "light";
    }
}