// Form Months
let formMonths = document.getElementById("formMonths");
let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
for(let i = 1; i <= monthArr.length-1; i++){
    formMonths.innerHTML += `<option value = "${monthArr[i]}">${monthArr[i]}</option>`;
}

// Form Days
let formDays = document.getElementById("formDays");
for(let i = 1; i <= 31; i++){
    formDays.innerHTML += `<option value = "${i}">${i}</option>`;
}

// Form Years
let formYears = document.getElementById("formYears");
for(let i = 1920; i <= 2023; i++){
    formYears.innerHTML += `<option value = "${i}">${i}</option>`;
}

// Form Instruments
let formInstruments = document.getElementById("formInstruments");
let instruArr = ["Violin", "Guitar", "Bass", "Drums", "Vocals"];
for(let i = 1; i <= instruArr.length-1; i++){
    formInstruments.innerHTML += `<option value = "${instruArr[i]}">${instruArr[i]}</option>`;
}

// Submit
let nameBlock = document.querySelector(".formDiv .name");
let emailBlock = document.querySelector(".formDiv .email");
let phoneNumberBlock = document.querySelector(".formDiv .phoneNumber");
let birthDateBlock = document.querySelector(".formDiv .birthDate");
let instrumentBlock = document.querySelector(".formDiv .instrument");
let daysBlock = document.querySelector(".formDiv .days");

let fName = document.querySelector('input[name = "first name"]');
let lName = document.querySelector('input[name = "last name"]');
let email = document.querySelector('input[name = "email"]');
let phoneNumber = document.querySelector('input[name = "number"]');
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
// Days Input
let daysInputs = document.querySelectorAll('input[name="days[]"]+label');

let nameError = document.querySelector(".name-error");
let emailError = document.querySelector(".email-error");
let phoneNumberError = document.querySelector(".phoneNumber-error");
let birthDateError = document.querySelector(".birthDate-error");
let instrumentError = document.querySelector(".instrument-error");
let daysError = document.querySelector(".days-error");

let submitBtn = document.getElementById("submitBtn");

function nameBlur(){
    if(fName.value.trim() === "" || lName.value.trim() === ""){
        nameError.style.display = "flex";
        nameBlock.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        fName.style.border = "1px solid red";
        fName.style.boxShadow = "0 0 0 2px rgba(255,0,0,.25)";
        lName.style.border = "1px solid red";
        lName.style.boxShadow = "0 0 0 2px rgba(255,0,0,.25)";
    }else{
        nameError.style.display = "none";
        nameBlock.style.backgroundColor = "white";
        fName.style.border = "1px solid #AEB6BF";
        fName.style.boxShadow = "none";
        lName.style.border = "1px solid #AEB6BF";
        lName.style.boxShadow = "none";
    }
}

function emailBlur(){
   if(email.value.trim() === ""){
        emailError.style.display = "flex";
        emailBlock.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        email.style.border = "1px solid red";
        email.style.boxShadow = "0 0 0 2px rgba(255,0,0,.25)";
   }else{
        emailError.style.display = "none";
        emailBlock.style.backgroundColor = "white";
        email.style.border = "1px solid #AEB6BF";
        email.style.boxShadow = "none";
   }
}

