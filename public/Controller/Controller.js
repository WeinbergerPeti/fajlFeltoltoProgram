import FajlKivalasztView from "../View/FajlKivalasztView.js";
import fajlNevek from "../View/fajlNevek.js";
import DataService from "../Model/DataService.js";

const ALAPVEGPONT = "/api/pdfdata";
class Controller {
    constructor() {

        //fajlfeltoltes

        /**
        const szuloELEM = $("#fajlfeltoltes")
        new FajlKivalasztView(szuloELEM);
         */

        /**
        this.dataService = new DataService();
        this.dataService.getAxiosData(ALAPVEGPONT, this.megjelenit);
        */
        
        const szuloELEM = $("#tablazatKiir")
        new fajlNevek(szuloELEM);

        /*
        $( "#kuldgomb" ).on( "click", function() {
            alert( "Handler for `click` called." );
          } );
        */

        /**
         * gombra
         */

        const token = $(`meta[name="csrf-token"]`).attr("content");
        const AdatFeldolgozModel = new DataService(token);

        $(window).on("kuldes", (event) => 
        {
            // console.log("küldés");
            console.log(event.detail);

            $("#tablazatKiir").html("");

            for (let i = 0; i < event.detail.length; i++) 
            {
                $("#tablazatKiir").append(event.detail[i].fajlNev, event.detail[i].kod);
            }
            // AdatFeldolgozModel.adatUj("/fajl_kuldes", event.detail);
            // AdatFeldolgozModel.adatUj("/api/email_pdfel", event.detail);
            // AdatFeldolgozModel.adatUj("/fajl_kimentes", event.detail);

        })

        



            // this.dataService.postAxiosData(ALAPVEGPONT, event.detail);




            // event.preventDefault();
            //minta
            //this.dataService.postData(szuloELEM, this.urlapView.getUrlapAdatok());
            //this.urlapView.getUrlapAdatok();
            // this.fajlNevek.getNev();
            // console.log(this.fajlNevek.getNev());
            // FajlNevek.getNev();
    }
}

export default Controller;