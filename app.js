let home = 0
let away = 0

let gameWon = false

function addPointsToTeam(team, points) {
    if (gameWon) return;
    switch (team) {
        case "home":
            home += points
            break
        case "away":
            away += points
            break
    }

    home = Math.max(0, home)
    away = Math.max(0, away)

    home = Math.min(25, home)
    away = Math.min(25, away)

    drawPoints()

    if (home == 25 || away == 25) {
        declareWinner()
    }
}

function drawPoints() {
    if (gameWon) return
    let homeElm = document.querySelector("#home")
    let awayElm = document.querySelector("#away")
    // @ts-ignore
    homeElm.innerText = home.toString().padStart(2, '0')
    // @ts-ignore
    awayElm.innerText = away.toString().padStart(2, '0')
}

function resetPoints() {
    gameWon = false
    away = 0;
    home = 0;
    drawPoints()
}

function declareWinner() {
    if (home == 25 || away == 25) {
        gameWon = true;
        alert(`${home == 25 ? 'Home' : 'Away'} has won the game!`);
    }
}