function menu(number) {
    let main = document.getElementById("main")
    let menu = document.getElementById("menu")

    for (let i = 0; i < main.children.length; i++) {
        if (i === number) {
            main.children[i].style.display = "block"
        } else {
            main.children[i].style.display = "none"
        }
    }
    for (let i = 0; i < menu.children[0].children.length; i += 2) {
        if (i === number*2) {
            menu.children[0].children[i].className = "menu_active"
            menu.children[0].children[i].style.pointerEvents = "none"
        } else {
            menu.children[0].children[i].className = ""
            menu.children[0].children[i].style.pointerEvents = "none"
        }
    }
    main.style.opacity = "0"
    for (let i = 1; i <= 100; i++) {
        setTimeout(function animation_1() {
            main.style.opacity = (i*0.01).toString()
        },i*5);
    }
    setTimeout(function animation_2() {
        for (let i = 0; i < menu.children[0].children.length; i += 2) {
            menu.children[0].children[i].style.pointerEvents = "auto"
        }
    }, 501)
}

function chooseTournament(number) {
    if (number === 1) {
        location.href = "Tournament_1/index.html"
    }
}

