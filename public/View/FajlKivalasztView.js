class FajlKivalasztView {

    constructor(szuloElem) {
        this.divElem = szuloElem
        this.fajlElem = this.divElem.children("last-child");
        this.#megjelenit();

        //console.log(this)
        //this.#fajlnev();

    }

    #megjelenit() {
        let txt = "";
        txt += `<span class="kivalaszt"><input type="file" id="myfile" name="myfile" multiple>`
        // <input type="file" id="files" name="files" multiple>
        //txt += `</span><span id="valasztottfajl"><button id="kuldGomb" onclick="uploadFiles()">Küldés</button>`
        txt += `</span><input type="submit" value="Küldés" id="kuldgomb">`
        this.divElem.append(txt);
    }

    #fajlnev() {
        $("#myfile").change(function (event) {
            //console.log(event.target.files[0].name)
            let fajlneve = (event.target.files[0].name)
            const feldolgozottFajl = fajlneve.split(' ')
            console.log(fajlneve)
            let kod = "";
            //ez végig fut a keletkezett tömbön, ami a 'feldolgozottFajl'
            for (let index = 0; index < feldolgozottFajl.length; index++) {
                //itt megnézi, hogy az adott elem tartalmazza-e a karaktert
                //bízunk benne, hogy mindenkinek az egyedi kódja lesz csak zárójelben :D
                if (feldolgozottFajl[index].indexOf("(") > -1) {
                    //console.log(feldolgozottFajl[index])
                    //slice-al levesszük a zárójelet miután megtaláltuk
                    kod += feldolgozottFajl[index].slice(1, -1)
                }

            }
            $("#fajlnevKiir").text(fajlneve)
            //push-t append-et nem ismeri fel
            //this.fajlNevekTomb.push(fajlneve);
            //console.log(fajlneve)
            console.log(kod)
            //console.log(this.fajlNevekTomb)
            //$("#kiiras").text(kod)
        })
    }
    // #fajlnev() {
    //     $("#myfile").change(function (event) {
    //         //console.log(event.target.files[0].name)
    //         let fajlneve = (event.target.files[0].name)
    //         let feldolgozottFajl = fajlneve.split(' ')
    //         let kod = "";
    //         //ez végig fut a keletkezett tömbön, ami a 'feldolgozottFajl'
    //         for (let index = 0; index < feldolgozottFajl.length; index++) {
    //             //itt megnézi, hogy az adott elem tartalmazza-e a karaktert
    //             //bízunk benne, hogy mindenkinek az egyedi kódja lesz csak zárójelben :D
    //             if (feldolgozottFajl[index].indexOf("(") > -1) {
    //                 //console.log(feldolgozottFajl[index])
    //                 kod += feldolgozottFajl[index]
    //             }

    //         }
    //         $("#fajlnevKiir").text(fajlneve)
    //         //$("#kiiras").text(kod)
    //     })
    // }

    // #esemenyTrigger(esemenyneve) {
    //     const esemeny = new CustomEvent("kuldes", { detail: this });
    //     window.dispatchEvent(esemeny);
    // }
    
}

export default FajlKivalasztView;