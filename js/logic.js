function cpuElec() {
    return Math.floor(Math.random() * 3) + 1;
}
function accion(x,y){
    switch (x){
    case 1:
    document.write("<br>Eligio Piedra");
    break;
    case 2:
    document.write("<br>Eligio Papel");
    break;
    case 3:
    document.write("<br>Eligio Tijera");
    break;
}   switch (y){
    case 1:
    document.write("<br>El cpu eligio Piedra");
    break;
    case 2:
    document.write("<br>El cpu eligio Papel");
    break;
    case 3:
    document.write("<br>El cpu eligio Tijera");
    break;
}
}
function ganador(n,x){
    if((n===1 && x==3)||(n===2 && x===1)||(n===3 && x===2)){
    document.write("<br>Ganaste");
}else if((n===1 && x==2)||(n===2 && x===3)||(n===3 && x===1)){
        document.write("<br>Gana el cpu");
    }else if((n===1 && x===1)||(n=== 2&& x===2)||(x==3 && x===3)){
        document.write("<br>Empate");
        }
    
}

alert("Ingresa un numero segun tu accion");
let numero = parseInt(prompt("1: Piedra // 2: Papel // 3: Tijera"));
if(numero>0 && numero<4){
let cpu= cpuElec();
accion(numero,cpu);
ganador(numero,cpu);
}else {
    alert("Numero incorrecto, ingrese un numero valido");
}
