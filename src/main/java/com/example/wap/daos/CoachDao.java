package com.example.wap.daos;

import com.example.wap.models.Coach;
import com.example.wap.repositories.CoachRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CoachDao {
    @Autowired
    CoachRepository CoachRepository;
    @GetMapping("/findAllCoachs")
    public Iterable<Coach> findAllCoachs() {
        return CoachRepository.findAll();
    }
    @GetMapping("/findCoachById/{id}")
    public Coach findCoachById(
            @PathVariable("id") Integer id) {
        return CoachRepository.findById(id).get();
    }
    @GetMapping("/deleteCoach/{id}")
    public void deleteCoach(
            @PathVariable("id") Integer id) {
        CoachRepository.deleteById(id);
    }
}
