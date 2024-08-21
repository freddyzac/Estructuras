//Freddy Zacarias 

// Función para sumar
function sumar(a, b) {
    return a + b;
}

// Función para restar
function restar(a, b) {
    return a - b;
}

// Función para multiplicar
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir
function dividir(a, b) {
    if (b === 0) {
        return 'Error: División por cero';
    }
    return a / b;
}

// Función principal de la calculadora
function calculadora() {
    const operacion = prompt("Elige una operación: sumar, restar, multiplicar, dividir");

    const numero1 = parseFloat(prompt("Introduce el primer número:"));
    const numero2 = parseFloat(prompt("Introduce el segundo número:"));

    let resultado;

    switch (operacion) {
        case 'sumar':
            resultado = sumar(numero1, numero2);
            break;
        case 'restar':
            resultado = restar(numero1, numero2);
            break;
        case 'multiplicar':
            resultado = multiplicar(numero1, numero2);
            break;
        case 'dividir':
            resultado = dividir(numero1, numero2);
            break;
        default:
            resultado = 'Operación no válida';
    }

    alert(`El resultado es: ${resultado}`);
}

// Ejecuta la calculadora
calculadora();
