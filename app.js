
btn = document.getElementById("convert-btn");
alert = document.getElementById("alert");

btn.addEventListener("click", checkInputData);

function checkInputData() {
    // get number from inputfiled
    binaryNumber = document.getElementById("inputField").value;

    //check if number consist of either 0 and 1
    for (let index = 0; index < binaryNumber.length; index++) {
        if (isNaN(binaryNumber)) {
            document.getElementById("alert").style.visibility = "visible"
            document.getElementById("outputField").value = " ";
            return;
        } else if (binaryNumber.charAt(index) == 0 || binaryNumber.charAt(index) == 1) {
            var temp = ""
            temp += binaryNumber.charAt(index)
            ;console.log(temp);
            
            convertBin2Dec(temp)
        } else {
            document.getElementById("alert").style.visibility = "visible"
            document.getElementById("outputField").value = " ";
            return;
        }
    }
        //convertBin2Dec(temp)
}

function convertBin2Dec(binaryToConvert) {
    // convert binary number to decimal number
    // om binar uit te rekenen moet je 2 tot de macht "lengte" gebruiken dus 10 = (1*(2^1) + 0*(2^0))
    document.getElementById("alert").style.visibility = "hidden"
    let temp;

    for (let index = 0; index < binaryToConvert.length; index++) {
        temp = binaryToConvert.charAt(index);
        document.getElementById("outputField").value = temp;
    }

    //document.getElementById("outputField").value = temp
}