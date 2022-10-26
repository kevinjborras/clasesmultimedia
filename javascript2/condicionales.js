var edad = 25;

/*
if(edad >= 18) {
    document.write("Es mayor de edad");
    document.write("<br>");
}

if(edad >= 18) {
    document.write("Es mayor de edad");
    document.write("<br>");
}else {
    document.write("NO Es mayor de edad");
    document.write("<br>");
}
*/

var promedio = 0
if (promedio >=19 && promedio <=20) {
    document.write("Es excelente");
    document.write("<br>");
}else if(promedio >=16 && promedio <=18){
    document.write("Eres bueno");
    document.write("<br>");
}else if(promedio >=13 && promedio <=15){
    document.write("Eres regular");
    document.write("<br>");
}else if(promedio >=10 && promedio <=12){
    document.write("Eres deficiente");
    document.write("<br>");
}else if(promedio >=1 && promedio <=9){
    document.write("Eres pesimo");
    document.write("<br>");
}else {
    document.write("No hay nota");
}
document.write("<br>");
key = 5;
switch(key) {
    case 1:
        document.write("El valor es 1");
        document.write("<br>");
        break;
    case 2:
        document.write("El valor es 2");
        document.write("<br>");
        break;
    case 3:
        document.write("El valor es 3");
        document.write("<br>");
        break;
    case 4:
        document.write("El valor es 4");
        document.write("<br>");
        break;
    case 5:
        document.write("El valor es 5");
        document.write("<br>");
        break;
    default:
        document.write("Error dato no valido");
        document.write("<br>");
        break;
}