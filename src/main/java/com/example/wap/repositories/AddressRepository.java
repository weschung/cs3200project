package com.example.wap.repositories;

import com.example.wap.models.Address;
import org.springframework.data.repository.CrudRepository;

public interface AddressRepository
        extends CrudRepository<Address, Integer> {
}

