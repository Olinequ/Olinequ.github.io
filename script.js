function onload() {
    document.getElementById("bosses-suboptions").style.opacity = '0';
    document.getElementById("paragons-suboptions").style.opacity = '0';
    document.getElementById("rounds-suboptions").style.opacity = '0';
    document.getElementById("farming-suboptions").style.opacity = '0';
}

function expandbosses() {

    if (document.getElementById("bosses-suboptions").style.display === 'block') {
        setTimeout(opacitybosses1off, 15)
        setTimeout(opacitybosses2off, 30)
        setTimeout(opacitybosses3off, 45)
        setTimeout(opacitybosses4off, 60)
        setTimeout(opacitybosses5off, 75)
        setTimeout(opacitybosses6off, 90)
        setTimeout(opacitybosses7off, 105)
        setTimeout(opacitybosses8off, 120)
        setTimeout(opacitybosses9off, 135)
        setTimeout(opacitybosses10off, 150)

        function opacitybosses1off() {
            document.getElementById("bosses-suboptions").style.opacity = '0.9';
        }

        function opacitybosses2off() {
            document.getElementById("bosses-suboptions").style.opacity = '0.8';
        }

        function opacitybosses3off() {
            document.getElementById("bosses-suboptions").style.opacity = '0.7';
        }

        function opacitybosses4off() {
            document.getElementById("bosses-suboptions").style.opacity = '0.6';
        }

        function opacitybosses5off() {
            document.getElementById("bosses-suboptions").style.opacity = '0.5';
        }

        function opacitybosses6off() {
            document.getElementById("bosses-suboptions").style.opacity = '0.4';
        }

        function opacitybosses7off() {
            document.getElementById("bosses-suboptions").style.opacity = '0.3';
        }

        function opacitybosses8off() {
            document.getElementById("bosses-suboptions").style.opacity = '0.2';
        }

        function opacitybosses9off() {
            document.getElementById("bosses-suboptions").style.opacity = '0.1';
        }

        function opacitybosses10off() {
            document.getElementById("bosses-suboptions").style.display = 'none';
            document.getElementById("bosses-main").classList.remove('active');
        }

    } else {
        document.getElementById("bosses-suboptions").style.display = 'block';
        document.getElementById("bosses-main").classList.add('active');
        setTimeout(opacitybosses1, 15)
        setTimeout(opacitybosses2, 30)
        setTimeout(opacitybosses3, 45)
        setTimeout(opacitybosses4, 60)
        setTimeout(opacitybosses5, 75)
        setTimeout(opacitybosses6, 90)
        setTimeout(opacitybosses7, 105)
        setTimeout(opacitybosses8, 120)
        setTimeout(opacitybosses9, 135)
        setTimeout(opacitybosses10, 150)

        function opacitybosses1() {
            document.getElementById("bosses-suboptions").style.opacity = '0.1';
        }

        function opacitybosses2() {
            document.getElementById("bosses-suboptions").style.opacity = '0.2';
        }

        function opacitybosses3() {
            document.getElementById("bosses-suboptions").style.opacity = '0.3';
        }

        function opacitybosses4() {
            document.getElementById("bosses-suboptions").style.opacity = '0.4';
        }

        function opacitybosses5() {
            document.getElementById("bosses-suboptions").style.opacity = '0.5';
        }

        function opacitybosses6() {
            document.getElementById("bosses-suboptions").style.opacity = '0.6';
        }

        function opacitybosses7() {
            document.getElementById("bosses-suboptions").style.opacity = '0.7';
        }

        function opacitybosses8() {
            document.getElementById("bosses-suboptions").style.opacity = '0.8';
        }

        function opacitybosses9() {
            document.getElementById("bosses-suboptions").style.opacity = '0.9';
        }

        function opacitybosses10() {
            document.getElementById("bosses-suboptions").style.opacity = '1';
        }
    }
}

