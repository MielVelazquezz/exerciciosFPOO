var readline= require('readline-sync');

const finalizar = "0"   
const g10Num = "1"
const g8Num = "2"
const perg4 = "3"
const mDolar = "4"
const g10Nomes = "5"

while(info != 0){ 
    console.log('')
    console.log('+-----------------------------  MENU  -----------------------------+')
    console.log('|                                                                  |')
    console.log('|    0 - Finalizar                                                 |')
    console.log('|    1 - Guardar 10 números em um array                            |')
    console.log('|    2 - Guardar 8 números e verificar se são pares ou ímpares     |')
    console.log('|    3 - Verificar se 4 números  mencionados são primos            |')
    console.log('|    4 - Mostrar o valor mencionado em dólar                       |')
    console.log('|    5 - Guardar e mostrar 10 nomes em sequência                   |')
    console.log('|                                                                  |')
    console.log('+------------------------------------------------------------------+')

    var info = readline.question("Escolha uma opcao ")

    switch (info){
        // Perguntar e guardar 10 números em um vetor (array).
        case "1":

            function gerar10Numeros(){
                let num1 = []
                
                for(var a = 0; a <= 9; a++){

                num1.push([readline.question("Digite 10 numeros (um de cada vez) ")]);
            }
            console.log("Os números citados foram "+ num1);

            }
            gerar10Numeros();

            break;

        // Guardar 8 números (loop); verificar se cada número é par ou ímpar (if); mostrar o número e o resultado par ou ímpar.
        case "2":

            function parOuImpar(){
                let num2 = []
                
                for(var b = 0; b <= 7; b++){
                    num2 = [readline.question("Digite 8 numeros (um de cada vez) ")];

                    if(num2 % 2 == 0 ){
                        console.log(" ------ O número citado ("+ num2 +") é par ------ ");
                    }
                    else{
                        console.log(" ------ O número citado ("+ num2 +") é ímpar ------ ");
                    }
                }
                
            }
            parOuImpar();

            break;

        // Perguntar 4 números e verificar se número é primo (if ou switch)
        case "3": 

             function numPrimo(){
                let num3 = []

                for(var c = 0; c <= 3; c++){
            
                let num3 = [readline.question("Digite 4 numeros (um de cada vez) ")] 

                console.log(num3[c])

                let f = num3[c];
                e = f/2;

                if(f == 0 || f == 1){
                    console.log(f+" Não é um número primo")
                }
                else{
                    for(g = 2; g < e; g++){
                        if(f % g == 0){
                            console.log(f+" Não é um número primo");
                            h = 1;

                            break;
                        }
                    }
                }

             }   

        }
        numPrimo();

        break;

        //Mostrar o calculo de compra do dólar com um determinado valor real. (in-out)
        case "4":

            var real1 = readline.question("Qual o valor (em reais) que desejas converter para o dolar? R$");

            function convReal(){
                let dolar1 = real1 * 0.21;

                console.log("O valor em dólares é U$"+ dolar1);

        }
        convReal();

        break;

        //Perguntar e guardar 10 nomes; mostrar estes nomes em sequência e seus respectivos índices.
        case "5":

            function dezNomes(){
                let nomes1 = [];

                for(var d = 0; d <= 9; d++){
                    nomes1.push([readline.question("Digite algum nome "),(nomes1.length)]);

                }
                console.log("Os nomes citados em sequência, juntamente de seus índices são: "+ nomes1);

            }
            dezNomes();

            break;

            case "0":
             
            process.exit()

            break;

            default:
                console.log('')
                console.log('       +-----------------------------------------------------+')
                console.log('       |                                                     |')
                console.log('       |                                                     |')
                console.log('       |      Código não identificado, tente novamente.      |')
                console.log('       |                                                     |')
                console.log('       |                                                     |')
                console.log('       +-----------------------------------------------------+')


        
    }

}
