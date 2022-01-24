let dakika = document.querySelector('.dakika')
let saniye = document.querySelector('.saniye')
let start = document.getElementById('start')
let stop = document.getElementById('stopBtn')
let reset = document.getElementById('reset')
let dur = false;

start.addEventListener('click',startTimer)
reset.addEventListener("click",() => {
    dur = true;
    dakika.textContent = "00";
    saniye.textContent = "00";
})

document.getElementById('stopBtn').addEventListener('click',() => {
    dur = true;
})
function startTimer(){
    dur = false;
    let dk = dakika.textContent;
    let sn = saniye.textContent;
    let interval = setInterval(() => {
        sn++;
        sn = sn < 10 ? "0" + sn : sn
        if(sn == 59){
            dk++
            dk = dk < 10 ? "0" + dk : dk;
            sn = 00;
        }
        if(sn == 0){
            sn = "0" + sn
        }
        if(dur){
            clearInterval(interval)
            return;
        }
        dakika.textContent = dk;
        saniye.textContent = sn;
    },1000)
}