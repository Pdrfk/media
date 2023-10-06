botao.addEventListener("click", function(){


var nota1 = parseInt(av1.value);
var nota2 = parseInt (rec1.value);
var maior = 0;

var nota3 = parseInt(av2.value);
var nota4 = parseInt (rec2.value);
var maior1 = 0;

var nota5 = parseInt(av3.value);
var nota6 = parseInt (rec3.value);
var maior2 = 0;

if (nota1>=nota2){
maior = nota1;

}

if (nota2>=nota1){
    maior = nota2;
    
    }

    if (nota3>=nota4){
        maior1 = nota3;
        
        }
        
        if (nota4>=nota3){
            maior1 = nota4;
            
            }

            if (nota5>=nota6){
                maior2= nota5;
                
                }
                
                if (nota6>=nota5){
                    maior2 = nota6;
                    
                    }
                
                    var soma = (maior+maior1+maior2);
                    mediafinal=(soma/3)
                    result.InnerHTML="Sua média é:" + mediafinal
        


alert (mediafinal);

})