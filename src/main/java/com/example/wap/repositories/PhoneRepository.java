package com.example.wap.repositories;

import com.example.wap.models.Phone;
import org.springframework.data.repository.CrudRepository;

public interface PhoneRepository
        extends CrudRepository<Phone, Integer> {
}

