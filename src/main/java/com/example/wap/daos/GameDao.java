package com.example.wap.daos;

import com.example.wap.models.Game;
import com.example.wap.repositories.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GameDao {
    @Autowired
    GameRepository gameRepository;
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
    @GetMapping("/createGame")
    public Game createGame() {
        Game game = new Game();
        return gameRepository.save(game);
    }
}
