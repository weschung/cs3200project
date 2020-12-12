package com.example.wap.daos;

import com.example.wap.models.Team;
import com.example.wap.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeamDao {
    @Autowired
    TeamRepository teamRepository;
    @GetMapping("/findAllTeams")
    public Iterable<Team> findAllTeams() {
        return teamRepository.findAll();
    }
    @GetMapping("/findTeamById/{id}")
    public Team findTeamById(
            @PathVariable("id") Integer id) {
        return teamRepository.findById(id).get();
    }
    @GetMapping("/deleteTeam/{id}")
    public void deleteTeam(
            @PathVariable("id") Integer id) {
        teamRepository.deleteById(id);
    }
    @GetMapping("/createTeam")
    public Team createTeam() {
        Team team = new Team();
        team.setTeam_name("New Team");
        return teamRepository.save(team);
    }
    @GetMapping("/renameTeam/{id}/{newTeamname}")
    public Team renameTeam(
            @PathVariable("id") Integer id,
            @PathVariable("newTeamname") String newTeamname) {
        Team team = teamRepository.findById(id).get();
        team.setTeam_name(newTeamname);
        return teamRepository.save(team);
    }

    @GetMapping("/changeYr/{id}/{newYr}")
    public Team changeYr(
            @PathVariable("id") Integer id,
            @PathVariable("newYr") Integer newYr) {
        Team team = teamRepository.findById(id).get();
        team.setYr_founded(newYr);
        return teamRepository.save(team);
    }

    @GetMapping("/changeConference/{id}/{newConference}")
    public Team changeConference(
            @PathVariable("id") Integer id,
            @PathVariable("newConference") String newConference) {
        Team team = teamRepository.findById(id).get();
        team.setConference(newConference);
        return teamRepository.save(team);
    }

    @GetMapping("/changeRecord/{id}/{newRecord}")
    public Team changeRecord(
            @PathVariable("id") Integer id,
            @PathVariable("newRecord") String newRecord) {
        Team team = teamRepository.findById(id).get();
        team.setRecord(newRecord);
        return teamRepository.save(team);
    }

    @GetMapping("/changeStanding/{id}/{newStanding}")
    public Team changeStanding(
            @PathVariable("id") Integer id,
            @PathVariable("newStanding") String newStanding) {
        Team team = teamRepository.findById(id).get();
        team.setStanding(newStanding);
        return teamRepository.save(team);
    }

    @GetMapping("/changeGameSchedule/{id}/{newGameSchedule}")
    public Team changeGameSchedule(
            @PathVariable("id") Integer id,
            @PathVariable("newGameSchedule") String newGameSchedule) {
        Team team = teamRepository.findById(id).get();
        team.setGame_schedule(newGameSchedule);
        return teamRepository.save(team);
    }
}
