// common function 
let totalId = document.getElementById("total").innerText
function total(setTotal){
    let sum = parseFloat(totalId) + parseFloat(setTotal);
    totalId = sum;
    let set = document.getElementById("total");
    set.innerText = totalId;
};

function displayData(nameOfN, nameOfP, nameOfQ, nameOfT){
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td> ${serial}</td>
    <td> ${nameOfN}</td>
    <td> ${nameOfP}</td>
    <td> ${nameOfQ}</td>
    <td> ${nameOfT}</td>
    `;
    container.appendChild(tr);
};

function disableButton(id){
    document.getElementById(id).setAttribute("disabled" , true);
};