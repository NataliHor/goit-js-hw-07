const registerForm = document.querySelector(".login-form");

registerForm.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.target;
    const emailForm = form.elements.email.value.trim();
    const passwordForm = form.elements.password.value.trim();
    if (emailForm === "" || passwordForm === "") {
        return alert('All form fields must be filled in');
    }
    const finalForm = {
        email: emailForm,
        password: passwordForm
    };
    console.log(finalForm);

    form.reset();
})

