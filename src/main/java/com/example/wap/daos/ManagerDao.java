package com.example.wap.daos;

import com.example.wap.models.Manager;
import com.example.wap.models.User;
import com.example.wap.repositories.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ManagerDao {
    @Autowired
    ManagerRepository ManagerRepository;
    @GetMapping("/findAllManagers")
    public Iterable<Manager> findAllManagers() {
        return ManagerRepository.findAll();
    }
    @GetMapping("/findManagerById/{id}")
    public Manager findManagerById(
            @PathVariable("id") Integer id) {
        return ManagerRepository.findById(id).get();
    }
    @GetMapping("/deleteManager/{id}")
    public void deleteManager(
            @PathVariable("id") Integer id) {
        ManagerRepository.deleteById(id);
    }

    @GetMapping("/scheduleManager/{id}/{newschedule}")
    public Manager scheduleManager(
            @PathVariable("id") Integer id,
            @PathVariable("newschedule") String newschedule) {
        Manager manager = ManagerRepository.findById(id).get();
        manager.setMeeting_schedule(newschedule);
        return ManagerRepository.save(manager);
    }

    @GetMapping("/createManager")
    public Manager createManager() {
        User user = new User();
        Manager manager = new Manager();
        manager.setId(user.getId());
        return ManagerRepository.save(manager);
    }
    @GetMapping("/renameManager/{id}/{newUsername}")
    public Manager renameManager(
            @PathVariable("id") Integer id,
            @PathVariable("newUsername") String newUsername) {
        Manager manager = ManagerRepository.findById(id).get();
        manager.setUsername(newUsername);
        return ManagerRepository.save(manager);
    }

    @GetMapping("/changeManagerPassword/{id}/{newPassword}")
    public Manager changeManagerPassword(
            @PathVariable("id") Integer id,
            @PathVariable("newPassword") String newPassword) {
        Manager manager = ManagerRepository.findById(id).get();
        manager.setPassword(newPassword);
        return ManagerRepository.save(manager);
    }

    @GetMapping("/changeManagerDob/{id}/{newDob}")
    public Manager changeManagerDob(
            @PathVariable("id") Integer id,
            @PathVariable("newDob") String newDob) {
        Manager manager = ManagerRepository.findById(id).get();
        manager.setDob(newDob);
        return ManagerRepository.save(manager);
    }

    @GetMapping("/changeManagerFirst/{id}/{newFirst}")
    public Manager changeManagerFirst(
            @PathVariable("id") Integer id,
            @PathVariable("newFirst") String newFirst) {
        Manager manager = ManagerRepository.findById(id).get();
        manager.setFirst_name(newFirst);
        return ManagerRepository.save(manager);
    }

    @GetMapping("/changeManagerLast/{id}/{newLast}")
    public Manager changeManagerLast(
            @PathVariable("id") Integer id,
            @PathVariable("newLast") String newLast) {
        Manager manager = ManagerRepository.findById(id).get();
        manager.setLast_name(newLast);
        return ManagerRepository.save(manager);
    }

    @GetMapping("/changeManagerEmail/{id}/{newEmail}")
    public Manager changeManagerEmail(
            @PathVariable("id") Integer id,
            @PathVariable("newEmail") String newEmail) {
        Manager manager = ManagerRepository.findById(id).get();
        manager.setEmail(newEmail);
        return ManagerRepository.save(manager);
    }
}
