function error() {

var range = document.getElementById("rangeID").value;

if (isNaN(range)) {
document.getElementById("error").textContent = "Error: ingresa un numero valido.";

} 
    
}

