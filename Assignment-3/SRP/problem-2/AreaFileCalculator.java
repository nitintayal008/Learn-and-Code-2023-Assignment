import java.io.FileWriter;
import java.io.IOException;

public class AreaFileWriter {
    public void writeAreaToFile(double area) {
        try (FileWriter writer = new FileWriter("area.txt")) {
            writer.write("Area: " + area);
        } catch (IOException e) {
            System.err.println("Error writing to file: " + e.getMessage());
        }
    }
}
