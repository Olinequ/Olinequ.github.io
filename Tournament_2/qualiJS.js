loadTimed();
loadLeastCash();
loadLeastTiers();

async function loadTimed() {
    let timed = document.getElementById("timed");

    const response = await fetch('qualifiersData.csv');
    const data = await response.text();
    const lines = data.split('\n');
    let spots = 32

    if (data.toString() !== "") {
        timed.innerHTML = "<table id='timed'><tr><th><span>Timed</span> <img src='../IMG/timed.png' alt='timed'></th></tr>"
        for (let i = 0; i < data.length; i++) {
            let score = lines[i].split(',');
            if (score[4] === "TRUE") {
                timed.innerHTML += `<tr><td style="background: rgb(150, 150, 50, 0.4)"><a href="${score[3]}" class="score" target="_blank"><span class="placement">` + score[0] + ".</span> <span class='player'>" + score[1] + "</span> " + score[2] + `</a></td></tr>`;
            spots++
            }
            else if (i < spots)
                timed.innerHTML += `<tr><td style="background: rgb(50, 150, 50, 0.4)"><a href="${score[3]}" class="score" target="_blank"><span class="placement">` + score[0] + ".</span> <span class='player'>" + score[1] + "</span> " + score[2] + `</a></td></tr>`;
            else
                timed.innerHTML += `<tr><td style="background: rgb(150, 50, 50, 0.4)"><a href="${score[3]}" class="score" target="_blank"><span class="placement">` + score[0] + ".</span> <span class='player'>" + score[1] + "</span> " + score[2] + `</a></td></tr>`;

        }
        timed.innerHTML += "</table>";
    } else {
        timed.innerHTML = "<table id='timed'><tr><th><span>Timed</span> <img src='../IMG/timed.png' alt='timed'></th></tr>"
        for (let i = 0; i < 50; i++) {
            if (i < spots)
                timed.innerHTML += `<tr><td style="background: rgb(50, 150, 50, 0.4)"><a class="score" target="_blank"><span class="placement">${i+1}.</span></a></td></tr>`;
            else
                timed.innerHTML += `<tr><td style="background: rgb(150, 50, 50, 0.4)"><a class="score" target="_blank"><span class="placement">${i+1}.</span></a></td></tr>`;
        }
        timed.innerHTML += "</table>";
    }
}

async function loadLeastCash() {
    let lc = document.getElementById("leastCash");

    const response = await fetch('qualifiersData.csv');
    const data = await response.text();
    const lines = data.split('\n');
    let spots = 32

    if (data.toString() !== "") {
        lc.innerHTML = "<table id='leastCash'><tr><th><span>Least Cash</span> <img src='../IMG/leastCash.png' alt='lc'></th></tr>"
        for (let i = 0; i < data.length; i++) {
            let score = lines[i].split(',');
            if (score[9] === "TRUE") {
                lc.innerHTML += `<tr><td style="background: rgb(150, 150, 50, 0.4)"><a href="${score[8]}" class="score" target="_blank"><span class="placement">` + score[5] + ".</span> <span class='player'>" + score[6] + "</span> " + score[7] + `</a></td></tr>`;
                spots++
            }
            else if (i < spots)
                lc.innerHTML += `<tr><td style="background: rgb(50, 150, 50, 0.4)"><a href="${score[8]}" class="score" target="_blank"><span class="placement">` + score[5] + ".</span> <span class='player'>" + score[6] + "</span> " + score[7] + `</a></td></tr>`;
            else
                lc.innerHTML += `<tr><td style="background: rgb(150, 50, 50, 0.4)"><a href="${score[8]}" class="score" target="_blank"><span class="placement">` + score[5] + ".</span> <span class='player'>" + score[6] + "</span> " + score[7] + `</a></td></tr>`;
        }
        lc.innerHTML += "</table>";
    } else {
        lc.innerHTML = "<table id='leastCash'><tr><th><span>Least Cash</span> <img src='../IMG/leastCash.png' alt='lc'></th></tr>"
        for (let i = 0; i < 50; i++) {
            if (i < spots)
                lc.innerHTML += `<tr><td style="background: rgb(50, 150, 50, 0.4)"><a class="score" target="_blank"><span class="placement">${i+1}.</span></a></td></tr>`;
            else
                lc.innerHTML += `<tr><td style="background: rgb(150, 50, 50, 0.4)"><a class="score" target="_blank"><span class="placement">${i+1}.</span></a></td></tr>`;
        }
        lc.innerHTML += "</table>";
    }

}

async function loadLeastTiers() {
    let lt = document.getElementById("leastTiers");

    const response = await fetch('qualifiersData.csv');
    const data = await response.text();
    const lines = data.split('\n');
    let spots = 32

    if (data.toString() !== "") {
        lt.innerHTML = "<table id='leastTiers'><tr><th><span>Least Tiers</span> <img src='../IMG/leastTiers.png' alt='lt'></th></tr>"
        for (let i = 0; i < data.length; i++) {
            let score = lines[i].split(',');
            if (score[14] === "TRUE") {
                lt.innerHTML += `<tr><td style="background: rgb(150, 150, 50, 0.4)"><a href="${score[13]}" class="score" target="_blank"><span class="placement">` + score[10] + ".</span> <span class='player'>" + score[11] + "</span> " + score[12] + `</a></td></tr>`;
                spots++
            }
            else if (i < spots)
                lt.innerHTML += `<tr><td style="background: rgb(50, 150, 50, 0.4)"><a href="${score[13]}" class="score" target="_blank"><span class="placement">` + score[10] + ".</span> <span class='player'>" + score[11] + "</span> " + score[12] + `</a></td></tr>`;
            else
                lt.innerHTML += `<tr><td style="background: rgb(150, 50, 50, 0.4)"><a href="${score[13]}" class="score" target="_blank"><span class="placement">` + score[10] + ".</span> <span class='player'>" + score[11] + "</span> " + score[12] + `</a></td></tr>`;
        }
        lt.innerHTML += "</table>";
    } else {
        lt.innerHTML = "<table id='leastTiers'><tr><th><span>Least Tiers</span> <img src='../IMG/leastTiers.png' alt='lt'></th></tr>"
        for (let i = 0; i < 50; i++) {
            if (i < spots)
                lt.innerHTML += `<tr><td style="background: rgb(50, 150, 50, 0.4)"><a class="score" target="_blank"><span class="placement">${i+1}.</span></a></td></tr>`;
            else
                lt.innerHTML += `<tr><td style="background: rgb(150, 50, 50, 0.4)"><a class="score" target="_blank"><span class="placement">${i+1}.</span></a></td></tr>`;
        }
        lt.innerHTML += "</table>";
    }
}