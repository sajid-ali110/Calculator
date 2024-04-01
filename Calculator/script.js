let equation= ""
function handeleGetValue(value){
    equation += value
    document.getElementById('display').value = equation
    console.log(equation)
}
function cleardisplay(value){
    equation= ""
    document.getElementById('display').value = equation
}
 function deleteLast(value){
     equation = equation.slice(0, -1);
     document.getElementById('display').value = equation;
 }


function handelcalculate(value){
    try{
        let result = eval(equation)
        equation = result
        document.getElementById('display').value = equation
    }catch(erro){
        document.getElementById('display').value = 'ERROR'
    }
}