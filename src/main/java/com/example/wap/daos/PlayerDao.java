package com.example.wap.daos;

import com.example.wap.models.Player;
import com.example.wap.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlayerDao {
    @Autowired
    PlayerRepository PlayerRepository;
    @GetMapping("/findAllPlayers")
    public Iterable<Player> findAllPlayers() {
        return PlayerRepository.findAll();
    }
    @GetMapping("/findPlayerById/{id}")
    public Player findPlayerById(
            @PathVariable("id") Integer id) {
        return PlayerRepository.findById(id).get();
    }
    @GetMapping("/deletePlayer/{id}")
    public void deletePlayer(
            @PathVariable("id") Integer id) {
        PlayerRepository.deleteById(id);
    }
}
