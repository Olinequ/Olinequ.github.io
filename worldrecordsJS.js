let bossSelectionList = document.querySelector("#bossSelectList")
let solo = document.querySelector("#solo")
let coop = document.querySelector("#coop")

selectBoss(1)

async function selectBoss(boss) {
    for (let i = 0; i < 14; i++) {
        bossSelectionList.children[i].classList.remove("selected")
    }
    bossSelectionList.children[boss-1].classList.add("selected")

    const response = await fetch(`worldRecordsData.txt`);
    const data = await response.text();
    const lines = data.split('\n');

    switch (parseInt(boss)) {
        case 1:
            solo.innerHTML = `
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[6].split('/')[0]} / ${lines[6].split('/')[1]}</span><br><span id="mapInfo">${lines[6].split('/')[2]} / ${lines[6].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[7].split('/')[0]} / ${lines[7].split('/')[1]}</span><br><span id="mapInfo">${lines[7].split('/')[2]} / ${lines[7].split('/')[3]}</span></td> </tr>
            </table>`
            coop.innerHTML = `
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[9].split('/')[0]} / ${lines[9].split('/')[1]}</span><br><span id="mapInfo">${lines[9].split('/')[2]} / ${lines[9].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[10].split('/')[0]} / ${lines[10].split('/')[1]}</span><br><span id="mapInfo">${lines[10].split('/')[2]} / ${lines[10].split('/')[3]}</span></td> </tr>
            </table>`
            break;
        case 2:
            solo.innerHTML = `
            <h1 class="categoryName">Post Lych rework</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[22].split('/')[0]} / ${lines[22].split('/')[1]}</span><br><span id="mapInfo">${lines[22].split('/')[2]} / ${lines[22].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[23].split('/')[0]} / ${lines[23].split('/')[1]}</span><br><span id="mapInfo">${lines[23].split('/')[2]} / ${lines[23].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: After the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[31].split('/')[0]} / ${lines[31].split('/')[1]}</span><br><span id="mapInfo">${lines[31].split('/')[2]} / ${lines[31].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[32].split('/')[0]} / ${lines[32].split('/')[1]}</span><br><span id="mapInfo">${lines[32].split('/')[2]} / ${lines[32].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: Before the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[40].split('/')[0]} / ${lines[40].split('/')[1]}</span><br><span id="mapInfo">${lines[40].split('/')[2]} / ${lines[40].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[41].split('/')[0]} / ${lines[41].split('/')[1]}</span><br><span id="mapInfo">${lines[41].split('/')[2]} / ${lines[41].split('/')[3]}</span></td> </tr>
            </table>`
            coop.innerHTML = `
            <h1 class="categoryName">Post Lych rework</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[25].split('/')[0]} / ${lines[25].split('/')[1]}</span><br><span id="mapInfo">${lines[25].split('/')[2]} / ${lines[25].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[26].split('/')[0]} / ${lines[26].split('/')[1]}</span><br><span id="mapInfo">${lines[26].split('/')[2]} / ${lines[26].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: After the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[34].split('/')[0]} / ${lines[34].split('/')[1]}</span><br><span id="mapInfo">${lines[34].split('/')[2]} / ${lines[34].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[35].split('/')[0]} / ${lines[35].split('/')[1]}</span><br><span id="mapInfo">${lines[35].split('/')[2]} / ${lines[35].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: Before the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[43].split('/')[0]} / ${lines[43].split('/')[1]}</span><br><span id="mapInfo">${lines[43].split('/')[2]} / ${lines[43].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[44].split('/')[0]} / ${lines[44].split('/')[1]}</span><br><span id="mapInfo">${lines[44].split('/')[2]} / ${lines[44].split('/')[3]}</span></td> </tr>
            </table>`
            break;
        case 3:
            solo.innerHTML = `
            <h1 class="categoryName">After the vortex animation changes</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[56].split('/')[0]} / ${lines[56].split('/')[1]}</span><br><span id="mapInfo">${lines[56].split('/')[2]} / ${lines[56].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[57].split('/')[0]} / ${lines[57].split('/')[1]}</span><br><span id="mapInfo">${lines[57].split('/')[2]} / ${lines[57].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: Before the vortex animation changes</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[67].split('/')[0]} / ${lines[67].split('/')[1]}</span><br><span id="mapInfo">${lines[67].split('/')[2]} / ${lines[67].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[68].split('/')[0]} / ${lines[68].split('/')[1]}</span><br><span id="mapInfo">${lines[68].split('/')[2]} / ${lines[68].split('/')[3]}</span></td> </tr>
            </table>`
            coop.innerHTML = `
            <h1 class="categoryName">After the vortex animation changes</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[60].split('/')[0]} / ${lines[60].split('/')[1]}</span><br><span id="mapInfo">${lines[60].split('/')[2]} / ${lines[60].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[61].split('/')[0]} / ${lines[61].split('/')[1]}</span><br><span id="mapInfo">${lines[61].split('/')[2]} / ${lines[61].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: Before the vortex animation changes</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[71].split('/')[0]} / ${lines[71].split('/')[1]}</span><br><span id="mapInfo">${lines[71].split('/')[2]} / ${lines[71].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[72].split('/')[0]} / ${lines[72].split('/')[1]}</span><br><span id="mapInfo">${lines[72].split('/')[2]} / ${lines[72].split('/')[3]}</span></td> </tr>
            </table>`
            break;
        case 4:
            solo.innerHTML = `
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[84].split('/')[0]} / ${lines[84].split('/')[1]}</span><br><span id="mapInfo">${lines[84].split('/')[2]} / ${lines[84].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[85].split('/')[0]} / ${lines[85].split('/')[1]}</span><br><span id="mapInfo">${lines[85].split('/')[2]} / ${lines[85].split('/')[3]}</span></td> </tr>
            </table>`
            coop.innerHTML = `
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[88].split('/')[0]} / ${lines[88].split('/')[1]}</span><br><span id="mapInfo">${lines[88].split('/')[2]} / ${lines[88].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[89].split('/')[0]} / ${lines[89].split('/')[1]}</span><br><span id="mapInfo">${lines[89].split('/')[2]} / ${lines[89].split('/')[3]}</span></td> </tr>
            </table>`
            break;
        case 5:
            solo.innerHTML = `
            <h1 class="categoryName">After the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[101].split('/')[0]} / ${lines[101].split('/')[1]}</span><br><span id="mapInfo">${lines[101].split('/')[2]} / ${lines[101].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[102].split('/')[0]} / ${lines[102].split('/')[1]}</span><br><span id="mapInfo">${lines[102].split('/')[2]} / ${lines[102].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: Before the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[111].split('/')[0]} / ${lines[111].split('/')[1]}</span><br><span id="mapInfo">${lines[111].split('/')[2]} / ${lines[111].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[112].split('/')[0]} / ${lines[112].split('/')[1]}</span><br><span id="mapInfo">${lines[112].split('/')[2]} / ${lines[112].split('/')[3]}</span></td> </tr>
            </table>`
            coop.innerHTML = `
            <h1 class="categoryName">After the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[105].split('/')[0]} / ${lines[105].split('/')[1]}</span><br><span id="mapInfo">${lines[105].split('/')[2]} / ${lines[105].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[106].split('/')[0]} / ${lines[106].split('/')[1]}</span><br><span id="mapInfo">${lines[106].split('/')[2]} / ${lines[106].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: Before the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[116].split('/')[0]} / ${lines[116].split('/')[1]}</span><br><span id="mapInfo">${lines[116].split('/')[2]} / ${lines[116].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[117].split('/')[0]} / ${lines[117].split('/')[1]}</span><br><span id="mapInfo">${lines[117].split('/')[2]} / ${lines[117].split('/')[3]}</span></td> </tr>
            </table>`
            break;
        case 6:
            solo.innerHTML = `
            <h1 class="categoryName">After the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[129].split('/')[0]} / ${lines[129].split('/')[1]}</span><br><span id="mapInfo">${lines[129].split('/')[2]} / ${lines[129].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[130].split('/')[0]} / ${lines[130].split('/')[1]}</span><br><span id="mapInfo">${lines[130].split('/')[2]} / ${lines[130].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: Before the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[139].split('/')[0]} / ${lines[139].split('/')[1]}</span><br><span id="mapInfo">${lines[139].split('/')[2]} / ${lines[139].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[140].split('/')[0]} / ${lines[140].split('/')[1]}</span><br><span id="mapInfo">${lines[140].split('/')[2]} / ${lines[140].split('/')[3]}</span></td> </tr>
            </table>`
            coop.innerHTML = `
            <h1 class="categoryName">After the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[133].split('/')[0]} / ${lines[133].split('/')[1]}</span><br><span id="mapInfo">${lines[133].split('/')[2]} / ${lines[133].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[134].split('/')[0]} / ${lines[134].split('/')[1]}</span><br><span id="mapInfo">${lines[134].split('/')[2]} / ${lines[134].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: Before the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[143].split('/')[0]} / ${lines[143].split('/')[1]}</span><br><span id="mapInfo">${lines[143].split('/')[2]} / ${lines[143].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[144].split('/')[0]} / ${lines[144].split('/')[1]}</span><br><span id="mapInfo">${lines[144].split('/')[2]} / ${lines[144].split('/')[3]}</span></td> </tr>
            </table>`
            break;
        case 7:
            solo.innerHTML = `
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[156].split('/')[0]} / ${lines[156].split('/')[1]}</span><br><span id="mapInfo">${lines[156].split('/')[2]} / ${lines[156].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[157].split('/')[0]} / ${lines[157].split('/')[1]}</span><br><span id="mapInfo">${lines[157].split('/')[2]} / ${lines[157].split('/')[3]}</span></td> </tr>
            </table>`
            coop.innerHTML = `
            <table> 
            <tr>
            <td><img src="IMG/top1normal.png" alt="top1"></td>
            <td><span id="player">${lines[160].split('/')[0]} / ${lines[160].split('/')[1]}</span><br><span id="mapInfo">${lines[160].split('/')[2]} / ${lines[160].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2normal.png" alt="top2"></td>
            <td><span id="player">${lines[161].split('/')[0]} / ${lines[161].split('/')[1]}</span><br><span id="mapInfo">${lines[161].split('/')[2]} / ${lines[161].split('/')[3]}</span></td> </tr>
            </table>`
            break;
        case 8:
            solo.innerHTML = `
            <h1 class="categoryName">After Spike Paragon nerf</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[173].split('/')[0]} / ${lines[173].split('/')[1]}</span><br><span id="mapInfo">${lines[173].split('/')[2]} / ${lines[173].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[174].split('/')[0]} / ${lines[174].split('/')[1]}</span><br><span id="mapInfo">${lines[174].split('/')[2]} / ${lines[174].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: During the Spike Paragon release</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[183].split('/')[0]} / ${lines[183].split('/')[1]}</span><br><span id="mapInfo">${lines[183].split('/')[2]} / ${lines[183].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[184].split('/')[0]} / ${lines[184].split('/')[1]}</span><br><span id="mapInfo">${lines[184].split('/')[2]} / ${lines[184].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: Before the Spike Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[193].split('/')[0]} / ${lines[193].split('/')[1]}</span><br><span id="mapInfo">${lines[193].split('/')[2]} / ${lines[193].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[194].split('/')[0]} / ${lines[194].split('/')[1]}</span><br><span id="mapInfo">${lines[194].split('/')[2]} / ${lines[194].split('/')[3]}</span></td> </tr>
            </table>`
            coop.innerHTML = `
            <h1 class="categoryName">After Spike Paragon nerf</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[177].split('/')[0]} / ${lines[177].split('/')[1]}</span><br><span id="mapInfo">${lines[177].split('/')[2]} / ${lines[177].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[178].split('/')[0]} / ${lines[178].split('/')[1]}</span><br><span id="mapInfo">${lines[178].split('/')[2]} / ${lines[178].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: During the Spike Paragon release</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[187].split('/')[0]} / ${lines[187].split('/')[1]}</span><br><span id="mapInfo">${lines[187].split('/')[2]} / ${lines[187].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[188].split('/')[0]} / ${lines[188].split('/')[1]}</span><br><span id="mapInfo">${lines[188].split('/')[2]} / ${lines[188].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: Before the Spike Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[197].split('/')[0]} / ${lines[197].split('/')[1]}</span><br><span id="mapInfo">${lines[197].split('/')[2]} / ${lines[197].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[198].split('/')[0]} / ${lines[198].split('/')[1]}</span><br><span id="mapInfo">${lines[198].split('/')[2]} / ${lines[198].split('/')[3]}</span></td> </tr>
            </table>`
            break;
        case 9:
            solo.innerHTML = `
            <h1 class="categoryName">Post Lych rework</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[210].split('/')[0]} / ${lines[210].split('/')[1]}</span><br><span id="mapInfo">${lines[210].split('/')[2]} / ${lines[210].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[211].split('/')[0]} / ${lines[211].split('/')[1]}</span><br><span id="mapInfo">${lines[211].split('/')[2]} / ${lines[211].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: 2025 April Fools event on Blons</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[220].split('/')[0]} / ${lines[220].split('/')[1]}</span><br><span id="mapInfo">${lines[220].split('/')[2]} / ${lines[220].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[221].split('/')[0]} / ${lines[221].split('/')[1]}</span><br><span id="mapInfo">${lines[221].split('/')[2]} / ${lines[221].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: Before the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[230].split('/')[0]} / ${lines[230].split('/')[1]}</span><br><span id="mapInfo">${lines[230].split('/')[2]} / ${lines[230].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[231].split('/')[0]} / ${lines[231].split('/')[1]}</span><br><span id="mapInfo">${lines[231].split('/')[2]} / ${lines[231].split('/')[3]}</span></td> </tr>
            </table>`
            coop.innerHTML = `
            <h1 class="categoryName">Post Lych rework</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[214].split('/')[0]} / ${lines[214].split('/')[1]}</span><br><span id="mapInfo">${lines[214].split('/')[2]} / ${lines[214].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[215].split('/')[0]} / ${lines[215].split('/')[1]}</span><br><span id="mapInfo">${lines[215].split('/')[2]} / ${lines[215].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: 2025 April Fools event on Blons</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[224].split('/')[0]} / ${lines[224].split('/')[1]}</span><br><span id="mapInfo">${lines[224].split('/')[2]} / ${lines[224].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[225].split('/')[0]} / ${lines[225].split('/')[1]}</span><br><span id="mapInfo">${lines[225].split('/')[2]} / ${lines[225].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: Before the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[234].split('/')[0]} / ${lines[234].split('/')[1]}</span><br><span id="mapInfo">${lines[234].split('/')[2]} / ${lines[234].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[235].split('/')[0]} / ${lines[235].split('/')[1]}</span><br><span id="mapInfo">${lines[235].split('/')[2]} / ${lines[235].split('/')[3]}</span></td> </tr>
            </table>`
            break;
        case 10:
            solo.innerHTML = `
            <h1 class="categoryName">After the vortex animation changes</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[247].split('/')[0]} / ${lines[247].split('/')[1]}</span><br><span id="mapInfo">${lines[247].split('/')[2]} / ${lines[247].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[248].split('/')[0]} / ${lines[248].split('/')[1]}</span><br><span id="mapInfo">${lines[248].split('/')[2]} / ${lines[248].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: Before the vortex animation changes</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[257].split('/')[0]} / ${lines[257].split('/')[1]}</span><br><span id="mapInfo">${lines[257].split('/')[2]} / ${lines[257].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[258].split('/')[0]} / ${lines[258].split('/')[1]}</span><br><span id="mapInfo">${lines[258].split('/')[2]} / ${lines[258].split('/')[3]}</span></td> </tr>
            </table>`
            coop.innerHTML = `
            <h1 class="categoryName">After the vortex animation changes</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[251].split('/')[0]} / ${lines[251].split('/')[1]}</span><br><span id="mapInfo">${lines[251].split('/')[2]} / ${lines[251].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[252].split('/')[0]} / ${lines[252].split('/')[1]}</span><br><span id="mapInfo">${lines[252].split('/')[2]} / ${lines[252].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: Before the vortex animation changes</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[261].split('/')[0]} / ${lines[261].split('/')[1]}</span><br><span id="mapInfo">${lines[261].split('/')[2]} / ${lines[261].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[262].split('/')[0]} / ${lines[262].split('/')[1]}</span><br><span id="mapInfo">${lines[262].split('/')[2]} / ${lines[262].split('/')[3]}</span></td> </tr>
            </table>`
            break;
        case 11:
            solo.innerHTML = `
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[274].split('/')[0]} / ${lines[274].split('/')[1]}</span><br><span id="mapInfo">${lines[274].split('/')[2]} / ${lines[274].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[275].split('/')[0]} / ${lines[275].split('/')[1]}</span><br><span id="mapInfo">${lines[275].split('/')[2]} / ${lines[275].split('/')[3]}</span></td> </tr>
            </table>`
            coop.innerHTML = `
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[279].split('/')[0]} / ${lines[279].split('/')[1]}</span><br><span id="mapInfo">${lines[279].split('/')[2]} / ${lines[279].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[280].split('/')[0]} / ${lines[280].split('/')[1]}</span><br><span id="mapInfo">${lines[280].split('/')[2]} / ${lines[280].split('/')[3]}</span></td> </tr>
            </table>`
            break;
        case 12:
            solo.innerHTML = `
            <h1 class="categoryName">After the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[292].split('/')[0]} / ${lines[292].split('/')[1]}</span><br><span id="mapInfo">${lines[292].split('/')[2]} / ${lines[292].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[293].split('/')[0]} / ${lines[293].split('/')[1]}</span><br><span id="mapInfo">${lines[293].split('/')[2]} / ${lines[293].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: Before the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[302].split('/')[0]} / ${lines[302].split('/')[1]}</span><br><span id="mapInfo">${lines[302].split('/')[2]} / ${lines[302].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[303].split('/')[0]} / ${lines[303].split('/')[1]}</span><br><span id="mapInfo">${lines[303].split('/')[2]} / ${lines[303].split('/')[3]}</span></td> </tr>
            </table>`
            coop.innerHTML = `
            <h1 class="categoryName">After the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[296].split('/')[0]} / ${lines[296].split('/')[1]}</span><br><span id="mapInfo">${lines[296].split('/')[2]} / ${lines[296].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[297].split('/')[0]} / ${lines[297].split('/')[1]}</span><br><span id="mapInfo">${lines[297].split('/')[2]} / ${lines[297].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: Before the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[306].split('/')[0]} / ${lines[306].split('/')[1]}</span><br><span id="mapInfo">${lines[306].split('/')[2]} / ${lines[306].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[307].split('/')[0]} / ${lines[307].split('/')[1]}</span><br><span id="mapInfo">${lines[307].split('/')[2]} / ${lines[307].split('/')[3]}</span></td> </tr>
            </table>`
            break;
        case 13:
            solo.innerHTML = `
            <h1 class="categoryName">After the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[319].split('/')[0]} / ${lines[319].split('/')[1]}</span><br><span id="mapInfo">${lines[319].split('/')[2]} / ${lines[319].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[320].split('/')[0]} / ${lines[320].split('/')[1]}</span><br><span id="mapInfo">${lines[320].split('/')[2]} / ${lines[320].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: Before the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[329].split('/')[0]} / ${lines[329].split('/')[1]}</span><br><span id="mapInfo">${lines[329].split('/')[2]} / ${lines[329].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[330].split('/')[0]} / ${lines[330].split('/')[1]}</span><br><span id="mapInfo">${lines[330].split('/')[2]} / ${lines[330].split('/')[3]}</span></td> </tr>
            </table>`
            coop.innerHTML = `
            <h1 class="categoryName">After the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[323].split('/')[0]} / ${lines[323].split('/')[1]}</span><br><span id="mapInfo">${lines[323].split('/')[2]} / ${lines[323].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[324].split('/')[0]} / ${lines[324].split('/')[1]}</span><br><span id="mapInfo">${lines[324].split('/')[2]} / ${lines[324].split('/')[3]}</span></td> </tr>
            </table>

            <h1 class="categoryName">Legacy: Before the Ice Paragon introduction</h1>
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[333].split('/')[0]} / ${lines[333].split('/')[1]}</span><br><span id="mapInfo">${lines[333].split('/')[2]} / ${lines[333].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[334].split('/')[0]} / ${lines[334].split('/')[1]}</span><br><span id="mapInfo">${lines[334].split('/')[2]} / ${lines[334].split('/')[3]}</span></td> </tr>
            </table>`
            break;
        case 14:
            solo.innerHTML = `
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[346].split('/')[0]} / ${lines[346].split('/')[1]}</span><br><span id="mapInfo">${lines[346].split('/')[2]} / ${lines[346].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[347].split('/')[0]} / ${lines[347].split('/')[1]}</span><br><span id="mapInfo">${lines[347].split('/')[2]} / ${lines[347].split('/')[3]}</span></td> </tr>
            </table>`
            coop.innerHTML = `
            <table> 
            <tr>
            <td><img src="IMG/top1elite.png" alt="top1"></td>
            <td><span id="player">${lines[350].split('/')[0]} / ${lines[350].split('/')[1]}</span><br><span id="mapInfo">${lines[350].split('/')[2]} / ${lines[350].split('/')[3]}</span></td> </tr>
            <tr> <td class="filler"> </tr> <tr> 
            <td><img src="IMG/top2elite.png" alt="top2"></td>
            <td><span id="player">${lines[351].split('/')[0]} / ${lines[351].split('/')[1]}</span><br><span id="mapInfo">${lines[351].split('/')[2]} / ${lines[351].split('/')[3]}</span></td> </tr>
            </table>`
            break;
        default:
            break;
    }
}