function expandparagons() {

    if (document.getElementById("paragons-suboptions").style.display === 'block') {
        setTimeout(opacityparagons1off, 15)
        setTimeout(opacityparagons2off, 30)
        setTimeout(opacityparagons3off, 45)
        setTimeout(opacityparagons4off, 60)
        setTimeout(opacityparagons5off, 75)
        setTimeout(opacityparagons6off, 90)
        setTimeout(opacityparagons7off, 105)
        setTimeout(opacityparagons8off, 120)
        setTimeout(opacityparagons9off, 135)
        setTimeout(opacityparagons10off, 150)

        function opacityparagons1off() {
            document.getElementById("paragons-suboptions").style.opacity = '0.9';
        }

        function opacityparagons2off() {
            document.getElementById("paragons-suboptions").style.opacity = '0.8';
        }

        function opacityparagons3off() {
            document.getElementById("paragons-suboptions").style.opacity = '0.7';
        }

        function opacityparagons4off() {
            document.getElementById("paragons-suboptions").style.opacity = '0.6';
        }

        function opacityparagons5off() {
            document.getElementById("paragons-suboptions").style.opacity = '0.5';
        }

        function opacityparagons6off() {
            document.getElementById("paragons-suboptions").style.opacity = '0.4';
        }

        function opacityparagons7off() {
            document.getElementById("paragons-suboptions").style.opacity = '0.3';
        }

        function opacityparagons8off() {
            document.getElementById("paragons-suboptions").style.opacity = '0.2';
        }

        function opacityparagons9off() {
            document.getElementById("paragons-suboptions").style.opacity = '0.1';
        }

        function opacityparagons10off() {
            document.getElementById("paragons-suboptions").style.display = 'none';
            document.getElementById("paragons-main").classList.remove('active');
        }

    } else {
        document.getElementById("paragons-suboptions").style.display = 'block';
        document.getElementById("paragons-main").classList.add('active');
        setTimeout(opacityparagons1, 15)
        setTimeout(opacityparagons2, 30)
        setTimeout(opacityparagons3, 45)
        setTimeout(opacityparagons4, 60)
        setTimeout(opacityparagons5, 75)
        setTimeout(opacityparagons6, 90)
        setTimeout(opacityparagons7, 105)
        setTimeout(opacityparagons8, 120)
        setTimeout(opacityparagons9, 135)
        setTimeout(opacityparagons10, 150)

        function opacityparagons1() {
            document.getElementById("paragons-suboptions").style.opacity = '0.1';
        }

        function opacityparagons2() {
            document.getElementById("paragons-suboptions").style.opacity = '0.2';
        }

        function opacityparagons3() {
            document.getElementById("paragons-suboptions").style.opacity = '0.3';
        }

        function opacityparagons4() {
            document.getElementById("paragons-suboptions").style.opacity = '0.4';
        }

        function opacityparagons5() {
            document.getElementById("paragons-suboptions").style.opacity = '0.5';
        }

        function opacityparagons6() {
            document.getElementById("paragons-suboptions").style.opacity = '0.6';
        }

        function opacityparagons7() {
            document.getElementById("paragons-suboptions").style.opacity = '0.7';
        }

        function opacityparagons8() {
            document.getElementById("paragons-suboptions").style.opacity = '0.8';
        }

        function opacityparagons9() {
            document.getElementById("paragons-suboptions").style.opacity = '0.9';
        }

        function opacityparagons10() {
            document.getElementById("paragons-suboptions").style.opacity = '1';
        }
    }
}

