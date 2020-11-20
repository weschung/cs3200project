package com.example.wap.daos;

import com.example.wap.models.Student;
import com.example.wap.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentDao {
    @Autowired
    StudentRepository repository;
    @GetMapping("/findAllStudents")
    public Iterable<Student> findAllStudents() {
        return repository.findAll();
    }
    @GetMapping("/findStudentById/{sid}")
    public Student findStudentById(
            @PathVariable("sid") Integer studentId) {
        return repository.findById(studentId).get();
    }
}
