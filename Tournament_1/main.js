function showGroup(groupName) {

    let a = document.getElementById('groupA');
    let b = document.getElementById('groupB');
    let c = document.getElementById('groupC');
    let d = document.getElementById('groupD');

    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';

    let groups = document.getElementsByClassName('choose-group');
    for (let i = 0; i < groups.length; i++) {
        groups[i].style.background = 'rgba(100, 100, 100, 0.25)'
    }

    if (groupName === 'a') {
        groups[0].style.background = 'rgba(255, 0, 0, 0.35)'
        a.style.display = 'block';
    } else if (groupName === 'b') {
        groups[1].style.background = 'rgba(100, 255, 100, 0.35)'
        b.style.display = 'block';
    } else if (groupName === 'c') {
        groups[2].style.background = 'rgba(50, 50, 255, 0.35)'
        c.style.display = 'block';
    } else if (groupName === 'd') {
        groups[3].style.background = 'rgba(255, 200, 0, 0.35)'
        d.style.display = 'block';
    }
}

function showBracket(bracketNumber) {

    let br = document.getElementsByClassName('bracket');
    br[0].style.display = 'none';
    br[1].style.display = 'none';
    br[2].style.display = 'none';
    br[bracketNumber].style.display = 'block';
}

const tempA = document.getElementById('groupA').innerHTML;
const tempB = document.getElementById('groupB').innerHTML;
const tempC = document.getElementById('groupC').innerHTML;
const tempD = document.getElementById('groupD').innerHTML;

function sort() {

    let btn = document.getElementById('btn');
    let points = document.getElementsByClassName('points');

    if (btn.className === 'not_active') {

        btn.className = 'active';
        for (let j = 0; j < 16; j++) {
            for (let i = 0; i < 15; i++) {
                if (parseInt(points[i+1].innerHTML) > parseInt(points[i].innerHTML)) {
                    let temp = points[i+1].parentElement.innerHTML;
                    points[i+1].parentElement.innerHTML = points[i].parentElement.innerHTML;
                    points[i].parentElement.innerHTML = temp;
                }
            }
            for (let i = 16; i < 31; i++) {
                if (parseInt(points[i+1].innerHTML) > parseInt(points[i].innerHTML)) {
                    let temp = points[i+1].parentElement.innerHTML;
                    points[i+1].parentElement.innerHTML = points[i].parentElement.innerHTML;
                    points[i].parentElement.innerHTML = temp;
                }
            }
            for (let i = 32; i < 47; i++) {
                if (parseInt(points[i+1].innerHTML) > parseInt(points[i].innerHTML)) {
                    let temp = points[i+1].parentElement.innerHTML;
                    points[i+1].parentElement.innerHTML = points[i].parentElement.innerHTML;
                    points[i].parentElement.innerHTML = temp;
                }
            }
            for (let i = 48; i < 63; i++) {
                if (parseInt(points[i+1].innerHTML) > parseInt(points[i].innerHTML)) {
                    let temp = points[i+1].parentElement.innerHTML;
                    points[i+1].parentElement.innerHTML = points[i].parentElement.innerHTML;
                    points[i].parentElement.innerHTML = temp;
                }
            }
        }

    } else if (btn.className === 'active') {
        btn.className = 'not_active';
        document.getElementById('groupA').innerHTML = tempA;
        document.getElementById('groupB').innerHTML = tempB;
        document.getElementById('groupC').innerHTML = tempC;
        document.getElementById('groupD').innerHTML = tempD;
    }
}

function returnHome() {
    location.href = "../index.html";
}