function expandrounds() {

    if (document.getElementById("rounds-suboptions").style.display === 'block') {
        setTimeout(opacityrounds1off, 15)
        setTimeout(opacityrounds2off, 30)
        setTimeout(opacityrounds3off, 45)
        setTimeout(opacityrounds4off, 60)
        setTimeout(opacityrounds5off, 75)
        setTimeout(opacityrounds6off, 90)
        setTimeout(opacityrounds7off, 105)
        setTimeout(opacityrounds8off, 120)
        setTimeout(opacityrounds9off, 135)
        setTimeout(opacityrounds10off, 150)

        function opacityrounds1off() {
            document.getElementById("rounds-suboptions").style.opacity = '0.9';
        }

        function opacityrounds2off() {
            document.getElementById("rounds-suboptions").style.opacity = '0.8';
        }

        function opacityrounds3off() {
            document.getElementById("rounds-suboptions").style.opacity = '0.7';
        }

        function opacityrounds4off() {
            document.getElementById("rounds-suboptions").style.opacity = '0.6';
        }

        function opacityrounds5off() {
            document.getElementById("rounds-suboptions").style.opacity = '0.5';
        }

        function opacityrounds6off() {
            document.getElementById("rounds-suboptions").style.opacity = '0.4';
        }

        function opacityrounds7off() {
            document.getElementById("rounds-suboptions").style.opacity = '0.3';
        }

        function opacityrounds8off() {
            document.getElementById("rounds-suboptions").style.opacity = '0.2';
        }

        function opacityrounds9off() {
            document.getElementById("rounds-suboptions").style.opacity = '0.1';
        }

        function opacityrounds10off() {
            document.getElementById("rounds-suboptions").style.display = 'none';
            document.getElementById("rounds-main").classList.remove('active');
        }

    } else {
        document.getElementById("rounds-suboptions").style.display = 'block';
        document.getElementById("rounds-main").classList.add('active');
        setTimeout(opacityrounds1, 15)
        setTimeout(opacityrounds2, 30)
        setTimeout(opacityrounds3, 45)
        setTimeout(opacityrounds4, 60)
        setTimeout(opacityrounds5, 75)
        setTimeout(opacityrounds6, 90)
        setTimeout(opacityrounds7, 105)
        setTimeout(opacityrounds8, 120)
        setTimeout(opacityrounds9, 135)
        setTimeout(opacityrounds10, 150)

        function opacityrounds1() {
            document.getElementById("rounds-suboptions").style.opacity = '0.1';
        }

        function opacityrounds2() {
            document.getElementById("rounds-suboptions").style.opacity = '0.2';
        }

        function opacityrounds3() {
            document.getElementById("rounds-suboptions").style.opacity = '0.3';
        }

        function opacityrounds4() {
            document.getElementById("rounds-suboptions").style.opacity = '0.4';
        }

        function opacityrounds5() {
            document.getElementById("rounds-suboptions").style.opacity = '0.5';
        }

        function opacityrounds6() {
            document.getElementById("rounds-suboptions").style.opacity = '0.6';
        }

        function opacityrounds7() {
            document.getElementById("rounds-suboptions").style.opacity = '0.7';
        }

        function opacityrounds8() {
            document.getElementById("rounds-suboptions").style.opacity = '0.8';
        }

        function opacityrounds9() {
            document.getElementById("rounds-suboptions").style.opacity = '0.9';
        }

        function opacityrounds10() {
            document.getElementById("rounds-suboptions").style.opacity = '1';
        }
    }
}

