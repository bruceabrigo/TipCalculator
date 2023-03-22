const tipTotal = document.getElementById('tip-total')
const perPerson = document.getElementById('person-total')

const fivePercent = () => {
    let amnt = document.getElementById('checkAmount').value
    let ppl = document.getElementById('numberPpl').value

    if (amnt == 0) {
        console.log("Can't be zero")
    } else {
        tip = amnt * 0.05
        console.log(tip)
        tipTotal.innerText = tip
        perPerson.innerText = tip/ppl
    }
}
const tenPercent = () => {
    let amnt = document.getElementById('checkAmount').value
    let ppl = document.getElementById('numberPpl').value

    if (amnt == 0) {
        console.log("can't be zero")
    } else {
        tip = amnt * 0.10
        console.log(tip)
        tipTotal.innerText = tip
        perPerson.innerText = tip/ppl
    }
}
const fifteenPercent = () => {
    let amnt = document.getElementById('checkAmount').value
    let ppl = document.getElementById('numberPpl').value

    if (amnt == 0) {
        console.log('no zero')
    } else {
        tip = amnt * 0.15
        console.log(tip)
        tipTotal.innerText = tip
        perPerson.innerText = tip/ppl
    }
}
const twnetyFivePercent = () => {
    let amnt = document.getElementById('checkAmount').value
    let ppl = document.getElementById('numberPpl').value

    if (amnt == 0) {
        console.log('no zero')
    } else {
        tip = amnt * 0.25
        console.log(tip)
        tipTotal.innerText = tip
        perPerson.innerText = tip/ppl
    }
}
const fiftyPercent = () => {
    let amnt = document.getElementById('checkAmount').value
    let ppl = document.getElementById('numberPpl').value

    if (amnt == 0) {
        console.log('no zero')
    } else {
        tip = amnt * 0.50
        console.log(tip)
        tipTotal.innerText = tip
        perPerson.innerText = tip/ppl
    }
}
const customPercent = () => {
    let amnt = document.getElementById('checkAmount').value
    let customTip = document.getElementById('customTip').value
    let ppl = document.getElementById('numberPpl').value

    if (amnt == 0) {
        console.log('no zero')
    } else {
        tip = amnt * customTip/100
        console.log(tip)
        tipTotal.innerText = tip
        perPerson.innerText = tip/ppl
    }
}
