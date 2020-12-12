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

    @GetMapping("/renameFan/{id}/{newUsername}")
    public Fan renameFan(
            @PathVariable("id") Integer id,
            @PathVariable("newUsername") String newUsername) {
        Fan fan = FanRepository.findById(id).get();
        fan.setUsername(newUsername);
        return FanRepository.save(fan);
    }

    @GetMapping("/changeFanTeam/{id}/{newTeam}")
    public Fan changeFanTeam(
            @PathVariable("id") Integer id,
            @PathVariable("newTeam") Integer newTeam) {
        Fan fan = FanRepository.findById(id).get();
        fan.setTeam_id(newTeam);
        return FanRepository.save(fan);
    }

    @GetMapping("/changeFanPassword/{id}/{newPassword}")
    public Fan changeFanPassword(
            @PathVariable("id") Integer id,
            @PathVariable("newPassword") String newPassword) {
        Fan fan = FanRepository.findById(id).get();
        fan.setPassword(newPassword);
        return FanRepository.save(fan);
    }

    @GetMapping("/changeFanDob/{id}/{newDob}")
    public Fan changeFanDob(
            @PathVariable("id") Integer id,
            @PathVariable("newDob") String newDob) {
        Fan fan = FanRepository.findById(id).get();
        fan.setDob(newDob);
        return FanRepository.save(fan);
    }

    @GetMapping("/changeFanFirst/{id}/{newFirst}")
    public Fan changeFanFirst(
            @PathVariable("id") Integer id,
            @PathVariable("newFirst") String newFirst) {
        Fan fan = FanRepository.findById(id).get();
        fan.setFirst_name(newFirst);
        return FanRepository.save(fan);
    }

    @GetMapping("/changeFanLast/{id}/{newLast}")
    public Fan changeFanLast(
            @PathVariable("id") Integer id,
            @PathVariable("newLast") String newLast) {
        Fan fan = FanRepository.findById(id).get();
        fan.setLast_name(newLast);
        return FanRepository.save(fan);
    }

    @GetMapping("/changeFanEmail/{id}/{newEmail}")
    public Fan changeFanEmail(
            @PathVariable("id") Integer id,
            @PathVariable("newEmail") String newEmail) {
        Fan fan = FanRepository.findById(id).get();
        fan.setEmail(newEmail);
        return FanRepository.save(fan);
    }
}
