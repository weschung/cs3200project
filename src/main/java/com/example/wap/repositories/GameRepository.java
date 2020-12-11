package com.example.wap.repositories;

import com.example.wap.models.Game;
import org.springframework.data.repository.CrudRepository;

public interface GameRepository
        extends CrudRepository<Game, Integer> {
}

