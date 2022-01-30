const calSum = (n1,n2)=> n1 + n2


const validateFields = (fields, error)=>
{

    let validated = true;
    const numb1 = fields[0].value;
    const numb2 = fields[1].value;

    if (numb1  == "")
    {
        error[0].innerText = "Sorry you must enter a number"
        validated = false;
    }

    else
    {
    

       if( isNaN(numb1))
       {
        error[0].innerText = "Sorry you must enter a valid number"
        validated = false;
       }

    

    else
        {
            error[1].innerText = ""
        }
    
    }

    if (numb2 == "")
    {
        validated = false;
        error[1].innerText = "Sorry you must enter a number"
    }

    else
    {
    
        if(isNaN(numb2))
        {
        
            error[1].innerText = "Sorry you must enter a valid number"
            validated = false;
        }
    

    else 
    {
        error[1].innerText = ""
    }

}

    return validated
    
}

const displayAnswer = (fields,answer)=>
{
    const num1 = parseFloat(fields[0].value);
    const num2 = parseFloat(fields[1].value);
    answer.innerText = `The sum of ${num1} + ${num2} is ${calSum (num1, num2)}`
    
    fields.forEach(fields =>
    {
            fields.value = ""
    })
}



const main = ()=>
{

    const fields = document.querySelectorAll(".fields > input[type = text]")
    const error = document.querySelectorAll(".error")
    const btn = document.querySelector("#calSumBtn")
    const answer = document.querySelector("#answer")

    btn.addEventListener("click",()=>
    {

        const val = validateFields(fields, error)
        
        if (val==true)
        {
            displayAnswer(fields,answer)
        }

        
    })

}

main()