function expandfarming() {

    if (document.getElementById("farming-suboptions").style.display === 'block') {
        setTimeout(opacityfarming1off, 15)
        setTimeout(opacityfarming2off, 30)
        setTimeout(opacityfarming3off, 45)
        setTimeout(opacityfarming4off, 60)
        setTimeout(opacityfarming5off, 75)
        setTimeout(opacityfarming6off, 90)
        setTimeout(opacityfarming7off, 105)
        setTimeout(opacityfarming8off, 120)
        setTimeout(opacityfarming9off, 135)
        setTimeout(opacityfarming10off, 150)

        function opacityfarming1off() {
            document.getElementById("farming-suboptions").style.opacity = '0.9';
        }

        function opacityfarming2off() {
            document.getElementById("farming-suboptions").style.opacity = '0.8';
        }

        function opacityfarming3off() {
            document.getElementById("farming-suboptions").style.opacity = '0.7';
        }

        function opacityfarming4off() {
            document.getElementById("farming-suboptions").style.opacity = '0.6';
        }

        function opacityfarming5off() {
            document.getElementById("farming-suboptions").style.opacity = '0.5';
        }

        function opacityfarming6off() {
            document.getElementById("farming-suboptions").style.opacity = '0.4';
        }

        function opacityfarming7off() {
            document.getElementById("farming-suboptions").style.opacity = '0.3';
        }

        function opacityfarming8off() {
            document.getElementById("farming-suboptions").style.opacity = '0.2';
        }

        function opacityfarming9off() {
            document.getElementById("farming-suboptions").style.opacity = '0.1';
        }

        function opacityfarming10off() {
            document.getElementById("farming-suboptions").style.display = 'none';
            document.getElementById("farming-main").classList.remove('active');
        }

    } else {
        document.getElementById("farming-suboptions").style.display = 'block';
        document.getElementById("farming-main").classList.add('active');
        setTimeout(opacityfarming1, 15)
        setTimeout(opacityfarming2, 30)
        setTimeout(opacityfarming3, 45)
        setTimeout(opacityfarming4, 60)
        setTimeout(opacityfarming5, 75)
        setTimeout(opacityfarming6, 90)
        setTimeout(opacityfarming7, 105)
        setTimeout(opacityfarming8, 120)
        setTimeout(opacityfarming9, 135)
        setTimeout(opacityfarming10, 150)

        function opacityfarming1() {
            document.getElementById("farming-suboptions").style.opacity = '0.1';
        }

        function opacityfarming2() {
            document.getElementById("farming-suboptions").style.opacity = '0.2';
        }

        function opacityfarming3() {
            document.getElementById("farming-suboptions").style.opacity = '0.3';
        }

        function opacityfarming4() {
            document.getElementById("farming-suboptions").style.opacity = '0.4';
        }

        function opacityfarming5() {
            document.getElementById("farming-suboptions").style.opacity = '0.5';
        }

        function opacityfarming6() {
            document.getElementById("farming-suboptions").style.opacity = '0.6';
        }

        function opacityfarming7() {
            document.getElementById("farming-suboptions").style.opacity = '0.7';
        }

        function opacityfarming8() {
            document.getElementById("farming-suboptions").style.opacity = '0.8';
        }

        function opacityfarming9() {
            document.getElementById("farming-suboptions").style.opacity = '0.9';
        }

        function opacityfarming10() {
            document.getElementById("farming-suboptions").style.opacity = '1';
        }
    }
}

