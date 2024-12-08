const bill = document.querySelector('.bill')
const tipPercent = document.querySelector('.tip')
const people = document.querySelector('.people')
const error = document.querySelector('.error')
const tipAns = document.querySelector('.tipAns')
const totalAns = document.querySelector('.totalAns')
const btt = document.querySelector('.btt')

btt.addEventListener("click",function(){
    bill.value = ""
    totalAns.textContent = "$0.00"
})

// calculateBtn.addEventListener

function calculateTip(){
    const billNumber = Number(bill.value)
    const tipNum = parseFloat(tipPercent.value)
    const peopleNum = +people.value

    if(!bill.value || !tipPercent.value || !people.value){
        error.style.display = "block"
        error.textContent = "Please fill in the fields,,,.,."
        setTimeout(() => {
            error.style.display = "none"
        },5000)
    }else{
        let totalTip = (tipNum/100) * billNumber
        let tipPerPerson = totalTip / peopleNum
        tipAns.textContent = "$"+ tipPerPerson.toFixed(2)

        let originalAmount = billNumber / peopleNum
        let totalPerPerson = originalAmount + tipPerPerson
        totalAns.textContent = "$"+ totalPerPerson.toFixed(2)
        console.log(totalPerPerson);
        
    }

    console.log(typeof billNumber, typeof tipNum, typeof peopleNum);

    
}