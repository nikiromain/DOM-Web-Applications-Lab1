const isValidated = (studentName, studentId, score, error)=>
{
    let validated = true
    const name = studentName.value
    const id = studentId.value
    const mark = score.value

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

    if(id == "")
    {
        error[1].innerText = "Please enter a id"
        validated = false
    }

    else if (isNaN(id))
    {
        error[1].innerText = "Please enter a valid id"
        validated = false
    }

    else
    {
        error[1].innerText = ""
        validated = true
    }


    if(mark == "")
    {
        error[2].innerText = "Please enter a score"
        validated = false
    }

    else if(mark < 0 || mark  > 100)
    {
        error[2].innerText = "Score cannot be less than 0 or more than 100"
        validated = false
    }

    else if (isNaN(mark ))
    {
        error[2].innerText = "Please enter a valid score"
        validated = false
    }

    else
    {
        error[1].innerText = ""
        validated = true
    }

    return validated

}

const getGrade = (score)=>
{
    let grade;

    if(score>=90 && score <=100)
    {
        grade = "A";
    }

    else if(score>=80 && score <=89.99)
    {
        grade = "B";
    }

    else if(score>=70 && score <=79.99)
    {
        grade = "C";
    }

    else if(score>=60 && score <=69.99)
    {
        grade = "D";
    }

    else if(score<60 && score >=0)
    {
        grade = "F";
    }
    
    return grade
}


const displayAnswer = (studName, studId, mark, answer)=>
{
    const name = studName.value;
    const id = studId.value;
    const score = parseFloat(mark.value)
    const grade = getGrade(score)
    answer.innerText = `NAME: ${name}: \n ID: ${id}\n MARK/100: ${score}\n GRADE: ${grade}`
}





const main = (()=>
{

    const name = document.querySelector("#name")
    const id = document.querySelector("#id")
    const score = document.querySelector("#score")
    const error = document.querySelectorAll(".error")
    const btn = document.querySelector("#getGrade")
    const grade = document.querySelector("#grade")

    btn.addEventListener("click", ()=>
    {
        const val = isValidated(name, id, score, error)

        if(val==true)
        {
            displayAnswer(name, id, score, grade)
        }


    })

})()