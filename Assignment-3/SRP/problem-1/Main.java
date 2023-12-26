public class Main {
    public static void main(String[] args) {
        Rectangle rectangle = new Rectangle(5.0, 3.0);
        AreaCalculator calculator = new AreaCalculator();
        double area = calculator.calculateArea(rectangle);
        printArea(area);
    }

    public static void printArea(double area) {
        System.out.println("Area: " + area);
    }
}
