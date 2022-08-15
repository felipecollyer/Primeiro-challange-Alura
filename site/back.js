
var palavra = document.getElementById("receberPalavra");   
var limpatela1 = document.getElementById("textoLado1")
var limpatela2 = document.getElementById("textoLado2")
var img = document.getElementById("imglado")
var digitado = document.getElementById ("campoDeResposta")

var btncopiar = document.getElementById("copiar")


function criptografou() {
                            // CASO CAMPO PREENCIDO , CRIA UMA VARIAVEL PARA ARMAZENAR , SE CAMPO FOR VAZIO DA ERRO.
    var frase = palavra.value;  
    if (frase == ""){
        alert (`ERRO, DIGITE UMA PALAVRA !`)            
    }else {
                                //LIMPA O CAMPO LATERAL E MOSTRA O BOTAO COPIAR
        limpar(img);
        limpar(limpatela1);
        limpar(limpatela2);
        btncopiar.style.display = 'block'               
        
        var novafrase = frase.replace(/e/g, "enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat")
        digitado.innerHTML=(novafrase)  
       
                                //LIMPA O CAMPO DO TEXTO E DA UM FOCU NELE NOVAMENTE
        palavra.value = "";                             
        palavra.focus()
    }
}
 
                                // BOTAO COPIAR TUDO QUE ESTA NO CAMPO LATERAL
function copiar (){                 
    navigator.clipboard.writeText (digitado.innerHTML)
    alert (`Copiado!`)
}

                                // FUNCAO PARA REMOVER OS ELEMENTOS LATERAIS CASO HAJA TEXTO
function limpar (elemento) {
   elemento.remove();
}


                                // FUNCAO PARA DISCRIPOGRAFAR .
function descriptografar (){
   

        var frase = palavra.value;
        if (frase == ""){
            alert (`ERRO, DIGITE UMA PALAVRA !`)
        }else {
            limpar(img);
            limpar(limpatela1);
            limpar(limpatela2);
            btncopiar.style.display = 'block'
            
            var novafrase = frase.replace(/enter/g, "e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u")
            digitado.innerHTML=(novafrase)  
           
            palavra.value = "";
        }
    
}