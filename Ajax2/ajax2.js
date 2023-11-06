"use strict"


// AJAX um Daten im Hintergrund zu senden oder zu laden

// -------------------------------------------------------------------------------------------    
// option 1
// -------------------------------------------------------------------------------------------

let xhr = new XMLHttpRequest();                      //  XHR-Object erstellen
xhr.open("GET", "./json2.json");                  // HTTP-Anfrage formulieren
xhr.onload = function() {                            // Event-Handler definieren
    if (xhr.status != 200) return;                   // feuert, wenn Server-Antwort vollständig eingetroffen
    console.log(xhr.responseText);                   // ["Schuld und Sühne","Weiße Nächte","im westen nichts neues","Ansichten eines Clowns", "Lolita","Der Prozess"]

    var data = xhr.responseText;
    console.log(data[0]);                                  // [

    var data = JSON.parse(xhr.responseText);        // von JSON format in Java Format parsen
    console.log(data[0]);                           // Schuld und Sühne
};

xhr.send();           