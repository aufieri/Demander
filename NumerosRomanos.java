
import java.util.TreeMap;

public class NumerosRomanos {

    private final static TreeMap<Integer, String> map = new TreeMap<>();

    static {
        map.put(1000, "M");
        map.put(900, "CM");
        map.put(500, "D");
        map.put(400, "CD");
        map.put(100, "C");
        map.put(90, "XC");
        map.put(50, "L");
        map.put(40, "XL");
        map.put(10, "X");
        map.put(9, "IX");
        map.put(5, "V");
        map.put(4, "IV");
        map.put(1, "I");
    }

    public static String converterParaRomano(int numero) {
        int numeroArabico = map.floorKey(numero);
        if (numero == numeroArabico) {
            return map.get(numero);
        }
        return map.get(numeroArabico) + converterParaRomano(numero - numeroArabico);
    }

    public static void main(String[] args) {
        // Exemplo de uso:
        int numero = 3549;
        String numeroRomano = converterParaRomano(numero);
        System.out.println(numero + " em números romanos é: " + numeroRomano);
    }
}