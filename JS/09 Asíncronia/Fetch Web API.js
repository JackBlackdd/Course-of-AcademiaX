// AJAX

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     console.log(this.responseText);
// };
// xhttp.open("GET", "www.xaviro.com", true);
// xhttp.send();


fetch("www.xaviro.com")
    .then(response => response.json())
    .then(json => {
        console.log(json);
    });