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

        $(window).on("kuldes", (event) => 
        {
            console.log("küldés");

            console.log(event.detail);
            $("#tablazatKiir").html(event.detail);

            this.dataService.postAxiosData(ALAPVEGPONT, event.detail);




            // event.preventDefault();
            //minta
            //this.dataService.postData(szuloELEM, this.urlapView.getUrlapAdatok());
            //this.urlapView.getUrlapAdatok();
            // this.fajlNevek.getNev();
            // console.log(this.fajlNevek.getNev());
            // FajlNevek.getNev();
        })
    }
}

export default Controller;