function calculateTip(event) {
    event.preventDefault();

    let valor = document.getElementById("valor").value;
    let serviceQual = document.getElementById("serviceQual").value;
    let qtde = document.getElementById("qtde").value;
    let resultTip = document.getElementById("resultTip");
    let result = document.getElementById("resultado");
    let invalid = document.getElementById("invalid");

    if(qtde == '' | qtde <= 1) {
        qtde = 1;
        document.getElementById("cada").style.display = "none"
    } else {
        document.getElementById("cada").style.display = "block"
    }

    if(serviceQual == 0) {
        invalid.classList.remove("invalid");
	    return;
    } else {
        document.getElementById("invalid").style.display = "none"
    }

    let total = (valor * serviceQual) / qtde;
    total = total.toFixed(2);

    result.innerHTML = "Gorjeta total: R$" + total;
    resultTip.classList.remove("hide");
}