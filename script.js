var number = "";

input = document.querySelectorAll('button')

input.forEach((item) => {
    item.addEventListener('click', (clickMe) => {
        if (clickMe.target.innerHTML == '=') {
            number = eval(number)
            document.getElementById("input_feild").value += clickMe.target.innerHTML

        } else {
            number = number + clickMe.target.innerHTML
            document.getElementById("input_feild").value += number
        }
    })

})