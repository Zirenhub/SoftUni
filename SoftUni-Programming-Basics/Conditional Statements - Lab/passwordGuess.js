function passwordGuess(input) {
    let password = "s3cr3t!P@ssw0rd";
    let guess = input[0];

    if (guess === password) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!")
    }
}

passwordGuess(["s3cr3t!P@ssw0rd"]);