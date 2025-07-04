function init() {
    let num1
    let num2
    let operation

    const buttonNum = document.querySelectorAll('button number')
    function num1Value(){
        num1 += buttonNum.innerText
    }
    document.addEventListener('click', num1Value)
    console.log(buttonNum.innerText)
}
document.addEventListener('DOMContentLoaded', init)