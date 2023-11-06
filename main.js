// Desarrollador una calculadora que tenga:
// ● 2 campos inputs para los operadnos
// ● 4 botones de operadores básicos (suma, resta, multiplicación, división)
// Al realizar la cuenta se deberá actualizar el campo resultado


const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multiplicacion = document.getElementById("multiplicacion");
const division = document.getElementById("division");
const resultado = document.getElementById("resultado");
const limpiar = document.getElementById("limpiar");


const realizarOperacion = (operador) => {
    const valor1 = parseFloat(input1.value);
    const valor2 = parseFloat(input2.value);
    let res;

    switch (operador) {
        case "suma":
            res = valor1 + valor2;
            // input1.value="0"
            break;
        case "resta":
            res = valor1 - valor2;
            break;
        case "multiplicacion":
            res = valor1 * valor2;
            break;
        case "division":
            if (valor2 !== 0) {
                res = valor1 / valor2;
            } else {
                res = "Imposible";
            }
            break;
        case "clear":
            input1.value=""
            input2.value=""
            res = ""
            break
        default:
            res = "Operación no válida";
    }

    resultado.textContent = res;
};

// clear = ()=> {
//     input1.value="0"
//     input2.value="0"
//     resultado.value = 0
// }

suma.addEventListener("click", () => realizarOperacion("suma"));
resta.addEventListener("click", () => realizarOperacion("resta"));
multiplicacion.addEventListener("click", () => realizarOperacion("multiplicacion"));
division.addEventListener("click", () => realizarOperacion("division"));
limpiar.addEventListener("click", () => realizarOperacion("clear"));
