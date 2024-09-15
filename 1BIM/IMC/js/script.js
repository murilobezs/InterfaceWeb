document.getElementById("calculate").addEventListener("click", function(event) {
    event.preventDefault();
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var gender = document.getElementById("gender").value;

    var bmi;
    if (gender === "male") {
        bmi = weight / (height * height);
    } else if (gender === "female") {
        bmi = 1.3 * (weight / (height * height));
    }

    var bmi = weight / (height * height);

    document.getElementById("value").textContent = bmi.toFixed(2);

    var description = "";
    if (bmi < 18.5) {
        description = "Abaixo do peso";
    } else if (bmi < 25) {
        description = "Peso normal";
    } else if (bmi < 30) {
        description = "Sobrepeso";
    } else {
        description = "Obesidade";
    }

    document.getElementById("description").textContent = description;

    document.getElementById("infos").classList.remove("hidden");
    document.getElementById("reset").classList.remove("hidden");
})

function Limpar() {
    window.location.reload();
}