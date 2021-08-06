var birthDate = document.querySelector("#birthDate");
var luckyNumber = document.querySelector("#luckyNumber");
var result = document.querySelector(".result");
var submitBtn = document.querySelector(".submitBtn");

function removeDash(birthDate) {
    return birthDate.replaceAll("-","");
}

function calculateSum() {
    var sum = 0; 
    var dateArray = removeDash(birthDate.value);
    
    for (var i=0;i<dateArray.length;i++) { 
        sum = sum + Number(dateArray[i]);
    }
    return sum;
}

function isYourBirthdayLucky() {
    var sumofBirthDate = calculateSum();

    if (sumofBirthDate % luckyNumber.value === 0) {
        result.innerText = "Woah!!! Your Birthday is lucky 🥳🥳🥳"
    }

    else {
        result.innerText = "Well, Make Your Self Lucky By Your Own Karma 😀😉😊";
    }
}

submitBtn.addEventListener("click", isYourBirthdayLucky);
