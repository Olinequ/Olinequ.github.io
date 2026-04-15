let solo = document.getElementsByClassName("solo")
let coop = document.getElementsByClassName("coop")
let bossSelectionList = document.querySelector("#bossSelectList")

selectBoss = (boss) => {
    for (let i = 0; i < 14; i++) {
        bossSelectionList.children[i].classList.remove("selected")
    }
    if (boss === 'bloony') {
        bossSelectionList.children[0].classList.add("selected")
        solo[0].innerHTML = `
                <h1>Solo</h1>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>MrPietrek / 34.35</p>
                            <p>Bloonarius #? / Off The Coast</p>
                            <p>[This run used unnerfed 042 spike storms]</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>YtseJam / 34.43</p>
                            <p>Bloonarius #? / Off The Coast</p>
                            <p>[This run used unnerfed 042 spike storms]</p>
                        </td>
                    </tr>
                </table>`

        coop[0].innerHTML = `
                <h1>Coop</h1>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>Jandalf + Animal / 34.51</p>
                            <p>Bloonarius #? / Spa Pits</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>Jandalf + Felicia + SirCrowley / 34.56</p>
                            <p>Bloonarius #? / Spa Pits</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`
    }
    else if (boss === 'lych') {
        bossSelectionList.children[1].classList.add("selected")
        solo[0].innerHTML = `
                <h1>Solo</h1>
                <h2>After the Lych rework</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>- / -</p>
                            <p>Lych #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>- / -</p>
                            <p>Lych #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>
                
                <h2>After the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>Thee Player / 2:45.51</p>
                            <p>Lych #56 / Cubism</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>GHGYS / 2:48.61</p>
                            <p>Lych #56 / Cubism</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>

                <h2>Before the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>Infuriation / 3:06.53</p>
                            <p>Lych #? / One Two Tree</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>YtseJam / 3:06.60</p>
                            <p>Lych #? / One Two tree</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`

        coop[0].innerHTML = `
                <h1>Coop</h1>
                <h2>After the Lych rework</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>- / -</p>
                            <p>Lych #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>- / -</p>
                            <p>Lych #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>
                
                <h2>After the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>Felicia + Spani / 3:06.73</p>
                            <p>Lych #? / Blons</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>Felicia + Spani + SirCrowley + Jandalf / 3:06.75</p>
                            <p>Lych #? / Blons</p>
                        </td>
                    </tr>
                </table>

                <h2>Before the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>Felicia + Spani / 3:06.73</p>
                            <p>Lych #? / Blons</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>Felicia + Spani + SirCrowley + Jandalf / 3:06.75</p>
                            <p>Lych #? / Blons</p>
                        </td>
                    </tr>
                </table>`
    }
    else if (boss === 'vortex') {
        bossSelectionList.children[2].classList.add("selected")
        solo[0].innerHTML = `
                <h1>Solo</h1>
                <h2>After the Vortex animation changes</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>Spani / 45.76</p>
                            <p>Vortex #? / Candy Falls</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>FLYFF / 45.96</p>
                            <p>Vortex #? / Candy Falls</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>

                <h2>Before the Vortex animation changes</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>YtseJam / 36.56</p>
                            <p>Vortex #? / Haunted</p>
                            <p>[This run used Brickell mines stacking]</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>MrPietrek / 36.60</p>
                            <p>Vortex #? / Haunted</p>
                            <p>[This run used Brickell mines stacking]</p>
                        </td>
                    </tr>
                </table>`
        coop[0].innerHTML = `
                <h1>Coop</h1>
                <h2>After the Vortex animation changes</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>LazyLizard + Katabu / 50.28</p>
                            <p>Vortex #? / Candy Falls</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>Spani + Panda / 51.18</p>
                            <p>Vortex #? / Candy Falls</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>

                <h2>Before the Vortex animation changes</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>WorZollLak + Player / 40.13</p>
                            <p>Vortex #? / Frozen Over</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>Jandalf + SirCrowley + Felicia + Spani / 40.98</p>
                            <p>Vortex #? / Frozen Over</p>
                            <p class="empty"></p>
                        </td>
                    </tr>
                </table>`
    }
    else if (boss === 'dread') {
        bossSelectionList.children[3].classList.add("selected")
        solo[0].innerHTML = `
                <h1>Solo</h1>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>YtseJam / 35.50</p>
                            <p>Dreadbloon #? / Muddy Puddles</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>Olinequ / 36.20</p>
                            <p>Dreadbloon #? / End Of The Road</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`

        coop[0].innerHTML = `
                <h1>Coop</h1>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>Felicia + SirCrowley + Jandalf + Berix / 37.85</p>
                            <p>Dreadbloon #? / Sulfur Springs</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>Felicia + Spani + SirCrowley + Donniesharko / 39.08</p>
                            <p>Dreadbloon #? / Muddy Puddles</p>
                        </td>
                    </tr>
                </table>`
    }
    else if (boss === 'phayze') {
        bossSelectionList.children[4].classList.add("selected")
        solo[0].innerHTML = `
               <h1>Solo</h1>
                <h2>After the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>Gone / 1:04.98</p>
                            <p>Phayze #27 / Logs</p>
                            <p>[Phayze was 500% speed that week]</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>Storyteller / 1:05.35</p>
                            <p>Phayze #27 / Logs</p>
                            <p>[Phayze was 500% speed that week]</p>
                        </td>
                    </tr>
                </table>

                <h2>Before the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>Olinequ / 1:33.30</p>
                            <p>Phayze #? / End Of The Road</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>YtseJam / 1:33.43</p>
                            <p>Phayze #? / Chutes</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`

        coop[0].innerHTML = `
                <h1>Coop</h1>
                <h2>After the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>Felicia + Jandalf + SirCrowley + Veteol / 1:06.88</p>
                            <p>Event #? / Logs</p>
                            <p>[Phayze was 500% speed that week]</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>Felicia + Veteol / 1:06.96</p>
                            <p>Event #? / Logs</p>
                            <p>[Phayze was 500% speed that week]</p>
                        </td>
                    </tr>
                </table>

                <h2>Before the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>Jandalf + SirCr0wley + Felicia + Spani / 1:35.86</p>
                            <p>Phayze #? / Chutes</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>WorZoII3Lak + Orange / 1:39.05</p>
                            <p>Phayze #? / Chutes</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`
    }
    else if (boss === 'blasta') {
        bossSelectionList.children[5].classList.add("selected")
        solo[0].innerHTML = `
                <h1>Solo</h1>
                <h2>After the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>Olinequ / 1:50.78</p>
                            <p>Blastapopoulos #14 / Tinkerton</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>Gone / 1:51.81</p>
                            <p>Blastapopoulos #14 / Tinkerton</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>
                
                <h2>Before the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>Animal / 1:32.15</p>
                            <p>Blastapopoulos #1 / Four Circles</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>06bob / 1:33.03</p>
                            <p>Blastapopoulos #1 / Four Circles</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`

        coop[0].innerHTML = `
                <h1>Coop</h1>
                <h2>After the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>- / -</p>
                            <p>Blastapopoulos #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>- / -</p>
                            <p>Blastapopoulos #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>
                
                <h2>Before the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>- / -</p>
                            <p>Blastapopoulos #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>- / -</p>
                            <p>Blastapopoulos #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`
    }
    else if (boss === 'diamond') {
        bossSelectionList.children[6].classList.add("selected")
        solo[0].innerHTML = `
                <h1>Solo</h1>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>- / -</p>
                            <p>Diamondback #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>- / -</p>
                            <p>Diamondback #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`

        coop[0].innerHTML = `
                <h1>Coop</h1>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1normal.png" alt="t1"></td>
                        <td>
                            <p>- / -</p>
                            <p>Diamondback #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2normal.png" alt="t2"></td>
                        <td>
                            <p>- / -</p>
                            <p>Diamondback #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`
    }
    else if (boss === 'bloonyE') {
        bossSelectionList.children[7].classList.add("selected")
        solo[0].innerHTML = `
                <h1>Solo</h1>
                <h2>After Spike Paragon rework</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>- / -</p>
                            <p>Bloonarius #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>- / -</p>
                            <p>Bloonarius #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>

                <h2>Before Spike Paragon rework</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>Whitenight / 31.73</p>
                            <p>Bloonarius #? / Spa Pits</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>Karler + SirCrowley (Tie) / 32.01</p>
                            <p>Bloonarius #? / Spa Pits</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>

                <h2>Before Spike Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>MrPietrek / 38.58</p>
                            <p>Bloonarius #? / Cornfield</p>
                            <p>[This run used old spikes that could pile up over multiple rounds, and the boss had 37.5% HP]</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>YtseJam / 39.20</p>
                            <p>Bloonarius #? / Cornfield</p>
                            <p>[This run used old spikes that could pile up over multiple rounds, and the boss had 37.5% HP]</p>
                        </td>
                    </tr>
                </table>`

        coop[0].innerHTML = `
                <h1>Coop</h1>
                <h2>After Spike Paragon rework</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>- / -</p>
                            <p>Bloonarius #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>- / -</p>
                            <p>Bloonarius #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>


                <h2>Before Spike Paragon rework</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>Jandalf + SirCrowley / 38.10</p>
                            <p>Bloonarius #? / Spa Pits</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>Jandalf + Spani + SirCr0wley + Felicia / 42.30</p>
                            <p>Bloonarius #? / Tinkerton</p>
                        </td>
                    </tr>
                </table>

                <h2>Before Spike Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>Jandalf + SirCr0wley + Felicia + Spani / 1:12.95</p>
                            <p>Bloonarius #? / Another Brick</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>WorZoII3Lak + Player / 1:19.73</p>
                            <p>Bloonarius #? / Another Brick</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`
    }
    else if (boss === 'lychE') {
        bossSelectionList.children[8].classList.add("selected")
        solo[0].innerHTML = `
                <h1>Solo</h1>
                <h2>After the Lych rework</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>- / -</p>
                            <p>Lych #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>- / -</p>
                            <p>Lych #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>
                
                <h2>After the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>Ikun / 5:32.41</p>
                            <p>Lych #56 / Cubism</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>Thee Player / 6:08.71</p>
                            <p>Lych #56 / Cubism</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>

                <h2>2025 April Fools event on Blons</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>YtseJam / 4:07.05</p>
                            <p>Lych #? / Blons</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>MrPietrek / 4:07.11</p>
                            <p>Lych #? / Blons</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>

                <h2>Before the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>MrPietrek / 4:16:50</p>
                            <p>Lych #? / Another brick</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>YtseJam / 4:20.85</p>
                            <p>Lych #? / Tree Stump</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`

        coop[0].innerHTML = `
                <h1>Coop</h1>
                <h2>After the Lych rework</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>- / -</p>
                            <p>Lych #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>- / -</p>
                            <p>Lych #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>
                
                <h2>After the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>- / -</p>
                            <p>Lych #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>- / -</p>
                            <p>Lych #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>

                <h2>2025 April Fools event on Blons</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>Felicia + Katabu / 4:10.11</p>
                            <p>Lych #? / Blons</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>Resell + Karler + Barracuda / 4:14.31</p>
                            <p>Lych #? / Blons</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>

                <h2>Before the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>Felicia + Spani + SirCrowley + Jandalf / 4:16.53</p>
                            <p>Lych #? / Ancient Portal</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>Thee Player + Axyom / 4:22.18</p>
                            <p>Lych #? / Ancient Portal</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`
    }
    else if (boss === 'vortexE') {
        bossSelectionList.children[9].classList.add("selected")
        solo[0].innerHTML = `
                <h1>Solo</h1>
                <h2>After the Vortex animation changes</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>Whitenight / 1:45.20</p>
                            <p>Vortex #? / Frozen Over</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>SirCrowley / 1:47.63</p>
                            <p>Vortex #? / Frozen Over</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>

                <h2>Before the Vortex animation changes</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>Whitenight / 1:45.20</p>
                            <p>Vortex #? / Frozen Over</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>SirCrowley / 1:47.63</p>
                            <p>Vortex #? / Frozen Over</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`
        coop[0].innerHTML = `
                <h1>Coop</h1>
                <h2>After the Vortex animation changes</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>Felicia + Fool + Jandalf + SirCrowley / 1:52.11</p>
                            <p>Vortex #? / Frozen Over</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>FynnEbsen + Spani + Schmusekroko + EpicLion / 2:30.70</p>
                            <p>Vortex #? / Frozen Over</p>
                        </td>
                    </tr>
                </table>

                <h2>Before the Vortex animation changes</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>Felicia + Fool + Jandalf + SirCrowley / 1:52.11</p>
                            <p>Vortex #? / Frozen Over</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>FynnEbsen + Spani + Schmusekroko + EpicLion / 2:30.70</p>
                            <p>Vortex #? / Frozen Over</p>
                        </td>
                    </tr>
                </table>`
    }
    else if (boss === 'dreadE') {
        bossSelectionList.children[10].classList.add("selected")
        solo[0].innerHTML = `
                <h1>Solo</h1>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>WhiteNight / 1:03.35</p>
                            <p>Dreadbloon #? / Muddy Puddles</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>Karler / 1:11.81</p>
                            <p>Dreadbloon #? / Frozen Over</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`

        coop[0].innerHTML = `
                <h1>Coop</h1>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>Felicia + Spani + SirCrowley + Jandalf / 58.56</p>
                            <p>Dreadbloon #? / Spice Islands</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>LazyLizard + Resell + Katabu / 1:10.16</p>
                            <p>Dreadbloon #? / Spice Islands</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`
    }
    else if (boss === 'phayzeE') {
        bossSelectionList.children[11].classList.add("selected")
        solo[0].innerHTML = `
               <h1>Solo</h1>
                <h2>After the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>- / -</p>
                            <p>Phayze #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>- / -</p>
                            <p>Phayze #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>

                <h2>Before the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>Whitenight / 3:20.08</p>
                            <p>Phayze #? / Chutes</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>Q / 3:30.78</p>
                            <p>Phayze #? / Chutes</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`

        coop[0].innerHTML = `
                <h1>Coop</h1>
                <h2>After the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>- / -</p>
                            <p>Phayze #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>- / -</p>
                            <p>Phayze #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>

                <h2>Before Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>Jandalf + SirCr0wley + Felicia + Spani / 3:14.38</p>
                            <p>Phayze #? / Chutes</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>Buttman + 10 + Milin + Seerukio / 3:24.60</p>
                            <p>Phayze #? / Chutes</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`
    }
    else if (boss === 'blastaE') {
        bossSelectionList.children[12].classList.add("selected")
        solo[0].innerHTML = `
                <h1>Solo</h1>
                <h2>After the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>Ikun / 2:47.93</p>
                            <p>Blastapopoulos #16 / Spice Islands</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>Thee Player / 3:06.90</p>
                            <p>Blastapopoulos #16 / Spice Islands</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>
                
                <h2>Before the Ice Paragon introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>Jandalf / 2:41.98</p>
                            <p>Blastapopoulos #? / Ancient Portal</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>Guanium / 3:39.65</p>
                            <p>Blastapopoulos #1 / Four Circles</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`

        coop[0].innerHTML = `
                <h1>Coop</h1>
                <h2>After the Ice Paragon Introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>Vengeance + Wonder + HS + Kitty675 / 2:50.23</p>
                            <p>Blastapopoulos #16 / Spice Islands</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>Thee Player + LazyLizard / 3:01.31</p>
                            <p>Blastapopoulos #16 / Spice Islands</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>
                
                <h2>Before the Ice Paragon Introduction</h2>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>Jandalf + Turtles + SirCr0wley + Felicia / 3:21.36</p>
                            <p>Blastapopoulos #? / Ancient Portal</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>- / -</p>
                            <p>Blastapopoulos #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`
    }
    else if (boss === 'diamondE') {
        bossSelectionList.children[13].classList.add("selected")
        solo[0].innerHTML = `
                <h1>Solo</h1>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>- / -</p>
                            <p>Diamondback #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>- / -</p>
                            <p>Diamondback #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`

        coop[0].innerHTML = `
                <h1>Coop</h1>
                <table class="category">
                    <tr>
                        <td><img src="IMG/top1elite.png" alt="t1"></td>
                        <td>
                            <p>- / -</p>
                            <p>Diamondback #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="filler"></td>
                    </tr>
                    <tr>
                        <td><img src="IMG/top2elite.png" alt="t2"></td>
                        <td>
                            <p>- / -</p>
                            <p>Diamondback #? / -</p>
                            <p class="empty">-</p>
                        </td>
                    </tr>
                </table>`
    }
}