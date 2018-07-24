package board.demo.callapisample.controller;

import com.sun.xml.internal.ws.api.message.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/messahge")
public class MessageController {
    @Autowired
    private  MessageDao messageDao;

    @RequestMapping(method = RequestMethod.GET)
    public List<Message> getAllMessage(){
        return messageDao.getAllMessage();
    }
}
