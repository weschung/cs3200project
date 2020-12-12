package com.example.wap.daos;

import com.example.wap.models.Fan;
import com.example.wap.models.User;
import com.example.wap.repositories.FanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FanDao {
    @Autowired
    FanRepository FanRepository;
    @GetMapping("/findAllFans")
    public Iterable<Fan> findAllFans() {
        return FanRepository.findAll();
    }
    @GetMapping("/findFanById/{id}")
    public Fan findFanById(
            @PathVariable("id") Integer id) {
        return FanRepository.findById(id).get();
    }
    @GetMapping("/deleteFan/{id}")
    public void deleteFan(
            @PathVariable("id") Integer id) {
        FanRepository.deleteById(id);
    }

    @GetMapping("/createFan")
    public Fan createFan() {
        User user = new User();
        Fan fan = new Fan();
        fan.setId(user.getId());
        fan.setSeason_pass(false);
        return FanRepository.save(fan);
    }

    @GetMapping("/buypassFan/{id}/{newpass}")
    public Fan buypassFan(
            @PathVariable("id") Integer id,
            @PathVariable("newpass") Boolean newpass) {
        Fan fan = FanRepository.findById(id).get();
        fan.setSeason_pass(newpass);
        return FanRepository.save(fan);
    }
}