function phoneNumberBlur(){
    if(phoneNumber.value.trim() === ""){
        phoneNumberError.style.display = "flex";
        phoneNumberBlock.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        phoneNumber.style.border = "1px solid red";
        phoneNumber.style.boxShadow = "0 0 0 2px rgba(255,0,0,.25)";
    }else{
        phoneNumberError.style.display = "none";
        phoneNumberBlock.style.backgroundColor = "white";
        phoneNumber.style.border = "1px solid #AEB6BF";
        phoneNumber.style.boxShadow = "none";
    }
}
function birthDateBlur(){
   if(formMonths.value === "" || formDays.value === "" || formYears.value === ""){
        birthDateError.style.display = "flex";
        birthDateBlock.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        formMonths.style.border = "1px solid red";
        formMonths.style.boxShadow = "0 0 0 2px rgba(255,0,0,.25)";
        formDays.style.border = "1px solid red";
        formDays.style.boxShadow = "0 0 0 2px rgba(255,0,0,.25)";
        formYears.style.border = "1px solid red";
        formYears.style.boxShadow = "0 0 0 2px rgba(255,0,0,.25)";
   }else{
        birthDateError.style.display = "none";
        birthDateBlock.style.backgroundColor = "white";
        formMonths.style.border = "1px solid #AEB6BF";
        formMonths.style.boxShadow = "none";
        formDays.style.border = "1px solid #AEB6BF";
        formDays.style.boxShadow = "none";
        formYears.style.border = "1px solid #AEB6BF";
        formYears.style.boxShadow = "none";
   }
}
function instrumentBlur(){
    if(formInstruments.value === ""){
        instrumentError.style.display = "flex";
        instrumentBlock.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        formInstruments.style.border = "1px solid red";
        formInstruments.style.boxShadow = "0 0 0 2px rgba(255,0,0,.25)";
    }else{
        instrumentError.style.display = "none";
        instrumentBlock.style.backgroundColor = "white";
        formInstruments.style.border = "1px solid #AEB6BF";
        formInstruments.style.boxShadow = "none";
    }
}
function daysBlur(){
    var checked = false;
    checkboxes.forEach(function(checkbox){
        if(checkbox.checked){
            checked = true;
        }
    });
    if(!checked){
        daysError.style.display = "flex";
        daysBlock.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        for(let i = 0; i <= daysInputs.length; i++){
            daysInputs[i].style.border = "1px solid red";
            daysInputs[i].style.boxShadow = "0 0 0 2px rgba(255,0,0,.25)";
        }
    }else{
        daysError.style.display = "none";
        daysBlock.style.backgroundColor = "white";
        for(let i = 0; i <= daysInputs.length; i++){
            daysInputs[i].style.border = "1px solid #AEB6BF";
            daysInputs[i].style.boxShadow = "none";
        }
    }
}

submitBtn.addEventListener('click',function (e){
    var checked = false;
    if(fName.value.trim() === "" || lName.value.trim() === ""){
        e.preventDefault();
        nameError.style.display = "flex";
        nameBlock.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        fName.style.border = "1px solid red";
        fName.style.boxShadow = "0 0 0 2px rgba(255,0,0,.25)";
        lName.style.border = "1px solid red";
        lName.style.boxShadow = "0 0 0 2px rgba(255,0,0,.25)";
    }
    if(email.value.trim() === ""){
        e.preventDefault();
        emailError.style.display = "flex";
        emailBlock.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        email.style.border = "1px solid red";
        email.style.boxShadow = "0 0 0 2px rgba(255,0,0,.25)";
    }
    if(phoneNumber.value.trim() === ""){
        e.preventDefault();
        phoneNumberError.style.display = "flex";
        phoneNumberBlock.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        phoneNumber.style.border = "1px solid red";
        phoneNumber.style.boxShadow = "0 0 0 2px rgba(255,0,0,.25)";
    }
    if(formMonths.value === "" || formDays.value === "" || formYears.value === ""){
        e.preventDefault();
        birthDateError.style.display = "flex";
        birthDateBlock.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        formMonths.style.border = "1px solid red";
        formMonths.style.boxShadow = "0 0 0 2px rgba(255,0,0,.25)";
        formDays.style.border = "1px solid red";
        formDays.style.boxShadow = "0 0 0 2px rgba(255,0,0,.25)";
        formYears.style.border = "1px solid red";
        formYears.style.boxShadow = "0 0 0 2px rgba(255,0,0,.25)";
    }
    if(formInstruments.value === ""){
        e.preventDefault();
        instrumentError.style.display = "flex";
        instrumentBlock.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        formInstruments.style.border = "1px solid red";
        formInstruments.style.boxShadow = "0 0 0 2px rgba(255,0,0,.25)";
    }
    checkboxes.forEach(function(checkbox){
        if(checkbox.checked){
            checked = true;
        }
    });
    if(!checked){
        e.preventDefault();
        daysError.style.display = "flex";
        daysBlock.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
        for(let i = 0; i <= daysInputs.length; i++){
            daysInputs[i].style.border = "1px solid red";
            daysInputs[i].style.boxShadow = "0 0 0 2px rgba(255,0,0,.25)";
        }
    }else{
        daysError.style.display = "none";
        daysBlock.style.backgroundColor = "white";
        for(let i = 0; i <= daysInputs.length; i++){
            daysInputs[i].style.border = "1px solid #AEB6BF";
            daysInputs[i].style.boxShadow = "none";
        }
    }
})
