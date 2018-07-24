package board.demo.callapisample.dao;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import sun.plugin2.message.Message;

import java.util.List;
@Service
public class MessageDao {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    public List<Message> getAllMessage(){
        return  jdbcTemplate.query("SELECT user_name, message FROM message",
                (rs,rowNum) -> new message(rs.getString("user_name"),rs.getString("message")));
    }
}
