package board.demo.callapisample.model;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class message {
    private String user_name;
    private String message;
}