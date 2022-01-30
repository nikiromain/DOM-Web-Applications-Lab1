//calcualte delivery charge based on weight
const deliveryCharge = (weight)=>
{
    let charge = 0;

    if (weight < 2.5)
    {
        charge = 3.50
    }

    else if (weight >=2.5 && weight <= 5)
    {
        charge = 2.85
    }

    else if (weight > 5 && weight <=7)
    {
        charge = 2.45 
    }

    else 
    {
        charge = 3.25 
    }

    return charge
}

//validate input weight
const isValidated = (weight, error)=>
{
    let isValid = true
    const userWeight = weight.value

    if (userWeight == "")
    {
        isValid = false;
        error.innerText = "Please enter a value to calculate delivery charge"
    }


   else if(isNaN(userWeight ))
    {
        isValid = false
        error.innerText = "Please enter a valid number to calculate delivery charge"
    }

    else if (userWeight <= 0)
    {
        isValid = false 
        error.innerText = "Please enter a number more that 0 to calcualte a charge"
    }

    else
    {
        isValid = true
        error.innerText = ""
    }


    return isValid
}

const displayAnswer = (weightField, answerField)=>
{
    const weight = parseFloat(weightField.value)
    const calDeliveryCharge = deliveryCharge(weight)
    answerField.innerText = `Your Delivery Charge is: $${calDeliveryCharge}`
    weightField.value = ""
}


const main = (()=>
{

    const weight = document.querySelector("#weight")
    const error = document.querySelector("#error")
    const calBtn = document.querySelector("#calDeliveryChargeBtn")
    const deliverycharge = document.querySelector("#deliveryCharge")

    calBtn.addEventListener("click",()=>
    {
       if ((isValidated(weight,error)) == true)
       {
           displayAnswer(weight,deliverycharge)
       }

    })


})()