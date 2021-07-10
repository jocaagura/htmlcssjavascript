var display, input, execute, output;
// esperamos la carga del DOM
window.onload = function () {
    display = document.getElementById('show_results');
    input = document.getElementById('input');
    execute = document.getElementById('execute');
    output = document.getElementById('output');
    execute.addEventListener("click", executeValidateParentheses);
}



// Para validar parentesis unicamente
function executeValidateParentheses() {
    let cadena = captureStringFromInput();
    let arr = cadena.split('');

    // recorreremos el array para encontrar si los parentesis estan abiertos o cerrados

    let arr2 = removeByStack(arr);
    let innerHtml = printInsideDisplayFromArray(arr2);
    input.value = arr2.join('');

    // if (arr2.length === arr.length && arr2.length > 0) {
    // showOutput(false);
    // } else {
    //  showOutput(true);
    // }

    if (arr2.length > 0) {
        showOutput(false);
    } else {
        showOutput(true);
    }
    display.innerHTML = innerHtml;
}

var removeByStack = function (arr) {
    let tmpStack = [];
    let closed = 0;

    if (arr.length % 2 === 0) {
        let tmpStack = [];
        let keepGoing = true;
        let index = 0;
        while ( index < arr.length) {
            let val = arr[index];
            if (val === '(' || val === '[' || val === '{') {
                tmpStack.push(val);
            } else if (arePair(tmpStack[tmpStack.length - 1], val)) {
                tmpStack.pop();
            } else {
                tmpStack = [']'];
                index = arr.length;
            }
            index++;
        }
        return tmpStack;
    } else {
        return [']'];
    }

}



var removeFirstSign = function (arr) {
    if (arr.length % 2 === 0) {
        let end = 1;
        let continuar = true;
        while (continuar && arr.length > 1) {
            // limpiamos los extremos que es bien facil
            if (end === 1) {
                control = arr[0];
                if (arePair(control, arr[end])) {
                    arr.shift();
                    arr.shift();
                    end = 1;
                    continuar = false;
                }
                if (arePair(arr[arr.length - 2], arr[arr.length - 1])) {
                    arr.pop();
                    arr.pop();
                    end = 1;
                    continuar = false;
                }
            } else if (end < arr.length) {
                if (arePair(arr[end - 1], arr[end])) {
                    arr.splice(end - 1, 2);
                    continuar = false;
                    end = 0
                }
            } else {
                continuar = false;
            }
            end++;
        }
    }
    return arr;
}

var arePair = function (a, b) {
    console.log(a, b);
    let token = false;
    if ((a === '(' && b === ')') || (a === '[' && b === ']') || (a === '{' && b === '}')) {
        token = true;
    }
    return token;
}







// general functions
function captureStringFromInput() {
    let cadena = input.value;
    return cadena;
}

function printInsideDisplayAsArray(s) {
    let arrContent = s.split('');
    return printInsideDisplayFromArray(arrContent);
}

function printInsideDisplayFromArray(arr) {
    let innerHtml = '';
    arr.forEach(function (val) {
        innerHtml = innerHtml + '<div>' + val + '</div>';
    });

    return innerHtml;
}


function showOutput(valor) {
    output.innerHTML = valor;

}

console.log('inicializando');