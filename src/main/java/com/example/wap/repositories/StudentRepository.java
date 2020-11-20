package com.example.wap.repositories;

import com.example.wap.models.Student;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository
    extends CrudRepository<Student, Integer> {
}
