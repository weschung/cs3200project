package com.example.wap.controllers;

import com.example.wap.models.Course;
import com.example.wap.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CourseController {
    @Autowired
    CourseRepository courseRepository;
    @GetMapping("/api/courses")
    public List<Course> findAllCourses() {
        return (List<Course>) courseRepository.findAll();
    }
}
