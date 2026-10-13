const random=Math.floor(Math.random()*10)+1
const number =document.querySelector(".guess-input")
const message=document.querySelector(".message")
const reset=document.querySelector(".reset-btn")
const checkbtn =document.querySelector(".check-btn")
checkbtn.addEventListener("click",function(){
    const data=number.value
    if(data>random)
    {
        message.textContent="too high"
    }
    else if(data<random)
    {
        message.textContent="too low"
    }
    else{
        message.textContent="correct"
    }
})

