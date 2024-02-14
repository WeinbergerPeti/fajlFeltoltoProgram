class DataService {
    constructor(token) {
        this.token = token;
    }

    fajlokKuldes(vegpont, adat) 
    {
        return fetch(vegpont, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.token,
            },
            body: JSON.stringify(adat)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
    }
    

    adatUj(vegpont, adat) {
        fetch(vegpont,
            {
                method: "POST",
                body: JSON.stringify(adat),
                headers:
                {
                    "content-type": "application/json",
                    "X-CSRF-TOKEN": this.token,
                },
            })
            .then((response) => response.json())
            .then((data) => {
                console.log("Sikeres adatfelvitel" + data);
            })
            .catch((error) => {
                console.error("Error", error);
            });
    }

    




    getAxiosData(url, callback) {
        console.log(url)
        axios.get(url)
            .then(function (response) {
                //console.log(callback)
                // handle success
                /**
                console.log("Válasz objektum", response);
                console.log("adatok", response.data);
                console.log("Adatok nevek lista", response.data.nevek);
                console.log("status", response.status);
                console.log("Státusz szöveg", response.statusText);
                console.log("Válasz fejléc", response.headers);
                console.log("Válasz konfig", response.config);
                 */

                console.log(response);
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.header);
                console.log(response.config);
                callback(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                //hibaCallback(error)
            })
            .finally(function () {
                // always executed
                console.log("finally")
            });
    }

    postAxiosData(url, data){
        console.log(data);
        axios
            .post(url, data)
            .then((response) => {
                //console.log("RESP", response);
            })
            .catch((error) => {
                //console.log("hiba", error);
            });
    }

    putAxiosData(url, data){
        console.log(data);
        console.log(`${url}/${data.id}`);
        axios
            .put(`${url}/${data.id}`, data)
            .then((response) =>{
                console.log("RESP", response);
            })
            .catch((error) => {
                console.log("hiba", error);
            })
    }

    deleteAxiosData(url, id){
        console.log(`${url}/${id}`);
        axios
            .delete(`${url}/${id}`)
            .then((response) => {
                console.log("RESP", response);
            })
            .catch((error) => {
                console.log("hiba", error);
            })
    }
}

export default DataService;