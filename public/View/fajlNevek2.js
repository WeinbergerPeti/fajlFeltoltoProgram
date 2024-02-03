import FajlKivalasztView from "./FajlKivalasztView.js";

//import * as fs from 'node:fs/promises';
import * as fs from 'node:fs';

class fajlNevek {

    #ujFajl;
    #fajlNevekTomb = [];

    constructor(szuloElem) {
        this.fajlElem = $("#fajlfeltoltes")
        this.#ujFajl = new FajlKivalasztView(this.fajlElem);
        this.divElem = szuloElem
        this.fajlElem = this.divElem.children("last-child");
        //this.fajlNevekTomb = this.uploadFiles();
        console.log(this.#fajlNevekTomb)
        this.#fajlnev();
        this.#kiirasFajlba();
    }

    #kiirasFajlba(){
        //fs modul beimportálása
        const fs = require("fs");
        console.log("kiirás metódus")

        //json-ként tárolja el az adatot
        const nevek = JSON.stringify(this.#fajlNevekTomb);
        
        fs.writeFile("fajl_nevek.json", nevek, (error) => {
            //error dob ha az írás sikertelen
            if (error) {
                //jegyzi a hibát
                console.error(error)

                throw error;
            }

            console.log("fajl_nevek.json sikeresen létrehozva és megírva!")
        })
    }

    uploadFiles() {
        const fileInput = this.divElem.children("#fileInput");
        this.#fajlNevekTomb = fileInput.files;
        console.log(this.#fajlNevekTomb)
    }

    getNev() {
        return this.#fajlNevekTomb;
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

    #esemenyTrigger(esemenyneve) {
        const esemeny = new CustomEvent("kuldes", { detail: this });
        window.dispatchEvent(esemeny);
    }

}

export default fajlNevek;