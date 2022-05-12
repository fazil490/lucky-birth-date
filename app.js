const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const outputText = document.querySelector("#ouput");

function compareValues(sum, luckyNumber){
    if(sum%luckyNumber === 0){
        outputText.innerText="YAY! Your birthday is lucky 🎉"
    } else {
        outputText.innerText="OOPS! Your birthday is not that lucky 🤐"
    }
}

function calculateSum(dob){
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for(let index=0; index<dob.length; index++){
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum && luckyNumber.value > 0)
        compareValues(sum, luckyNumber.value);
    else
        outputText.innerText="Please enter both the fields as positive.";
}

checkButton.addEventListener("click", checkBirthDateIsLucky)

