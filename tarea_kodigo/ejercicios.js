// EJERCICIO 1: Verificar si es mayor de edad
function verificarEdad(edad) {
    return edad >= 18 ? 'Es mayor de edad' : 'No es mayor de edad';
}
console.log(verificarEdad(20)); // Ejemplo

// EJERCICIO 2: Calcular nota final
function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    const notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
    console.log(`Nombre: ${nombre}, Carnet: ${carnet}, Nota Final: ${notaFinal.toFixed(2)}`);
}
calcularNotaFinal('Santi', '12345', 80, 90, 100, 85);

// EJERCICIO 3: Calcular aumento salarial
function calcularAumento(nombre, salario, categoria) {
    let aumento = 0;
    switch (categoria.toUpperCase()) {
        case 'A': aumento = salario * 0.15; break;
        case 'B': aumento = salario * 0.3; break;
        case 'C': aumento = salario * 0.1; break;
        case 'D': aumento = salario * 0.2; break;
    }
    console.log(`Nombre: ${nombre}, Salario: ${salario}, Categoría: ${categoria}, Aumento: ${aumento.toFixed(2)}`);
}
calcularAumento('Santi', 1000, 'B');

// EJERCICIO 4: Determinar el número mayor
function determinarMayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(determinarMayor(10, 20));

// EJERCICIO 5: Calcular descuento en coches
function calcularDescuentoCoche(modelo) {
    let descuento = 0;
    switch (modelo.toUpperCase()) {
        case 'FORD FIESTA': descuento = 0.05; break;
        case 'FORD FOCUS': descuento = 0.1; break;
        case 'FORD ESCAPE': descuento = 0.2; break;
    }
    console.log(`Modelo: ${modelo}, Descuento: ${(descuento * 100)}%`);
}
calcularDescuentoCoche('Ford Fiesta');

// EJERCICIO 6: Calcular descuento en viajes
function calcularDescuentoViaje(origen, destino) {
    let descuento = 0;
    if (origen.toLowerCase() === 'palma') {
        switch (destino.toLowerCase()) {
            case 'la costa del sol': descuento = 0.05; break;
            case 'panchimalco': descuento = 0.1; break;
            case 'puerto el triunfo': descuento = 0.15; break;
        }
    }
    console.log(`Origen: ${origen}, Destino: ${destino}, Descuento: ${(descuento * 100)}%`);
}
calcularDescuentoViaje('Palma', 'Panchimalco');

// EJERCICIO 7: Analizar 10 valores
function analizarValores(valores) {
    let negativos = 0, positivos = 0, multiplos15 = 0, sumaPares = 0;
    valores.forEach(valor => {
        if (valor < 0) negativos++;
        if (valor > 0) positivos++;
        if (valor % 15 === 0) multiplos15++;
        if (valor % 2 === 0) sumaPares += valor;
    });
    console.log(`Negativos: ${negativos}, Positivos: ${positivos}, Múltiplos de 15: ${multiplos15}, Suma de pares: ${sumaPares}`);
}
analizarValores([10, -5, 15, 30, -10, 2, 3, 45, 15, -3]);

// EJERCICIO 8: Tabla de multiplicar
function tablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
tablaMultiplicar(5);

// EJERCICIO 9: Convertir Celsius a Fahrenheit
function convertirCelsiusAFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`Celsius: ${celsius}, Fahrenheit: ${fahrenheit.toFixed(2)}`);
}
convertirCelsiusAFahrenheit(25);

// EJERCICIO 10: Promedio de edades por turno
function promedioEdades(turnoManana, turnoTarde, turnoNoche) {
    const promedioManana = turnoManana.reduce((a, b) => a + b, 0) / turnoManana.length;
    const promedioTarde = turnoTarde.reduce((a, b) => a + b, 0) / turnoTarde.length;
    const promedioNoche = turnoNoche.reduce((a, b) => a + b, 0) / turnoNoche.length;
    console.log(`Promedio Mañana: ${promedioManana.toFixed(2)}, Tarde: ${promedioTarde.toFixed(2)}, Noche: ${promedioNoche.toFixed(2)}`);
}
promedioEdades([18, 20, 19, 21, 22], [25, 26, 24, 23, 22, 27], [30, 31, 29, 28, 27, 26, 32, 33, 30, 29, 28]);
