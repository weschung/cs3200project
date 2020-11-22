package com.example.wap.repositories;

import com.example.wap.models.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository
        extends CrudRepository<Team, Integer> {
}
