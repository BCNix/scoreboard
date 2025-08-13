const home = document.getElementById("home-score")
const guest = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function updateScore(elementId, points){
    if(elementId === "home-score"){
        homeScore += points
        home.textContent = homeScore
    } else{
        guestScore += points
        guest.textContent = guestScore
    }

    highlightLeadingTeam()
}

function resetScore(elementId){
    if(elementId === "home-score"){
        homeScore = 0
        home.textContent = homeScore
    } else{
        guestScore = 0
        guest.textContent = guestScore
    }

    highlightLeadingTeam()
}


function highlightLeadingTeam(){
    if(homeScore > guestScore){
        home.style.border = '5px solid gold';
        guest.style.border = 'none';
    } else if (homeScore < guestScore) {
        guest.style.border = '5px solid gold';
        home.style.border = 'none';
    } else {
        home.style.border = 'none';
        guest.style.border = 'none';
    }
}

