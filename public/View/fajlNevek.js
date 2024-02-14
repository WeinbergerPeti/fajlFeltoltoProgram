import FajlKivalasztView from "./FajlKivalasztView.js";

class fajlNevek {

    #ujFajl;
    #tomb = [];

    constructor(szuloElem) {

        this.fajlElem = $("#fajlfeltoltes")
        this.#ujFajl = new FajlKivalasztView(this.fajlElem);
        this.divElem = szuloElem
        this.fajlElem = this.divElem.children("last-child");
        
        $("#kuldgomb").on("click", ()=>
        {
            console.log("katt");
            console.log(this.#tomb);
            
            this.esemenyTrigger("kuldes");
        })

        $('#myfile').on('change', (event) => 
        {
            this.fajl(event);
        });
        
        console.log(this.#tomb);
        
    }

    FajlHozzaad(fajlNev, kod) 
    {
        console.log(fajlNev, kod);

        // Két azonos kóddal lévő dokumentum nem tölthető fel.
        /**--------------------------- */
        let adat = {fajlNev: fajlNev, kod: kod};

        for (let i = 0; i < this.#tomb.length; i++) {
            if (this.#tomb[i].kod === adat.kod) {
                // Ha az adott kod már szerepel a tömbben, kilépünk a ciklusból
                return;
            }
        }
        
        // Ha a ciklus végére értünk, és az adott kod még nem szerepel a tömbben, hozzáadjuk az adatot
        this.#tomb.push(adat);
        console.log(this.#tomb);
        /**----------------------------- */

        // this.#tomb.push({fajlNev: fajlNev, kod: kod});
    }

    fajl(event)
    {
        let fajl = event.target.files; // Az input elem által kiválasztott fájlok lekérése

        // console.log(fajl);
        
        if (fajl.length > 0) {
            
            for (var i = 0; i < fajl.length; i++) 
            {

                // console.log("Fájlnév: " + fajl[i].name);
                // console.log("Méret: " + fajl[i].size + " bytes");
                // console.log("Típus: " + fajl[i].type);


                let fajlneve = fajl[i].name; // Fájlnév

                let kod = "";
                if (fajlneve.indexOf("(") > -1) 
                {
                    let feldolgozottFajl = fajlneve.split(' '); 
                    for (let j = 0; j < feldolgozottFajl.length; j++) 
                    {
                        if (feldolgozottFajl[j].indexOf("(") > -1) 
                        {
                            kod = feldolgozottFajl[j].slice(1, -1); 
                        }
                    }
                }
                this.FajlHozzaad(fajl[i].name, kod)
            }
        }
        else 
        {
            console.log("Nincs fájl kiválasztva.");
        }
    }

    esemenyTrigger(esemenyneve) 
    {
        window.dispatchEvent(new CustomEvent(esemenyneve, { detail: this.#tomb }));
    }
}

export default fajlNevek;