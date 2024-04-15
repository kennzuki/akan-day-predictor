//getting the variables form
let dataForm = document.getElementById('dataform');
let gender = document.getElementById("gender")
let result = document.getElementById("result")

//getting the form data

dataForm.addEventListener('submit', (event) => {
    event.preventDefault()
    //getting the form data values entered
    let dateEntered =new Date(document.getElementById("date").value)
    let gender = document.getElementById("gender").value
    //getting day of week from values
    let day = dateEntered.getDay()
    let akanDate = akanArray(day, gender)
    
    function akanArray(day, gender) { 
        // array taking each day with akan name for both male and females
        const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

        const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        //if else stateement based on gender
        return gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
    }
    //returning the result from the form to a paragraph
    result.textContent = `Your Akan name is ${akanDate}`
})
