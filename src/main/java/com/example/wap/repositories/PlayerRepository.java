package com.example.wap.repositories;

import com.example.wap.models.Player;
import org.springframework.data.repository.CrudRepository;

public interface PlayerRepository
        extends CrudRepository<Player, Integer> {
}
