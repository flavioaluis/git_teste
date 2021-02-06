function incrementa(){
    var idade = document.getElementById("idade").value;
    idade++;
    document.getElementById("idade").value = idade;
}    

function decrementa(){
        var idade = document.getElementById("idade").value;
        if (idade > 1){
        idade--;
    }
    document.getElementById("idade").value= idade;
}

function botaoClick(){
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    if( idade >=18){
        alert("Bem vindo " + nome + " vc é maior de idade " + idade); //concatenar
    //alert(`Bem vindo ${valorInput}  !!!!`); // Interpolar
    }
    else{ 
        alert("Bem vindo " + nome + " vc não é maior de idade " + idade); //concatenar
    //alert(`Bem vindo ${valorInput}  !!!!`); // Interpolar
    }   
}
