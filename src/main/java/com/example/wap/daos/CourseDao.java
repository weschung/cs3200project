package com.example.wap.daos;

import com.example.wap.models.Course;
import com.example.wap.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CourseDao {
    @Autowired
    CourseRepository courseRepository;
    @GetMapping("/findAllCourses")
    public Iterable<Course> findAllCourses() {
        return courseRepository.findAll();
    }
    @GetMapping("/findCourseById/{cid}")
    public Course findCourseById(@PathVariable("cid") Integer cid) {
        return courseRepository.findById(cid).get();
    }
    @GetMapping("/deleteCourse/{cid}")
    public void deleteCourse(@PathVariable("cid") Integer cid) {
        courseRepository.deleteById(cid);
    }
    @GetMapping("/createCourse")
    public Course createCourse() {
        Course course = new Course();
        course.setTitle("New Course");
        return courseRepository.save(course);
    }
    @GetMapping("/updateCourse/{courseId}/{newTitle}")
    public Course updateCourse(
            @PathVariable("courseId") Integer courseId,
            @PathVariable("newTitle") String newTitle) {
        Course course = courseRepository.findById(courseId).get();
        course.setTitle(newTitle);
        return courseRepository.save(course);
    }
}
