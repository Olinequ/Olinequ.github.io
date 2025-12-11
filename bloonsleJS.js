//Cookies
function setCookie(cname, cvalue, extime) {
    const d = new Date();
    d.setTime(d.getTime() + extime);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
    setCookie(cname, null, -1);
}

/*
document.querySelector('body').addEventListener('keypress', (e) => {
    if (e.key === '=') {
        deleteCookie("correct_number");
        for (let i = 1; i <= 7; i++) {
            deleteCookie("guess" + i);
        }
        deleteCookie("amountOfTries")
        alert("cookies deleted")
    }
})
 */

//Utility functions + main class for bloonsle
class Monkey {
    code;
    type;
    price;
    ability;
    paragon;
    tier;
    dmg;
    path;

    constructor(code, type, price, ability, paragon, tier, dmg, path) {
        this.code = code;
        this.type = type;
        this.price = price;
        this.ability = ability;
        this.paragon = paragon;
        this.tier = tier;
        this.dmg = dmg;
        this.path = path;
    }
}

function returnDifference(guessPrice, correctPrice) {
    guessPrice = parseInt(guessPrice);
    correctPrice = parseInt(correctPrice);
    if (guessPrice === correctPrice) {
        return guessPrice;
    } else if (guessPrice > correctPrice) {
        return guessPrice - correctPrice;
    } else if (correctPrice > guessPrice) {
        return correctPrice - guessPrice;
    }
}

function formatPrice(price) {
    if (price.length <= 3) {
        return "$" + price;
    } else {

        return "$" + price.substring(0, price.length - 3) + "." + price.substring(price.length - 3);
    }
}

function formatDmg(dmgTypes) {
    let data = dmgTypes.split(',');
    if (data.length === 2) {
        return data[0] + "\n" + data[1];
    } else if (data.length === 3) {
        return data[0] + "\n" + data[1] + "\n" + data[2];
    } else {
        return data[0];
    }
}

function formatCode(code) {
    let new_code = "";
    for (let i = 0; i < code.length; i++) {
        if (i === 0) {
        } else if (i === 4) {
            new_code += " " + code[i].toUpperCase();
        } else {
            new_code += code[i];
        }
    }
    return new_code;
}

function checkDamageType(guessDmg, correctDmg) {
    let types1 = guessDmg.split("\n");
    let types2 = correctDmg.split("\n");

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (types2[i] === types1[j] && types2[i] !== undefined && types1[j] !== undefined) {
                return true;
            }
        }
    }
}

function formatGuess(guess) {
    let part1 = guess[0]+guess[1]+guess[2]+guess[3];
    let part2 = guess.substring(4, guess.length);
    switch (part2) {
        case "dartmonkey":
            return part1+"dart";
        case "boomer":
            return part1+"boomerang";
        case "tackshooter":
            return part1+"tack";
        case "bombtower":
            return part1+"bomb";
        case "bombshooter":
            return part1+"bomb";
        case "icemonkey":
            return part1+"ice";
        case "desp":
            return part1+"desperado";
        case "despacito":
            return part1+"desperado";
        case "gluegunner":
            return part1+"glue";
        case "submonkey":
            return part1+"sub";
        case "snipermonkey":
            return part1+"sniper";
        case "buccaneer":
            return part1+"boat";
        case "helipilot":
            return part1+"heli";
        case "mortarmonkey":
            return part1+"mortar";
        case "dartlinggunner":
            return part1+"dartling";
        case "acemonkey":
            return part1+"ace";
        case "wiz":
            return part1+"wizard";
        case "wizardmonkey":
            return part1+"wizard";
        case "druidmonkey":
            return part1+"druid";
        case "supermonkey":
            return part1+"super";
        case "alchemist":
            return part1+"alch";
        case "alchemistmonkey":
            return part1+"alch";
        case "merm":
            return part1+"mermonkey";
        case "ninjamonkey":
            return part1+"ninja";
        case "spikefactory":
            return part1+"spike";
        case "bananafarm":
            return part1+"banana";
        case "farm":
            return part1+"banana";
        case "beasthandler":
            return part1+"handler";
        case "bh":
            return part1+"handler";
        case "engineer":
            return part1+"engi";
        case "engineermonkey":
            return part1+"engi";
    }

    return guess;
}

//Timer
const timer = document.querySelector("#refresh")

function updateTimer() {
    let time = new Date();
    let hours = 23 - time.getHours()
    let minutes = 59 - time.getMinutes()
    let seconds = 59 - time.getSeconds();
    if (hours < 10)
        hours = "0" + hours;
    if (seconds < 10)
        seconds = '0' + seconds;
    if (minutes < 10)
        minutes = '0' + minutes;
    timer.innerHTML = "Refreshes in: " + hours + ":" + minutes + ":" + seconds;
}

