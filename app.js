const fivePercent = () => {
    let amnt = document.getElementById('checkAmount').value
    tip = amnt * 0.05
    console.log(tip)
}
const tenPercent = () => {
    let amnt = document.getElementById('checkAmount').value
    tip = amnt * 0.10
    console.log(tip)
}
const fifteenPercent = () => {
    let amnt = document.getElementById('checkAmount').value
    tip = amnt * 0.15
    console.log(tip)
}
const twnetyFivePercent = () => {
    let amnt = document.getElementById('checkAmount').value
    tip = amnt * 0.25
    console.log(tip)
}
const fiftyPercent = () => {
    let amnt = document.getElementById('checkAmount').value
    tip = amnt * 0.50
    console.log(tip)
}
const customPercent = () => {
    let amnt = document.getElementById('checkAmount').value
    let customTip = document.getElementById('customTip').value
    tip = amnt * customTip/100
    console.log(tip)
}