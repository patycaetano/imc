const calcular = document.getElementById('calcular'); /*cria uma variável cujo o valor é fixo*/
function imc(){ /*Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor*/
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(altura !=='' && peso !==''){ /* if é usada para testar uma condição*/
     const valorIMC = (peso / (altura * altura)).toFixed(1);

     let classificacao = ''; /*permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada*/
     if (valorIMC < 18.5){
        classificacao = 'abaixo do peso';
     } else if (valorIMC <25){
        classificacao = 'peso ideal';
     }else if (valorIMC <30){
        classificacao = 'sobrepeso';
     }else if (valorIMC <40){
        classificacao = 'obesidade';
     }else    {       /* permite ao programa avaliar uma expressão como sendo verdadeira ou falsa.*/                                             
        classificacao = 'Obesidade Grave, Cuidado !!';
    }

      resultado.textContent = `Seu IMC é ${valorIMC} e sua  classificação é: ${classificacao}.`;

   /* SE Altura for diferente de em branco e peso 
   for diferente de em branco faça
   !== diferente
   == igual
   >maior
   <menor
   */

    }
    else{
      resultado.textContent = `Preencha todos os campos!!`;  
    }

}
calcular.addEventListener('click', imc)