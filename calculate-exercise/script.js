const numOneEle = document.getElementById("num_1")
const numTwoEle = document.getElementById("num_2")
const outputEle = document.getElementById("res")

function calculate(inputOne, inputTwo){
    const numOne = parseFloat(inputOne.value)
    const numTwo = parseFloat(inputTwo.value)
    let res
    if(!isNaN(numOne) && !isNaN(numOne)) {
        res = numOne + numTwo
        outputEle.innerHTML = res
    }
}

numOneEle.addEventListener('change', () => {
    calculate(numOneEle, numTwoEle)
})

numTwoEle.addEventListener('change', () => {
    calculate(numOneEle, numTwoEle)
})