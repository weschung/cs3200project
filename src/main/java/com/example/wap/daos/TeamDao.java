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
}
