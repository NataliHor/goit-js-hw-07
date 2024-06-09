const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", (event) => {
    const newNameOutput = event.currentTarget.value.trim();
    if (newNameOutput==="") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = newNameOutput;
    }
});