function generateNumber() {
    // Get input values
    let min = Number(document.getElementById("minNumber").value);
    let max = Number(document.getElementById("maxNumber").value);
    let result = document.getElementById("result");
    let error = document.getElementById("error");
    // Clear previous error
    error.textContent = "";
    // Check empty input
    if (
        document.getElementById("minNumber").value === "" ||
        document.getElementById("maxNumber").value === ""
    ) {
        error.textContent = "Please enter both numbers.";
        result.textContent = "-";
        return;
    }
    // Check minimum and maximum
    if (min > max) {
        error.textContent = "Minimum number cannot be greater than maximum number.";
        result.textContent = "-";
        return;
    }
    // Generate random number
    let randomNumber = Math.floor(
        Math.random() * (max - min + 1)
    ) + min;
    // Display result
    result.textContent = randomNumber;
}
