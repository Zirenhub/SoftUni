function conData(input) {
    let name = input[0];
    let projects = input[1];
    let hoursToComp = projects * 3;
    let result = `The architect ${name} will need ${hoursToComp} hours to complete ${projects} project/s.`
    console.log(result);
}

conData(["Sanya", "9"]);