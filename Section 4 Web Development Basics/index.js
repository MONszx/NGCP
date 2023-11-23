function myFunction() {
    let nameInput = document.getElementById("name").value.trim();
    let emailInput = document.getElementById("email").value.trim();

    if (nameInput === "" || emailInput === "") {
        alert("Name and email input required");
    } else {
        alert("Hello World!")
    }
}