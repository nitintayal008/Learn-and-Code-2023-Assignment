public class Calculate {
    int firstOperand;
    double secondOperand;
    String convertedUppercaseText;

    public void printCalculatedSum(int firstOperand, int secondOperand) {
        int additionResult = firstOperand + secondOperand;
        System.out.println("Result: " + additionResult);
    }

    public void printUpperCaseString(String inputText) {
        convertedUppercaseText = inputText.toUpperCase();
        System.out.println("Updated String: " + convertedUppercaseText);
    }
}

public class Computation {
    public static void main(String[] args) {
        Calculate calculate = new Calculator();
        calculate.firstOperand = 10; 
        calculate.secondOperand = 20.5; 
        calculate.convertedUppercaseText = "hello"; 

        calculate.printCalculatedSum(calculate.firstOperand, 5);
        calculate.printUpperCaseString("world");
    }
}
