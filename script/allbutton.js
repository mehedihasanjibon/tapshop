let serial = 0
// first card 
document.getElementById("firstCard-btn").addEventListener("click", function(){
    serial += 1;
    const pName = document.getElementById("first-name").innerText;
    const pPrice = document.getElementById("first-price").innerText;
    const pQuantity = document.getElementById("first-Quantity").innerText;

    // multiply 
    const pTotalElement =parseInt(pPrice) * parseInt(pQuantity);

    // show the data 
    displayData(pName, pPrice, pQuantity, pTotalElement);
    total(pTotalElement);
    disableButton("firstCard-btn");
});

// second card 
document.getElementById("secondCard-btn").addEventListener("click", function(){
    serial += 1;
    const pName = document.getElementById("second-name").innerText;
    const pPrice = document.getElementById("second-price").innerText;
    const pQuantity = document.getElementById("second-Quantity").innerText;

    // multiply 
    const pTotalElement = parseInt(pPrice) * parseInt(pQuantity);

    // show the data 
    displayData(pName, pPrice, pQuantity, pTotalElement);
    total(pTotalElement);
    disableButton("secondCard-btn");
});

// third card 
document.getElementById("thirdCard-btn").addEventListener("click", function(){
    serial += 1;
    const pName = document.getElementById("third-name").innerText;
    const pPrice = document.getElementById("third-price").innerText;
    const pQuantity = document.getElementById("third-Quantity").innerText;

    // multiply 
    const pTotalElement = parseInt(pPrice) * parseInt(pQuantity);

    // show the data 
    displayData(pName, pPrice, pQuantity, pTotalElement);
    total(pTotalElement);
    disableButton("thirdCard-btn");
});

// fourth card 
document.getElementById("fourthCard-btn").addEventListener("click", function(){
    serial += 1;
    const pName = document.getElementById("fourth-name").innerText;
    const pPrice = document.getElementById("fourth-price").innerText;
    const pQuantity = document.getElementById("fourth-Quantity").innerText;

    // multiply 
    const pTotalElement = parseInt(pPrice) * parseInt(pQuantity);

    // show the data 
    displayData(pName, pPrice, pQuantity, pTotalElement);
    total(pTotalElement);
    disableButton("fourthCard-btn");
});

// fifth card 
document.getElementById("fifthCard-btn").addEventListener("click", function(){
    serial += 1;
    const pName = document.getElementById("fifth-name").innerText;
    const pPrice = document.getElementById("fifth-price").value;
    const pQuantity = document.getElementById("fifth-Quantity").value;

    const pTotalElement = parseInt(pPrice) * parseInt(pQuantity);

    if(pPrice == "" || pQuantity == "" || pPrice <= 0 || pQuantity <= 0){
        return alert("Please enter any valid number");
    }

    // show the data 
    displayData(pName, pPrice, pQuantity, pTotalElement);
    total(pTotalElement);
    disableButton("fifthCard-btn");
});

