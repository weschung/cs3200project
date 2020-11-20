package com.example.wap.daos;

import com.example.wap.models.Course;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class CourseDaoTest {
    @Autowired
    CourseDao dao;

    @Test
    void findAllCourses() {
        Iterable<Course> courses = dao.findAllCourses();
        for(Course course: courses) {
            System.out.println(course);
        }
    }

    @Test
    void findCourseById() {
    }

    @Test
    void createCourse() {
    }

    @Test
    void updateCourse() {
    }

    @Test
    void deleteCourse() {
    }
}