function getExpireDate() {
    let time = new Date();
    let hours = 23 - time.getHours()
    let minutes = 59 - time.getMinutes()
    let seconds = 59 - time.getSeconds();
    return (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000)
}

updateTimer();
setInterval(() => {
    updateTimer();
}, 1000)


//Cookies
if (getCookie("correct_number") === '') {
    cn = Math.floor(Math.random() * 225);
    setCookie("correct_number", cn, getExpireDate());
} else {
    cn = getCookie("correct_number");
}

if (getCookie("amountOfTries") !== '') {
    for (let i = 1; i <= getCookie(`amountOfTries`); i++)
        old_guess(getCookie(`guess${i}`))
}

//Animations
function anim1(element) {
    element.style.transition = "scale .65s"
    element.style.scale = "1.15"
    setTimeout(function () {
        element.style.scale = "1"
    }, 650)
}

function anim2(element) {
    element.style.transition = "color .5s"
    element.style.color = "orangered"
    setTimeout(function () {
        element.style.color = "darkorange"
    }, 750)
    setTimeout(function () {
        element.style.color = "orange"
    }, 1500)
    setTimeout(function () {
        element.style.color = "darkorange"
    }, 2250)
}

anim2(document.getElementById("menu_bloonsle"))
setInterval(() => {
    anim2(document.getElementById("menu_bloonsle"))
}, 3000)

function dropdown() {
    let guide = document.getElementById("bloonsle_guide")
    if (guide.style.display === "none") {
        guide.style.display = "block"
    } else {
        guide.style.display = "none"
    }

}

//Main
let tries = 0;
let correct_types = 0;
let answers = "";

const hints = document.getElementsByClassName("hint");
const guess_input = document.querySelector('#guess_input');

async function guess(e) {
    if (e.key === "Enter") {
        const response = await fetch('bloonsleMonkeys.txt');
        const data = await response.text();
        const lines = data.split('\n');
        const correct_data = lines[cn].split(' ');
        let correct = new Monkey(correct_data[0], correct_data[1], correct_data[2], correct_data[3], correct_data[4], correct_data[5], formatDmg(correct_data[6]), correct_data[7]);

        correct_types = 0;
        let guess = guess_input.value;
        guess_input.value = '';
        guess = guess.toLowerCase();
        guess = "_" + guess;
        guess = formatGuess(guess);
        for (let i = 0; i < lines.length; i++) {
            let temp = lines[i].split(' ');
            if (temp[0] === guess) {
                guess = new Monkey(temp[0], temp[1], temp[2], temp[3], temp[4], temp[5], formatDmg(temp[6]), temp[7]);
            }
        }

        if (guess.code === undefined) {
            alert("Please provide a correct guess!")
        } else {
            document.getElementsByClassName("answer")[tries].innerHTML = formatCode(guess.code);
            if (tries <= 5) {
                anim1(hints[tries * 7])
                if (guess.type === correct.type) {
                    hints[tries * 7].style.background = "green";
                    correct_types++;
                    answers += "🟩";
                } else {
                    hints[tries * 7].style.background = "red";
                    answers += "🟥";
                }
                hints[tries * 7].innerHTML = guess.type;

                setTimeout(function () {
                    anim1(hints[(tries * 7) + 1])
                    if (guess.price === correct.price) {
                        hints[(tries * 7) + 1].style.background = "green";
                        correct_types++;
                        answers += "🟩";
                    } else if (returnDifference(guess.price, correct.price) <= 5000) {
                        hints[(tries * 7) + 1].style.background = "orange";
                        answers += "🟧";
                    } else {
                        hints[(tries * 7) + 1].style.background = "red";
                        answers += "🟥";
                    }
                    if (parseInt(guess.price) > parseInt(correct.price)) {
                        hints[(tries * 7) + 1].innerHTML = "< " + formatPrice(guess.price);
                    } else if (parseInt(guess.price) < parseInt(correct.price)) {
                        hints[(tries * 7) + 1].innerHTML = "> " + formatPrice(guess.price);
                    } else {
                        hints[(tries * 7) + 1].innerHTML = formatPrice(guess.price);
                    }
                }, 250)

                setTimeout(function () {
                    anim1(hints[(tries * 7) + 2])
                    if (guess.ability === correct.ability) {
                        hints[(tries * 7) + 2].style.background = "green";
                        correct_types++;
                        answers += "🟩";
                    } else {
                        hints[(tries * 7) + 2].style.background = "red";
                        answers += "🟥";
                    }
                    hints[(tries * 7) + 2].innerHTML = guess.ability;
                }, 500)

                setTimeout(function () {
                    anim1(hints[(tries * 7) + 3])
                    if (guess.paragon === correct.paragon) {
                        hints[(tries * 7) + 3].style.background = "green";
                        correct_types++;
                        answers += "🟩";
                    } else {
                        hints[(tries * 7) + 3].style.background = "red";
                        answers += "🟥";
                    }
                    hints[(tries * 7) + 3].innerHTML = guess.paragon;
                }, 750)

                setTimeout(function () {
                    anim1(hints[(tries * 7) + 4])
                    if (guess.tier === correct.tier) {
                        hints[(tries * 7) + 4].style.background = "green";
                        correct_types++;
                        answers += "🟩";
                    } else {
                        hints[(tries * 7) + 4].style.background = "red";
                        answers += "🟥";
                    }
                    hints[(tries * 7) + 4].innerHTML = guess.tier;
                }, 1000)

                setTimeout(function () {
                    anim1(hints[(tries * 7) + 5])
                    if (guess.dmg === correct.dmg) {
                        hints[(tries * 7) + 5].style.background = "green";
                        correct_types++;
                        answers += "🟩";
                    } else if (guess.dmg !== correct.dmg && checkDamageType(guess.dmg, correct.dmg)) {
                        hints[(tries * 7) + 5].style.background = "orange";
                        answers += "🟧";
                    } else {
                        hints[(tries * 7) + 5].style.background = "red";
                        answers += "🟥";
                    }
                    hints[(tries * 7) + 5].innerHTML = guess.dmg;
                }, 1250)

                setTimeout(function () {
                    anim1(hints[(tries * 7) + 6])
                    if (guess.path === correct.path) {
                        hints[(tries * 7) + 6].style.background = "green";
                        correct_types++;
                        answers += "🟩";
                    } else {
                        hints[(tries * 7) + 6].style.background = "red";
                        answers += "🟥";
                    }
                    hints[(tries * 7) + 6].innerHTML = guess.path;

                    tries++;
                    setCookie(`guess${tries}`, guess.code, getExpireDate())
                    setCookie(`amountOfTries`, tries, getExpireDate())
                    answers += "\n"


                    if (tries === 6) {
                        if (correct_types === 7) {
                            win(tries, correct.code);
                        } else {
                            lose(correct.code)
                        }
                    }

                    if (correct_types === 7) {
                        win(tries, correct.code);
                    }

                    document.getElementById('guess_input').disabled = false;
                    document.getElementById('guess_input').focus()

                }, 1500)
                document.getElementById('guess_input').disabled = true;


            }
        }
    }
}

