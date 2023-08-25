function getInput() {
    const el1 = document.getElementById(btn);
    const firstInput = el1 && el1.value;
}

function showInput() {
    const value1 = getInput();
    if (value1) {
        const input1 = document.getElementById(btn);
        input1.innerText = value1;
    }
}

function showData() {

}