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
    @GetMapping("/findAllCoaches")
    public Iterable<Coach> findAllCoaches() {
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

    @GetMapping("/createCoach")
    public Coach createCoach() {
        Coach coach = new Coach();
        return CoachRepository.save(coach);
    }

    @GetMapping("/changeCoachName/{id}/{coach_name}")
    public Coach changeCoachName(
            @PathVariable("id") Integer id,
            @PathVariable("coach_name") String newCoach_name) {
        Coach coach = CoachRepository.findById(id).get();
        coach.setCoach_name(newCoach_name);
        return CoachRepository.save(coach);
    }

    @GetMapping("/changeStrategy/{id}/{strategy}")
    public Coach changeStrategy(
            @PathVariable("id") Integer id,
            @PathVariable("strategy") String newStrategy) {
        Coach coach = CoachRepository.findById(id).get();
        coach.setStrategy(newStrategy);
        return CoachRepository.save(coach);
    }

    @GetMapping("/changeCoachTeam/{id}/{team_id}")
    public Coach changeTeam(
            @PathVariable("id") Integer id,
            @PathVariable("team_id") Integer newTeam) {
        Coach coach = CoachRepository.findById(id).get();
        coach.setTeam_id(newTeam);
        return CoachRepository.save(coach);
    }

    @GetMapping("/changeCoachManager/{id}/{newManager}")
    public Coach changeManager(
            @PathVariable("id") Integer id,
            @PathVariable("newManager") Integer newManager) {
        Coach coach = CoachRepository.findById(id).get();
        coach.setManager_id(newManager);
        return CoachRepository.save(coach);
    }

    @GetMapping("/changePracticeSchedule/{id}/{newPracticeSchedule}")
    public Coach changePracticeSchedule(
            @PathVariable("id") Integer id,
            @PathVariable("newPracticeSchedule") String newPracticeSchedule) {
        Coach coach = CoachRepository.findById(id).get();
        coach.setPractice_schedule(newPracticeSchedule);
        return CoachRepository.save(coach);
    }

    @GetMapping("/changeCoachPayment/{id}/{newPayment}")
    public Coach changePayment(
            @PathVariable("id") Integer id,
            @PathVariable("newPayment") Integer newPayment) {
        Coach coach = CoachRepository.findById(id).get();
        coach.setCoach_payment(newPayment);
        return CoachRepository.save(coach);
    }

    @GetMapping("/changeCoachBank/{id}/{newCoachBank}")
    public Coach changeBank(
            @PathVariable("id") Integer id,
            @PathVariable("newCoachBank") String newCoachBank) {
        Coach coach = CoachRepository.findById(id).get();
        coach.setCoach_bank(newCoachBank);
        return CoachRepository.save(coach);
    }
}
