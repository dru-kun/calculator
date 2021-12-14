const display1Element = document.querySelector('.display-1');
const display2Element = document.querySelector('.display-2');
const tempResultElement = document.querySelector('.tempResult');
const numbersElement = document.querySelectorAll('.number');
const operationElement = document.querySelectorAll('.operation');
const equalElement = document.querySelector('.equal')
const clearAllElement = document.querySelector('.allClear');
const deleteElement = document.querySelector('.delete');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;
//number functionality
numbersElement.forEach(number => {
    number.addEventListener('click', (e)=>{
        if( e.target.innerText ==='.' && !haveDot){
            haveDot = true;
        }else if (e.target.innerText==='.'&& haveDot){
            return;
        }
        dis2Num += e.target.innerText;
        display2Element.innerText = dis2Num;
    })
});
//operators use
operationElement.forEach(operation=>{
    operation.addEventListener('click', (e)=>{
        if (!dis2Num) result;
        haveDot = false;
        const operationName = e.target.innerText;
        if(dis1Num && dis2Num && lastOperation){
            mathOperation();
        }else{
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
})
//display 1 functionality
function clearVar(name = ''){
    dis1Num += dis2Num + ' ' + name + ' ';
    display1Element.innerText = dis1Num;
    display2Element.innerText = '';
    dis2Num = '';
    tempResultElement.innerText = result;
}
//math operations
function mathOperation(){
    if(lastOperation === 'x'){
        result = parseFloat(result) * parseFloat(dis2Num); 
    }else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dis2Num); 
    }else if(lastOperation === '-'){
        result = parseFloat(result) - parseFloat(dis2Num); 
    }else if(lastOperation === '/'){
        result = parseFloat(result) / parseFloat(dis2Num); 
    }else if(lastOperation === '%'){
        result = parseFloat(result) % parseFloat(dis2Num); 
    }   
}
//equal button functionality
equalElement.addEventListener('click', (e)=>{
    if(!dis1Num || !dis2Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2Element.innerText = result;
    tempResultElement.innerText = '';
    dis2Num = result;
    dis1Num = '';
})
//reset all parameters
clearAllElement.addEventListener('click', (e)=>{
    display1Element.innerText = '';
    display2Element.innerText = '';
    dis1Num = '';
    dis2Num = '';
    result = '';
    tempResultElement.innerText = '';
})
//clear last entry
deleteElement.addEventListener('click', (e)=>{
    display2Element.innerText = '';
    dis2Num = '';
})