function calculate() {


    let b = document.forms["calculator"]["boss"].value;
    let modifier = document.forms["calculator"]["modifier"].value;
    let players = document.forms["calculator"]["players"].value;

    let doublehp = document.forms["calculator"]["doublehp"];
    let d;
    let p;
    let tier1;
    let tier2;
    let tier3;
    let tier4;
    let tier5;

    if (b === "Normal Bloonarius") {
        tier1 = 20000
        tier2 = 75000
        tier3 = 350000
        tier4 = 750000
        tier5 = 3000000
    }
    if (b === "Elite Bloonarius") {
        tier1 = 50000
        tier2 = 300000
        tier3 = 2000000
        tier4 = 8000000
        tier5 = 40000000
    }
    if (b === "Normal Lych") {
        tier1 = 14000
        tier2 = 52500
        tier3 = 245000
        tier4 = 525000
        tier5 = 2100000
    }
    if (b === "Elite Lych") {
        tier1 = 30000
        tier2 = 180000
        tier3 = 1200000
        tier4 = 4800000
        tier5 = 24000000
    }
    if (b === "Normal Vortex") {
        tier1 = 20000
        tier2 = 62800
        tier3 = 294000
        tier4 = 628000
        tier5 = 2512000
    }
    if (b === "Elite Vortex") {
        tier1 = 41800
        tier2 = 251000
        tier3 = 1675000
        tier4 = 6700000
        tier5 = 33500000
    }
    if (b === "Normal Dreadbloon") {
        tier1 = 7500
        tier2 = 25000
        tier3 = 120000
        tier4 = 260000
        tier5 = 1000000
    }
    if (b === "Elite Dreadbloon") {
        tier1 = 15000
        tier2 = 90000
        tier3 = 650000
        tier4 = 2625000
        tier5 = 12500000
    }
    if (b === "Normal Phayze") {
        tier1 = 10000
        tier2 = 37500
        tier3 = 175000
        tier4 = 375000
        tier5 = 1500000
    }
    if (b === "Elite Phayze") {
        tier1 = 20000
        tier2 = 120000
        tier3 = 800000
        tier4 = 3200000
        tier5 = 16000000
    }

    if (players === "1") {
        p = 1
    }
    if (players === "2") {
        p = 1.2
    }
    if (players === "3") {
        p = 1.4
    }
    if (players === "4") {
        p = 1.6
    }

    if (doublehp.checked === true) {
        d = 2
    }
    else {
        d = 1
    }

    tier1=tier1*modifier*p*d
    tier2=tier2*modifier*p*d
    tier3=tier3*modifier*p*d
    tier4=tier4*modifier*p*d
    tier5=tier5*modifier*p*d

    document.getElementById(1).innerHTML = tier1.toFixed(0);
    document.getElementById(2).innerHTML = tier2.toFixed(0);
    document.getElementById(3).innerHTML = tier3.toFixed(0);
    document.getElementById(4).innerHTML = tier4.toFixed(0);
    document.getElementById(5).innerHTML = tier5.toFixed(0);

    if (b === "Normal Bloonarius") {
        tier1=tier1/4
        tier2=tier2/4
        tier3=tier3/4
        tier4=tier4/4
        tier5=tier5/4
    }
    if (b === "Elite Bloonarius") {
        tier1=tier1/8
        tier2=tier2/8
        tier3=tier3/8
        tier4=tier4/8
        tier5=tier5/8
    }
    if (b === "Normal Lych") {
        tier1=tier1/6
        tier2=tier2/6
        tier3=tier3/6
        tier4=tier4/6
        tier5=tier5/6
    }
    if (b === "Elite Lych") {
        tier1=tier1/8
        tier2=tier2/8
        tier3=tier3/8
        tier4=tier4/8
        tier5=tier5/8
    }
    if (b === "Normal Vortex") {
        tier1=tier1/4
        tier2=tier2/4
        tier3=tier3/4
        tier4=tier4/4
        tier5=tier5/4
    }
    if (b === "Elite Vortex") {
        tier1=tier1/8
        tier2=tier2/8
        tier3=tier3/8
        tier4=tier4/8
        tier5=tier5/8
    }
    if (b === "Normal Dreadbloon") {
        tier1=tier1/4
        tier2=tier2/4
        tier3=tier3/4
        tier4=tier4/4
        tier5=tier5/4
    }
    if (b === "Elite Dreadbloon") {
        tier1=tier1/4
        tier2=tier2/4
        tier3=tier3/4
        tier4=tier4/4
        tier5=tier5/4
    }
    if (b === "Normal Phayze") {
        tier1=tier1/4
        tier2=tier2/4
        tier3=tier3/4
        tier4=tier4/4
        tier5=tier5/4
    }
    if (b === "Elite Phayze") {
        tier1=tier1/6
        tier2=tier2/6
        tier3=tier3/6
        tier4=tier4/6
        tier5=tier5/6
    }

    document.getElementById(6).innerHTML = tier1.toFixed(0);
    document.getElementById(7).innerHTML = tier2.toFixed(0);
    document.getElementById(8).innerHTML = tier3.toFixed(0);
    document.getElementById(9).innerHTML = tier4.toFixed(0);
    document.getElementById(10).innerHTML = tier5.toFixed(0);
}