let patientInformation = [];
let addInfo = document.querySelector("#submitinfo");

const addCxInfo = (event) => {
    event.preventDefault();

    // Use getElementsByTagName to get a collection of checkboxes
    const medHistoryCheckboxes = document.getElementsByName("history");
    const selectedMedHistory = [];
    medHistoryCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedMedHistory.push(checkbox.value);
        }
    });

    let addInfoObj = {
        firstName: document.getElementById("firstName").value,
        middleName: document.getElementById("middleName").value,
        lastName: document.getElementById("lastName").value,
        address: document.getElementById("address").value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        birthDate: document.getElementById("birthDate").value,
        contactNumber: document.getElementById("contactNumber").value,
        medhistory: selectedMedHistory,
        symptoms: Array.from(document.getElementById("symptoms").selectedOptions).map(option => option.value),
        medications: document.querySelector('input[name="answer"]:checked').value,
    };

    patientInformation.push(addInfoObj);
    document.querySelector("#cxForm").reset();
    console.table(patientInformation);
    localStorage.setItem("Patient Information", JSON.stringify(patientInformation));
    window.location.href = "Complete.html";
}

addInfo.addEventListener('click', addCxInfo);