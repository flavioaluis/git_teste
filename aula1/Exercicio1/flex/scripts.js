function Mostramensagem() {
    alert("Hello World");
    }
function botaoClick(){
    const valorInput = document.getElementById("inputNome").value;
    const valorInput2 = document.getElementsByClassName("inputNome2");
    const valorTag = document.getElementsByTagName("input");
    alert("Bem vindo " + valorInput + "  !!!!!"); //concatenar
    //alert(`Bem vindo ${valorInput}  !!!!`); // Interpolar
    console.log(valorInput2);
}