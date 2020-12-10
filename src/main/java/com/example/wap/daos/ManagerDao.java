package com.example.wap.daos;

import com.example.wap.models.Manager;
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
}
