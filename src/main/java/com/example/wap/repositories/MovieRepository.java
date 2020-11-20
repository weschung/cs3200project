package com.example.wap.repositories;

import com.example.wap.models.Movie;
import org.springframework.data.repository.CrudRepository;

public interface MovieRepository
        extends CrudRepository<Movie, Integer> {
}
