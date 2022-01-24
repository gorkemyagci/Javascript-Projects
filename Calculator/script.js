let btnNum = document.querySelectorAll('#btnNumber')
let btnOpt = document.querySelectorAll('#btnOpt')
let screen = document.querySelector('#screen')
let opt = ""
let optState = false;
let final = 0;

function remove(){
    screen.textContent = 0;
}
 

btnNum.forEach(number => {
    number.addEventListener('click',showNumber)

    function showNumber(){
        this.style.fontSize = "25px"
     if(screen.textContent == "0" || optState){
         screen.textContent = ""
     }
     screen.textContent += this.textContent
     optState = false;

     setTimeout(()=>{
         this.style.fontSize = "16px"
     },100)
    }
})


btnOpt.forEach(operator => {
    operator.addEventListener('click',calculator)

    function calculator(){
        optState = true;
        var newOpt = this.textContent;

        switch(opt){
            case "+":
                screen.textContent = final + Number(screen.textContent);
                break;
            case "-":
                screen.textContent = final - Number(screen.textContent);
                break;
            case "/":
                screen.textContent = final / Number(screen.textContent);
                break;
            case "*":
                screen.textContent = final * Number(screen.textContent);
                break;
        }
        final = Number(screen.textContent)
        opt = newOpt;
    }
})