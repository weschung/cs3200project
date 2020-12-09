package com.example.wap.repositories;

import com.example.wap.models.Manager;
import org.springframework.data.repository.CrudRepository;

public interface ManagerRepository
        extends CrudRepository<Manager, Integer> {
}
