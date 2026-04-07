home = () => {
    location.href = "index.html";
}

chooseTournament = (tournamentNumber) => {
    if (tournamentNumber === 1) {
        location.href = `Tournament_1/index.html`;
    } else if (tournamentNumber === 2) {
        location.href = `Tournament_2/quali.html`;
    }

}

link = (link, target) => {
    window.open(link, target);
}