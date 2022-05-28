export function Semaforo(cor){
    let b = "";

    if(cor == "verde"){
        b = "pode passar";
    }

    else if(cor == "vermelho"){
        b = "aguarde";
    }
    else{
        b = "inválido";
    }

    return b;
}

export function DiaSemana(dia) { 
    let x = "";

    if (dia == 0){
        x = "domingo";
    }

    else if(dia == 1) { 
        x = "segunda";
    }

    else if (dia == 2) { 
        x = "terça";
    }

    else if (dia == 3) { 
        x = "quarta";
    }

    else if (dia == 4) { 
        x = "quinta";
    }

    else if (dia == 5){ 
        x = "sexta";
    }

    else if (dia == 6) { 
        x = "sábado";
    }

    else {
        x = "inválido";
    }

    return x;
}


export function SequenciaPar(numero)
{ 
    let cont = [0];
    for(let i of numero){
    
    while(i <= numero)
    { 
        console.log(cont)
        cont[i] = i;
        i+=2
    }}

    return cont;
}



