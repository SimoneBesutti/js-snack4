//In un array sono contenuti i nomi degli invitati alla festa del Grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa

//Dichiaro le variabili
var listaNomi, nomeUtente, i;



//Array contenente i nomi degli invitati
listaNomi = ["Simone", "Robi", "Gaia", "Davide", "Serena"];
console.log(listaNomi);


//Chiedere all'utente il suo nome
nomeUtente = prompt("Inserisci il tuo nome");
console.log(nomeUtente);


//Ciclo che controlli nome per nome
for(i = 0; i < listaNomi.length; i++){
    if(nomeUtente == listaNomi[i]){
        document.getElementById("mio_id").innerHTML = nomeUtente + "sei invitato alla festa";
    } else {
        document.getElementById("mio_id").innerHTML = nomeUtente + " non sei invitato alla festa";
    }
}  

    