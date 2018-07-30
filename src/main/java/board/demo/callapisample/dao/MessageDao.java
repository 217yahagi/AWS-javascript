package board.demo.callapisample.dao;


import board.demo.callapisample.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MessageDao {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    public List<org.apache.logging.log4j.message.Message> getAllMessage(){
        return  jdbcTemplate.query("SELECT user_name, message FROM message",
                (rs,rowNum) -> new Message(rs.getString("user_name"),rs.getString("Message")));
    }
}
