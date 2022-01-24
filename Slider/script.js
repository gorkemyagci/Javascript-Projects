var setups = [
    {
        name : "Price : 23,500$",
        img : "../Slider/img/setup0.jpg"
    },
    {
        name : "Price : 14,250$",
        img : "../Slider/img/setup1.jpg"
    }
]

var index = 0;
var settings = {
    duraiton: '1000',
    random: true
}

init(settings);

var slaytCount = setups.length;

document.querySelector('.card-title').textContent = setups[index].name;
document.querySelector('.card-img-top').setAttribute('src',setups[index].img)

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    slideShow(index)
})

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    slideShow(index)
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval)
    })
})
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings)
    })
})
function slideShow(i){
    index = i;
    if(i<0){
        index = slaytCount-1;
    }
    if(i>=slaytCount){
        index = 0;
    }
    document.querySelector('.card-title').textContent = setups[index].name;
    document.querySelector('.card-img-top').setAttribute('src',setups[index].img)
}


function init(settings){
    var prev;
    interval = setInterval(function(){
       if(settings.random){
          do{
            index = Math.floor(Math.random() * slaytCount)
          }while(index == prev){
              prev == index;
          }
       }else{
        if(slaytCount == index+1){
            index = -1;
        }
        slideShow(index)
        index++;
       }
       slideShow(index)
    },settings.duraiton)
}