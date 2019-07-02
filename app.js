
btn = document.getElementById("convert-btn");
alert = document.getElementById("alert");

btn.addEventListener("click", checkInputData);

function checkInputData() {
    // get number from inputfield
    binaryNumber = document.getElementById("inputField").value;
    var temp = 0
    //check if number consist of either 0 and 1
    for (let index = 0; index < binaryNumber.length; index++) {
        if (isNaN(binaryNumber)) {
            showWarning()
            return;
        } else if (binaryNumber.charAt(index) == 0 || binaryNumber.charAt(index) == 1) {
            temp += binaryNumber.charAt(index)
        } else {
            showWarning()
            return;
        }
    }
    convertBin2Dec(temp)
}

function showWarning() {
    document.getElementById("alert").style.visibility = "visible"
    document.getElementById("outputField").value = " ";
    return;
}

function convertBin2Dec(binaryToConvert) {
    document.getElementById("alert").style.visibility = "hidden"
    // convert binary number to decimal number
    // om binary uit te rekenen moet je 2 tot de macht "lengte" gebruiken dus 10 = (1*(2^1) + 0*(2^0)) 
    reverseLength(binaryToConvert)
    let result = 0
    for (let index = 0; index < binaryToConvert.length; index++) {
        exponent = reverseNumber[index]
        result += parseInt(binaryToConvert[index]) * Math.pow(2, exponent)
    }

    /* result from youtube
    for (let index = binaryLength.length-1; index >= 0; index--) { 
        result += parseInt(binaryToConvert[index]) * Math.pow(2, binaryLength.length-1-index)
    }
     */
    document.getElementById("outputField").value = result;
}

// gets the reverse length of binaryToConvert variable
function reverseLength(binaryLength) {
    var num = binaryLength.length - 1;
    for (let index = binaryLength.length - 2; index >= 0; index--) {
        let n = index.toString();
        num += n
        reverseNumber = num
    }
    return reverseNumber;
}