loadDefault();
let scoreboardOriginal;
let sorted = false;
selectGroup(0);


function sort() {
    if (sorted) {
        document.getElementById("scoreboard").innerHTML = scoreboardOriginal;
        sorted = false;
        document.getElementsByClassName("columnTitle")[1].classList.remove("active");
    } else {
        sorted = true;
        document.getElementsByClassName("columnTitle")[1].classList.add("active");
        scoreboardOriginal = document.getElementById("scoreboard").innerHTML
        let points = document.getElementsByClassName('pointsAmount')
        for (let i = 0; i < 23; i++) {
            for (let j = 0; j < 23; j++) {
                if (parseInt(points[j].innerHTML) < parseInt(points[j + 1].innerHTML)) {
                    let temp = points[j + 1].parentElement.innerHTML;
                    points[j + 1].parentElement.innerHTML = points[j].parentElement.innerHTML;
                    points[j].parentElement.innerHTML = temp;
                }
            }
        }
    }
}

function selectGroup(groupNumber) {
    if (sorted) {
        sort();
        loadGroupPlayers(parseInt(groupNumber));
        loadGroupScores(parseInt(groupNumber));
        setTimeout(sort, 50)
    } else if (!sorted) {
        loadGroupPlayers(parseInt(groupNumber));
        loadGroupScores(parseInt(groupNumber));
    }

    let g = document.getElementsByClassName('groupName');
    for (let i = 0; i < 4; i++) {
        g[i].classList.remove('selected');
    }
    g[groupNumber].classList.add('selected');
}

function loadDefault() {
    for (let i = 0; i < 24; i++) {
        document.getElementById("scoreboard").innerHTML += `
            <tr class="player">
                <td class="playerName"></td>
                <td class="pointsAmount"></td>
                <td class="roundScore"></td>
                <td class="pointsGranted"></td>
                <td class="roundScore"></td>
                <td class="pointsGranted"></td>
                <td class="roundScore"></td>
                <td class="pointsGranted"></td>
            </tr>
        `
    }
}

async function loadGroupPlayers(groupNumber) {
    let players = document.getElementsByClassName('playerName')
    let points = document.getElementsByClassName('pointsAmount')

    const response = await fetch(`groupsData.csv`);
    const data = await response.text();
    const lines = data.split('\n');

    if (lines.length > 1) {
        let roundsSoFar = Math.floor(lines.length / 24);

        for (let i = 0; i < 24; i++) {
            players[i].innerHTML = lines[i].split(',')[1 + 5 * groupNumber];
            let pointsGranted = 0;
            for (let j = 0; j < roundsSoFar; j++) {
                pointsGranted += parseInt(lines[i + (24 * j)].split(',')[4 + 5 * groupNumber]);
            }
            points[i].innerHTML = pointsGranted.toString();
        }
    }
}

async function loadGroupScores(groupNumber) {
    let score = document.getElementsByClassName('roundScore');
    let pointsGranted = document.getElementsByClassName('pointsGranted')

    const response = await fetch('groupsData.csv');
    const data = await response.text();
    const lines = data.split('\n');

    if (lines.length > 1) {
        let roundsSoFar = Math.floor(lines.length / 24);

        for (let i = 0; i < roundsSoFar; i++) {
            for (let j = 0; j < 72; j += 3) {
                score[j + i].innerHTML = `<a href="${lines[(j / 3) + 24 * i].split(',')[3 + (groupNumber * 5)]}" target="_blank">${lines[(j / 3) + 24 * i].split(',')[2 + (groupNumber * 5)]}</a>`
                pointsGranted[j + i].innerHTML = `+` + lines[(j / 3) + 24 * i].split(',')[4 + (groupNumber * 5)]
            }
        }

        for (let i = 0; i < roundsSoFar*96; i++) {
            let points = parseInt((pointsGranted[i].innerHTML).split('+')[1])
            if (points === 0) {
                pointsGranted[i].style.color = "rgb(200, 200, 200)"
            } else if (points === 2) {
                pointsGranted[i].style.color = "rgb(200, 50, 50)"
            } else if (points === 3) {
                pointsGranted[i].style.color = "rgb(200, 100, 50)"
            } else if (points === 4) {
                pointsGranted[i].style.color = "rgb(160, 160, 50)"
            } else if (points === 5) {
                pointsGranted[i].style.color = "rgb(220, 220, 50)"
            } else if (points === 6) {
                pointsGranted[i].style.color = "rgb(150, 255, 150)"
            } else if (points === 7) {
                pointsGranted[i].style.color = "rgb(5, 255, 5)"
            } else if (points === 8) {
                pointsGranted[i].style.color = "rgb(250, 50, 200)"
            } else {
                pointsGranted[i].style.color = "rgb(200, 200, 200)"
            }
        }
    }
}
