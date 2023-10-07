let number = "";
let input = document.querySelectorAll('button')
input.forEach((item) => {
    item.addEventListener('click', (clickMe) => {
        if (clickMe.target.innerHTML == '=') {
            number = eval(number)
            document.getElementById("input_feild").value = number

        } else if (clickMe.target.innerHTML == 'x') {
            clickMe.target.innerHTML = '*';
            number += clickMe.target.innerHTML
            document.getElementById("input_feild").value = number
        } else if (clickMe.target.innerHTML == 'RESET') {
            number = ""
            document.getElementById("input_feild").value = number
        } else if (clickMe.target.innerHTML == 'DEL') {
            number = number.slice(0, -1)
            document.getElementById("input_feild").value = number;

        } else {
            number += clickMe.target.innerHTML
            document.getElementById("input_feild").value = number
        }
    })

})