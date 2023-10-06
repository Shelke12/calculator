let number = "";
let input = document.querySelectorAll('button')
let ans = 0;
input.forEach((item) => {
    item.addEventListener('click', (e) => {

        let inputNumbers = document.getElementById('input_feild').value += e.target.innerHTML;
        if (input.value == '=') {
            ans = eval(inputNumbers)
            console.log(ans)
        }
    })
})