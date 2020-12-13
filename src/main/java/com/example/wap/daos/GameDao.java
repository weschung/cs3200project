package com.example.wap.daos;

import com.example.wap.models.Game;
import com.example.wap.models.Team;
import com.example.wap.repositories.GameRepository;
import com.example.wap.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GameDao {
    @Autowired
    GameRepository gameRepository;
    @Autowired
    TeamRepository teamRepository;
    @GetMapping("/findAllGames")
    public Iterable<Game> findAllGames() {
        return gameRepository.findAll();
    }
    @GetMapping("/findGameById/{id}")
    public Game findGameById(
            @PathVariable("id") Integer id) {
        return gameRepository.findById(id).get();
    }
    @GetMapping("/deleteGame/{id}")
    public void deleteGame(
            @PathVariable("id") Integer id) {
        gameRepository.deleteById(id);
    }
    @GetMapping("/createGame/{team_id}")
    public Game createGame(
        @PathVariable("team_id") Integer team_id){;
        Team team = teamRepository.findById(team_id).get();
        Game game = new Game();
        game.setTeam_game(team);
        game.setTeam_id(team_id);
        return gameRepository.save(game);
    }

    @GetMapping("/changeGameTeam/{id}/{newTeam}")
    public Game changeGameTeam(
            @PathVariable("id") Integer id,
            @PathVariable("newTeam") Team newTeam) {
        Game game = gameRepository.findById(id).get();
        game.setTeam_game(newTeam);
        return gameRepository.save(game);
    }

    @GetMapping("/changeOpponent/{id}/{newOpponent}")
    public Game changeOpponent(
            @PathVariable("id") Integer id,
            @PathVariable("newOpponent") String newOpponent) {
        Game game = gameRepository.findById(id).get();
        game.setOpponent(newOpponent);
        return gameRepository.save(game);
    }

    @GetMapping("/changeScore/{id}/{newScore}")
    public Game changeScore(
            @PathVariable("id") Integer id,
            @PathVariable("newScore") String newScore) {
        Game game = gameRepository.findById(id).get();
        game.setScore(newScore);
        return gameRepository.save(game);
    }
}
