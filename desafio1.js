/**
Dado 5 números inteiros positivos, encontre os valores mínimos e máximos que podem ser calculados somando exatamente quatro dos cinco inteiros dados. Então imprimir os respectivos valores mínimo e máximo separados por um espaço em uma única linha.

Exemplo: 
arr = [3, 5, 1, 7, 9]

A soma mínima é  3 + 5 + 1 + 7 = 16
A soma máxima é 3 + 5 + 7 + 9 = 24

A função imprime: 16  24

 **/

function calculaMinMax(input){		
	if (input.length){
		let min = max = sum = 0;			
		for(let i = 0; i < input.length; i++){			
			if(input[i] < min || min === 0){							
				min = input[i];        				
			}
			if(input[i] > max){				
				max = input[i];        				
			}
			sum += input[i]    
		}
		return `${sum - max} ${sum - min }`;	
	}	
}


const input  = [3, 5, 1, 7, 9]
console.log(calculaMinMax(input));