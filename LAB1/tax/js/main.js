const calTax = (income)=>
{
    let taxablePayable = 0

    if(income >=1 && income <= 4461.99)
    {
        taxablePayable = 0
    }

    else if (income >= 4462 && income <= 17893.99)
    {
         taxablePayable =  (income - 4462) * 0.30
    }

    else if (income >= 17894 && income <= 29499.99)
    {
         taxablePayable = 4119 +  ((income - 17894) * 0.33)
    }

    else if (income >= 29500 && income <= 45787.99)
    {
         taxablePayable = 8656 +  ((income - 29500) * 0.46)
    }

    else
    {
         taxablePayable = 8656 +  ((income - 45788) * 0.60)
    }

    return taxablePayable

}

const isValidated = (incomeFields, errorFields)=>
{
    let validated = true
    const income = incomeFields.value
    

    if (income == "")
    {
        validated = false
        error.innerText = "Please enter a number to calculate tax"
    }

    else if (isNaN(income))
    {
        error.innerText = "Please enter a valid taxable income"
        validated = false
    }

    else if (income <=0)
    {
        error.innerText = "Please enter a taxable income"
        validated = false
    }

    else
    {
        error.innerText = ""
        validated = true
    }

    return validated
}

const displayAnswer = (incomefields, answer)=>
{
    const income = (parseFloat(incomefields.value)).toFixed(2)
    const tax = calTax(income)
    answer.innerText = `Taxable Icome: $${income} \n Taxable Payable: $${tax}`
    incomefields.value= ""
}


const main = (()=>
{
    const taxableIncome = document.querySelector("#income")
    const errorFields = document.querySelector("#error")
    const calTaxBtn = document.querySelector("#calTaxPayableBtn")
    const taxablePayable = document.querySelector("#calTaxPayable")

    calTaxBtn.addEventListener("click", ()=>
    {
        let validate = true

        if (isValidated(taxableIncome, errorFields) ==true)
        {
            displayAnswer(taxableIncome,taxablePayable)
        }
    })

})()