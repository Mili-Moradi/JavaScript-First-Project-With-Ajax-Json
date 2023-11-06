"use strict"


// AJAX um Daten im Hintergrund zu senden oder zu laden


// -------------------------------------------------------------------------------------------    
// option 2
// -------------------------------------------------------------------------------------------

const btn = document.querySelector("#btn");             // benötigte Elemente im DOM referenzieren
const render_text = document.querySelector("#render");

btn.addEventListener("click", function(){               // Event für Click-button registrieren
    let xhr = new XMLHttpRequest();                         //  XHR-Object erstellen
    xhr.open("GET", "./jsontest.json");    
                     // HTTP-Anfrage formulieren
    xhr.onload = function() {                               // Event-Handler definieren
        let data = JSON.parse(xhr.responseText);                 // von JSON format in Java Format parsen
        render(data)                                        // function mit data (konvertierte jason datei in array) aufrufen                                            
    };

xhr.send();

});

// Function render()
function render(data){
    let string = "Best Books of all time:";
    for(let i = 0; i < data.length; i++){
        string +=  "<p>" + data[i] + "</p>";
    }
    render_text.insertAdjacentHTML("beforeend",string);
}

