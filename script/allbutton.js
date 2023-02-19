let serial = 0
// first card 
document.getElementById("firstCard-btn").addEventListener("click", function(){
    serial += 1;
    const pName = document.getElementById("product-name").innerText;
    const pPrice = document.getElementById("price").innerText;
    const pQuantity = document.getElementById("Quantity").innerText;

    // multiply 
    const pTotalElement =parseInt(pPrice) * parseInt(pQuantity);

    // show the data 
    displayData(pName, pPrice, pQuantity, pTotalElement);
    total(pTotalElement);
    disableButton("firstCard-btn");
});

// second card 