async function old_guess(guess) {

    const response = await fetch('bloonsleMonkeys.txt');
    const data = await response.text();
    const lines = data.split('\n');
    const correct_data = lines[cn].split(' ');
    let correct = new Monkey(correct_data[0], correct_data[1], correct_data[2], correct_data[3], correct_data[4], correct_data[5], formatDmg(correct_data[6]), correct_data[7]);


    correct_types = 0;

    for (let i = 0; i < lines.length; i++) {
        let temp = lines[i].split(' ');
        if (temp[0] === guess) {
            guess = new Monkey(temp[0], temp[1], temp[2], temp[3], temp[4], temp[5], formatDmg(temp[6]), temp[7]);
        }
    }

    document.getElementsByClassName("answer")[tries].innerHTML = formatCode(guess.code);

    if (guess.type === correct.type) {
        hints[tries * 7].style.background = "green";
        correct_types++;
        answers += "🟩";
    } else {
        hints[tries * 7].style.background = "red";
        answers += "🟥";
    }
    hints[tries * 7].innerHTML = guess.type;

    if (guess.price === correct.price) {
        hints[(tries * 7) + 1].style.background = "green";
        correct_types++;
        answers += "🟩";
    } else if (returnDifference(guess.price, correct.price) <= 5000) {
        hints[(tries * 7) + 1].style.background = "orange";
        answers += "🟧";
    } else {
        hints[(tries * 7) + 1].style.background = "red";
        answers += "🟥";
    }
    if (parseInt(guess.price) > parseInt(correct.price)) {
        hints[(tries * 7) + 1].innerHTML = "< " + formatPrice(guess.price);
    } else if (parseInt(guess.price) < parseInt(correct.price)) {
        hints[(tries * 7) + 1].innerHTML = "> " + formatPrice(guess.price);
    } else {
        hints[(tries * 7) + 1].innerHTML = formatPrice(guess.price);
    }

    if (guess.ability === correct.ability) {
        hints[(tries * 7) + 2].style.background = "green";
        correct_types++;
        answers += "🟩";
    } else {
        hints[(tries * 7) + 2].style.background = "red";
        answers += "🟥";
    }
    hints[(tries * 7) + 2].innerHTML = guess.ability;

    if (guess.paragon === correct.paragon) {
        hints[(tries * 7) + 3].style.background = "green";
        correct_types++;
        answers += "🟩";
    } else {
        hints[(tries * 7) + 3].style.background = "red";
        answers += "🟥";
    }
    hints[(tries * 7) + 3].innerHTML = guess.paragon;

    if (guess.tier === correct.tier) {
        hints[(tries * 7) + 4].style.background = "green";
        correct_types++;
        answers += "🟩";
    } else {
        hints[(tries * 7) + 4].style.background = "red";
        answers += "🟥";
    }
    hints[(tries * 7) + 4].innerHTML = guess.tier;

    if (guess.dmg === correct.dmg) {
        hints[(tries * 7) + 5].style.background = "green";
        correct_types++;
        answers += "🟩";
    } else if (guess.dmg !== correct.dmg && checkDamageType(guess.dmg, correct.dmg)) {
        hints[(tries * 7) + 5].style.background = "orange";
        answers += "🟧";
    } else {
        hints[(tries * 7) + 5].style.background = "red";
        answers += "🟥";
    }
    hints[(tries * 7) + 5].innerHTML = guess.dmg;

    if (guess.path === correct.path) {
        hints[(tries * 7) + 6].style.background = "green";
        correct_types++;
        answers += "🟩";
    } else {
        hints[(tries * 7) + 6].style.background = "red";
        answers += "🟥";
    }
    hints[(tries * 7) + 6].innerHTML = guess.path;

    tries++;
    answers += "\n"

    if (tries === 6) {
        if (correct_types === 7) {
            win(tries, correct.code);
        } else {
            lose(correct.code)
        }
    }

    if (correct_types === 7) {
        win(tries, correct.code);
    }


}

