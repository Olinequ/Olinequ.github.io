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

