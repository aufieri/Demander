// Classe para diferenciar e definir Numero real de Numero Romano 
class RomanoValor{
    constructor(numeroReal, numeroRomano){
        this.numeroReal = numeroReal;
        this.numeroRomano = numeroRomano;
    }
}

// Classe para Definir atributos de cada valor dos numeros romanos
class Conversor {
    constructor() {
        this.numerosConvertidos = [
            
        new RomanoValor(1000, "M"),
        new RomanoValor(900, "CM"),
        new RomanoValor(500, "D"),
        new RomanoValor(400, "CD"),
        new RomanoValor(100, "C"),
        new RomanoValor(90, "XC"),
        new RomanoValor(50, "L"),
        new RomanoValor(40, "XL"),
        new RomanoValor(10, "X"),
        new RomanoValor(9, "IX"),
        new RomanoValor(5, "V"),
        new RomanoValor(4, "IV"),
        new RomanoValor(1, "I"),
                     
        ];
    }

    // Método De conversar de Real para Romano
    converterRealParaRomano(numeroReal) {
        let resultado = '';

        for (const RomanoValor of this.numerosConvertidos) {
            while (numeroReal >= RomanoValor.numeroReal) {
                resultado += RomanoValor.numeroRomano;
                numeroReal -= RomanoValor.numeroReal;
            }
        }
        return resultado;
    }
}

// Solicitação para usuario inserir algum numero
const numeroInput = prompt("Digite um número para converter para algarismos romanos:");


// Método de usar numero real inserido para Romano
const numeroReal = parseInt(numeroInput);
if (!isNaN(numeroReal)) {
    const conversor = new Conversor();
    const numeroRomano = conversor.converterRealParaRomano(numeroReal);

    // Saída em Romano
    alert(`O número ${numeroReal} em algarismos romanos é: ${numeroRomano}`);
} else {
    alert("Por favor, insira um número válido.");
}


