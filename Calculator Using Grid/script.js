let result = document.getElementById('result');

function appendToResult(value){
    result.value += value;
}

function clearDisplay(){
    result.value ='';
}

function calculateResult() {
    try{
        result.value = eval(result.value);
    }
    catch (error) {
        result.value = 'Error';
    }
}