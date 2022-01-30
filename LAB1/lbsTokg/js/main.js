const kgToLbs = (weight)=> weight * 2.2

    //const KGCONVERSION = 2.2



const isValidated = (nameField, weightField, error)=>
{
    let validated = true; 
    const name = nameField.value;
    const weight = weightField.value;

    if(name == "")
    {
        error[0].innerText = "Please enter a name"
        validated = false
    }

    else if(!isNaN(name))
    {
        error[0].innerText = "Please enter a valid name"
        validated = false
    }

    else
    {
        error[0].innerText = ""
        validated = true
    }

    if(weight == "")
    {
        error[1].innerText = "Please enter a weight"
        validate = false
    }

    else if (isNaN(weight))
    {
        error[1].innerText = "Please enter a valid weight"
        validated = false
    }

    else
    {
        error[1].innerText = ""
        validated = true
    }


    return validated
}

const displayAnswer = (nameField, weightField, answer)=>
{
    const name = String(nameField.value)
    const weight = parseFloat(weightField.value)
    const weightInLbs = kgToLbs(weight)
    answer.innerText = `${name} is this your weight: ${weight}Kg -> ${weightInLbs.toFixed(2)}Lbs`

    name.value = ""
    weight.value = ""

}


const main = (()=>
{

    const name = document.querySelector("#name")
    const weight = document.querySelector("#weight")
    const error = document.querySelectorAll(".error")
    const btn = document.querySelector("#calWeightBtn")
    const answer = document.querySelector("#answer")

    btn.addEventListener("click", ()=>
    {

       const val =  isValidated(name, weight, error)
        
            if(val==true)
            {
                displayAnswer(name, weight, answer)
            }
    
    })


})()