package com.example.wap.repositories;

import com.example.wap.models.Course;
import org.springframework.data.repository.CrudRepository;

public interface CourseRepository
        extends CrudRepository<Course, Integer> {
}
