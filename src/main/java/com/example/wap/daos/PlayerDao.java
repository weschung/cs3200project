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

    @GetMapping("/createPlayer")
    public Player createPlayer() {
        Player player = new Player();
        return PlayerRepository.save(player);
    }

    @GetMapping("/renamePlayer/{id}/{newPlayerName}")
    public Player renamePlayer(
            @PathVariable("id") Integer id,
            @PathVariable("newPlayerName") String newPlayerName) {
        Player player = PlayerRepository.findById(id).get();
        player.setPlayer_name(newPlayerName);
        return PlayerRepository.save(player);
    }

    @GetMapping("/changeAge/{id}/{newAge}")
    public Player changeAge(
            @PathVariable("id") Integer id,
            @PathVariable("newAge") Integer newAge) {
        Player player = PlayerRepository.findById(id).get();
        player.setAge(newAge);
        return PlayerRepository.save(player);
    }

    @GetMapping("/changeHeight/{id}/{newHeight}")
    public Player changeHeight(
            @PathVariable("id") Integer id,
            @PathVariable("newHeight") String newHeight) {
        Player player = PlayerRepository.findById(id).get();
        player.setHeight(newHeight);
        return PlayerRepository.save(player);
    }

    @GetMapping("/changePlayerPayment/{id}/{newPayment}")
    public Player changePlayerPayment(
            @PathVariable("id") Integer id,
            @PathVariable("newPayment") Integer newPayment) {
        Player player = PlayerRepository.findById(id).get();
        player.setPlayer_payment(newPayment);
        return PlayerRepository.save(player);
    }

    @GetMapping("/changePlayerBank/{id}/{newPlayerBank}")
    public Player changePlayerBank(
            @PathVariable("id") Integer id,
            @PathVariable("newPlayerBank") String newPlayerBank) {
        Player player = PlayerRepository.findById(id).get();
        player.setPlayer_bank(newPlayerBank);
        return PlayerRepository.save(player);
    }

    @GetMapping("/changeStatistic/{id}/{newStatistic}")
    public Player changeStatistic(
            @PathVariable("id") Integer id,
            @PathVariable("newStatistic") String newStatistic) {
        Player player = PlayerRepository.findById(id).get();
        player.setStatistic(newStatistic);
        return PlayerRepository.save(player);
    }
}
