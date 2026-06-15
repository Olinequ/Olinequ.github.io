loadR1()
loadR2()
loadR3()
loadR4()
loadR5()
loadR6()
loadR7()

async function loadR1() {
    const response = await fetch(`Boss Tournament 2026 - Playoffs R1.csv`);
    const data = await response.text();
    const lines = data.split('\n');

    for (let i = 2; i < lines.length; i++) {
        let line = lines[i].split(",");
        document.getElementsByClassName("round1")[0].children[i-2].innerHTML = `<a href="${line[2]}" target="_blank">${line[0]} - ${line[1]}</a>`
    }
}

async function loadR2() {
    const response = await fetch(`Boss Tournament 2026 - Playoffs R2.csv`);
    const data = await response.text();
    const lines = data.split('\n');
    let j = 0

    for (let i = 2; i < 18; i++) {
        let line = lines[i].split(",");
        document.getElementsByClassName("round2")[0].children[j].innerHTML = `<a href="${line[2]}" target="_blank">${line[0]} - ${line[1]}</a>`
        j++
    }
    j = 0
    for (let i = 21; i < 37; i++) {
        let line = lines[i].split(",");
        document.getElementsByClassName("round1")[1].children[j].innerHTML = `<a href="${line[2]}" target="_blank">${line[0]} - ${line[1]}</a>`
        j++
    }
}

async function loadR3() {
    const response = await fetch(`Boss Tournament 2026 - Playoffs R3.csv`);
    const data = await response.text();
    const lines = data.split('\n');
    let j = 0

    for (let i = 2; i < 18; i++) {
        let line = lines[i].split(",");
        document.getElementsByClassName("round2")[1].children[j].innerHTML = `<a href="${line[2]}" target="_blank">${line[0]} - ${line[1]}</a>`
        j++
    }
}

async function loadR4() {
    const response = await fetch(`Boss Tournament 2026 - Playoffs R4.csv`);
    const data = await response.text();
    const lines = data.split('\n');
    let j = 0

    for (let i = 2; i < 10; i++) {
        let line = lines[i].split(",");
        document.getElementsByClassName("round3")[0].children[j].innerHTML = `<a href="${line[2]}" target="_blank">${line[0]} - ${line[1]}</a>`
        j++
    }
    j = 0

    for (let i = 13; i < 21; i++) {
        let line = lines[i].split(",");
        document.getElementsByClassName("round3")[1].children[j].innerHTML = `<a href="${line[2]}" target="_blank">${line[0]} - ${line[1]}</a>`
        j++
    }
}

async function loadR5() {
    const response = await fetch(`Boss Tournament 2026 - Playoffs R5.csv`);
    const data = await response.text();
    const lines = data.split('\n');

    for (let i = 2; i < lines.length; i++) {
        let line = lines[i].split(",");
        document.getElementsByClassName("round4")[1].children[i-2].innerHTML = `<a href="${line[2]}" target="_blank">${line[0]} - ${line[1]}</a>`
    }
}

async function loadR6() {
    const response = await fetch(`Boss Tournament 2026 - Playoffs R6.csv`);
    const data = await response.text();
    const lines = data.split('\n');
    let j = 0

    for (let i = 2; i < 6; i++) {
        let line = lines[i].split(",");
        document.getElementsByClassName("round4")[0].children[j].innerHTML = `<a href="${line[2]}" target="_blank">${line[0]} - ${line[1]}</a>`
        j++
    }
    j = 0

    for (let i = 9; i < 13; i++) {
        let line = lines[i].split(",");
        document.getElementsByClassName("round5")[0].children[j].innerHTML = `<a href="${line[2]}" target="_blank">${line[0]} - ${line[1]}</a>`
        j++
    }
}

async function loadR7() {
    const response = await fetch(`Boss Tournament 2026 - Playoffs R7.csv`);
    const data = await response.text();
    const lines = data.split('\n');

    for (let i = 2; i < lines.length; i++) {
        let line = lines[i].split(",");
        document.getElementsByClassName("round6")[0].children[i-2].innerHTML = `<a href="${line[2]}" target="_blank">${line[0]} - ${line[1]}</a>`
    }
}