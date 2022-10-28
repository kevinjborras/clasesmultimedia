function suma(params) {
    alert("Responde suma"); //envia una alerta
    console.log("Response suma")

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    console.log(num1);
    console.log(num2);

    if(num1 == "" && num2 ==""){
        console.log("valida num1 y num2");
        document.getElementById("num1").style.borderColor = "Red";
        document.getElementById("n1").innerHTML = "El campo no puede estar vacio"
        document.getElementById("num2").style.borderColor = "Red";
        document.getElementById("n2").innerHTML = "El campo no puede estar vacio"
    }else if(num2=="") {

        
    } else {
        document.getElementById("n1").innerHTML = "*"
        document.getElementById("n2").innerHTML = "*"

        document.getElementById("num1").style.borderColor = "Black";
        document.getElementById("num2").style.borderColor = "Black";

        result = parseInt(num1) + parseInt(num2) ; //ParseInt convierte a numerico

        document.getElementById("result").innerHTML = "El resutlado de la suma es: " + result; //innerHTML cambia el HTML
    }

    //alert(num1);
    //alert(num2); 

  
}