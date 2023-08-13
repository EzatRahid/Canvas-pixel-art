let container = document.querySelector(".container");
let gridButton = document.getElementById("submit-grid");
let clearGridButton = document.getElementById("clear-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");

let events = {
    mouse:{
        down:"mousedown",
        move:"mousemove",
        up:'mouseup'

    },
    touch:{
        down : 'touchstart',
        move:'touchmove',
        up: 'touchend',
    },
}


let deviceType = '';

let draw = false 
let erase = false

const isTouchDevice = () =>{
    try{
        document.createEvent("TouchEvent")
        deviceType = 'touch'
        return true
    } catch(e){
        deviceType = 'mouse'
        return false
    }
}

isTouchDevice();

gridButton.addEventListener('click' ,() =>{
    container.innerHTML = '';
    let count = 0;
    for(let i = 0; i < gridHeight.ariaValueMax; i++){
        count +=2;
        let div = document.createEvent('div')
        div.classList.add('gridRow')

        for(let j =0;j < gridWidth.ariaValueMax; j++){
            count+=2
            let col = document.createEvent('div')
            col.classList.add('gridCol')
            col.setAttribute('id',`gridCol${count}`)
            col.addEventListener(events[deviceType].down,() =>{
                draw = true
                if(erase){
                    col.style.backgroundColor = 'transparent'
                }else{
                    col.style.backgroundColor = colorButton.value
                }
            })
            col.addEventListener(events[deviceType].move,(e) =>{
                let elementId = document.elementFromPoint
            })
        }
    }
})