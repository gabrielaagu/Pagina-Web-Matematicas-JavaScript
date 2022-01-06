//Código del Cuadrado
console.group("Cuadrados")

//Lado del cuadrado
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cms");

//Perimetro del cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
} 

//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cms");

//Area del cuadrado

function areaCuadrado(lado){
    return lado * lado;
}

//console.log("El área del cuadrado mide: " + areaCuadrado + " cms^2");

console.groupEnd();



//Código del Triangulo
console.group("Triangulo");

//Lados de triangulo

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo =5;
// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cms, " + ladoTriangulo2 + " cms, " + baseTriangulo + "cms.");
// console.log("La altura del triangulo mide: " + alturaTriangulo + " cms");


//Perimetro del triangulo

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
};

// console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cms");


//Area del triangulo

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}

// console.log("El área del triangulo mide: " + areaTriangulo + " cms^2");

console.groupEnd();


//Código del Circulos

console.group("Circulos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es " + radioCirculo + " cms.");


//Diametro

function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es " + PI + ".");

// Perimetro

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area

function areaCirculo(radio){
    return (radio * radio) * PI;
}

//console.log("El area del circulo es " + areaCirculo + " cms.");
console.groupEnd();

//Aquí interactuamos con el HTML

//Perímetro y Área del cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es " + perimetro + " cm");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El área del cuadrado es " + area + " cm^2");
}

//Perímetro y Área del Triángulo

function calcularPerimetroTriangulo(){
    const InputLado1 = document.getElementById("InputLado1Triangulo");
    const valueLado1 = Number(InputLado1.value);

    const InputLado2 = document.getElementById("InputLado2Triangulo");
    const valueLado2 = Number(InputLado2.value);

    const InputBase = document.getElementById("InputBaseTriangulo");
    const valueBase = Number(InputBase.value);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert("El perímetro del triángulo es " + perimetro + " cm");
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueBase = Number(inputBase.value);

    const inputAltura = document.getElementById("InputAlturaTriangulo");
    const valueAltura = Number(inputAltura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    alert("El área del triángulo es: " + area + " cm^2");
}

//Perímetro y Área del Círculo

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert("El perímetro del círculo es " + perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const area = areaCirculo(value);
    alert("El área del círculo es: " + area);
}