guess_input.addEventListener('keypress', (e) => {
    guess(e);
})

const winning_screen = document.querySelector("#winning_screen");


function share(answers) {
    let date = new Date();
    date = date.toString().split(" ");
    navigator.clipboard.writeText(`**Bloonsle - ${date[2]} ${date[1]} ${date[3]}**\nhttps://olinequ.github.io/\n**-----------------------**\n${answers}`).then(() => {
        document.getElementById("share_button").innerHTML = "Copied!";
        setTimeout(() => {
            document.getElementById("share_button").innerHTML = "Share";
        }, 1500)
    })
}

function lose(correct) {
    document.getElementById('no_more_guesses').innerHTML = "No more guesses left!";
    document.getElementById('guess_input').style.display = "none";
    document.getElementById('input_guess').style.display = "none";
    document.getElementById('winning_screen').style.marginTop = "47.5%";
    document.getElementById('no_more_guesses').style.color = "red";
    document.getElementById('no_more_guesses').style.textShadow = "text-shadow: 2px 2px 2px firebrick";

    winning_screen.style.display = "block";
    winning_screen.children[0].innerHTML = "Skill issue!";
    winning_screen.children[0].style.color = "red";
    winning_screen.children[1].innerHTML = `Unfortunately, you couldn't solve today's Bloonsle :(<br>The correct answer was <span id="highlight_answer">${formatCode(correct)}</span><br>
<button onclick="share(answers)" id="share_button">Share</button>`;
    window.scrollBy({
        top: winning_screen.offsetTop,
        left: 0,
        behavior: "smooth",
    });
}


function win(tries, correct) {
    for (let i = 1; i < 7-tries; i++) {
        answers += "⬜⬜⬜⬜⬜⬜⬜\n";
    }
    document.getElementById('no_more_guesses').innerHTML = "You won!";
    document.getElementById('guess_input').style.display = "none";
    document.getElementById('input_guess').style.display = "none";
    document.getElementById('winning_screen').style.marginTop = "47.5%";
    document.getElementById('no_more_guesses').style.color = "limegreen";
    document.getElementById('no_more_guesses').style.textShadow = "text-shadow: 2px 2px 2px green";

    winning_screen.style.display = "block";
    winning_screen.children[0].innerHTML = "Congrats!";
    winning_screen.children[0].style.color = "limegreen";
    winning_screen.children[1].innerHTML = `You solved today's Bloonsle in ${tries} tries!<br>The correct answer is <span id="highlight_answer">${formatCode(correct)}</span><br>
<button onclick="share(answers)" id="share_button">Share</button>`;
    window.scrollBy({
        top: winning_screen.offsetTop,
        left: 0,
        behavior: "smooth",
    });
}

